import {
    separateNodes,
    generateConnectionDictionary,
    objectSize,
    wasCalculated,
    allInputsCalculated,
    calculateOutput,
    getTouchInputs,
    initTime,
    generateTouchControllers,
    getOtherSideOfConnector,
    initAnimationTime,
    saveAnimation
} from './scriptGeneratorFunctions';

const SAMPLE_RATE = 512; // Samples per second
const DURATION = 2; // Seconds, ideally should be dividable by 2
const OFFSET = 0; // Which point should be the centre of the scope

export function scriptGenerator(allNodes: NodeCollection, allConnections: Connector[]) {
    // Executable to store generated javascript code. Any initialisation code should be here.
    let exeArray: string[] = [];
    let executable = "var graphs = {};\n";

    // Init additional math functions
    executable += `Math.__proto__.sqw = function (x) {
        let val = x >= 0 ? ((x/(2*Math.PI))%1) : (((-x-Math.PI)/(2*Math.PI))%1);
        if(val >= 0 && val <= 0.5) {
            return 0.5;
        } else {
            return -0.5;
        }
    };
    Math.__proto__.sinc = function (x) {
        if(x == 0) return 1;
        return Math.sin(x)/x;
    };
    Math.__proto__.pulse = function (x) {
        const xi = x/(2*Math.PI);
        if(xi > 1) return 0;
        if(xi < -1) return 0;
        return 1;
    };
    Math.__proto__.pyramid = function (x) {
        const xi = x/(2*Math.PI);
        let output = 1;
        if(xi > 1) output = 0;
        if(xi < -1) output = 0;
        if(xi > 0) output = 1-xi;
        if(xi < 0) output = 1+xi;
        if(output < 0) output = 0;
        return output;
    };
    Math.__proto__.sawtooth = function (x) {
        if(x < 0) {
            const xi = (x/(2*Math.PI))%1;
            if(xi > 0.5) return -xi-Math.floor(x);
            if(xi < 0.5) return xi-Math.floor(x);
        } else {
            const xi = (-x/(2*Math.PI))%1;
            if(xi > 0.5) return -xi-Math.floor(x);
            if(xi < 0.5) return xi+Math.floor(x);
        }
        return 0;
    };
    Math.__proto__.ramp = function (x) {
        if(x < 0) return 0;
        return x/(2*Math.PI);
    };
    Math.__proto__.step = function (x) {
        if(x < 0) return 0;
        return 1;
    };
    Math.__proto__.noise = function (x) {
        return Math.random();
    };
    document.body.ontouchend = function (e) {
        e.prefentDefault();
    };
    const allInputs = document.getElementsByTagName("input");
    for(let i = 0; i < allInputs.length; i++) {
        let currentInput = allInputs.item(i);
        document.getElementById(currentInput.id).readOnly = false;
    }\n`;

    // Calculated nodes have following shape: "nodeId:outputId"
    let calculatedNodes: string[] = [];
    
    // Statistics object
    let statistics = {
        loopCounter: 0,
        initialTotalNodes: objectSize(allNodes),
        initialTotalConnectors: allConnections.length,
        startTime: 0,
        endTime: 0
    };
    
    // Separates uncalculated nodes from scopes and UI at the start.
    let {
        uncalculatedNodes, 
        allScopes, 
        uiNodes, 
        fftNodes,
        time,
        animationNodes,
        filterNodes,
        derivativeNodes,
        integralNodes,
        reverseNodes
    } = separateNodes(allNodes);

    if(time["time"]) {
        const timeNode = time["time"];
        const timeSpeed = parseFloat(timeNode.settings[0].value);
        const timeRange = parseFloat(timeNode.settings[1].value);
        const timeOrigin = parseFloat(timeNode.settings[2].value);

        const timeStart = timeOrigin - timeRange / 2;
        const timeStop = timeOrigin + timeRange / 2;
        const timeStep = timeRange / 1024;
        executable += initTime(timeStart, timeStop, timeStep);
        executable += "var deltaTime = 60;"

        executable += `setInterval(function () {
            t = t.map(v => v + ${timeSpeed}/deltaTime);
            update();
        }, deltaTime);`;
    } else {
        // Setup default time
        executable += initTime(OFFSET - DURATION / 2, OFFSET + DURATION / 2, 1 / SAMPLE_RATE);
    }

    if(objectSize(animationNodes) > 0) {
        executable += "var allTimers = [];";
        for(let nodeKey in animationNodes) {
            const currentNode = animationNodes[nodeKey];
            const outputKey = currentNode.outputs[0].title;
            
            executable += saveAnimation(currentNode, nodeKey);
            calculatedNodes.push(`${nodeKey}:${outputKey}`)
        }

        executable += initAnimationTime();
    }
    
    // Separate touch nodes form regular nodes
    let touchNodesSeparated = getTouchInputs(uncalculatedNodes);

    uncalculatedNodes = touchNodesSeparated.uncalculatedNodes;

    // Deal with touch Controls
    let touchNodes = touchNodesSeparated.touchNodes;

    executable += generateTouchControllers(touchNodes);

    for (let t in touchNodes) {
        for (let o in touchNodes[t].outputs) {
            calculatedNodes.push(`${t}:${touchNodes[t].outputs[o].title}`)
        }
    }

    // Connection Dictionary contains connections in key: value format, where
    // both contain nodeId and settingId as strings separated by a colon.
    // let connectionDictionary = generateConnectionDictionary(allConnections);

    // General rules for algorithm writing:
    // * use as many functions as possible (in performance bounds)
    // * 

    // 0. Loop through uncalculated nodes and find scopes. Scopes do not have outputs, so no need to find inputs.
    // 0.0 Do it in a function?

    // 1. Loop until all nodes are calculated
    // |   1. Check if node was calculated before, if yes go to next node. (function)
    // |   2. If was not calculated:
    // |   |   1. Check if all connected inputs are connected to the calculated nodes, if not - go to next node. (function)
    // |   |   2. If yes, save all unconnected inputs (value from default value). (function for each save)
    // |   |   3. Check if output is pointing to a generator. (function)
    // |   |   4. If yes, parse generator
    // |   |   |   1. Scan generator and save variables
    // |   |   |   2. If variable is a generator go to step 1.2.4
    // |   |   |   3. Loop until all generators were parsed
    // |   |   | ----------- In following, inputs are checked first since setting can be an input ----------------
    // |   |   5. Check if output is pointing to an input, if yes assign input variable to the output variable
    // |   |   6. Check if output is pointing to a setting, if yes assign constant to the setting
    // 2. For each scope:
    // |   1. Get all inputs and save them in variables (assumed to be calculated since termination condition from step 1 is based on all nodes being calculated.)
    // |   2. Parse first generator and generate scope output variable (making sure that all variables from generator were saved beforehand)
    // |   3. Generate an array of output data based on general (or connected) time array and save it into a variable
    // |   4. Create redraw function, inside that function:
    // |   |   1. Find appropriate canvas node in the dom
    // |   |   2. Get context
    // |   |   3. Repopulate graph array with new graphs.
    // |   5. Create updateData function, inside that function:
    // |   |   1. Loop through graph array and update graphs with new data.


    // 0.0 Loop through all ui nodes and save their output variable names
    for(let nodeKey in uiNodes) {
        // Save current node into a constant
        const currentNode = uiNodes[nodeKey];
        const outputKey = currentNode.outputs[0].title;

        executable += `document.getElementById("${nodeKey}Input").oninput = function (e) {
            ${nodeKey}${outputKey} = function (t) {
                return parseFloat(e.target.value)
            };
            document.getElementById("${nodeKey}Indicator").innerText = e.target.value;
            update();
        };\n`;
        executable += `var ${nodeKey}${outputKey} = function (t) { return ${uiNodes[nodeKey].settings[3].value}};\n`;

        calculatedNodes.push(`${nodeKey}:${outputKey}`);
        
        delete uncalculatedNodes[nodeKey];
    }

    // 0.1 Loop through filter nodes and save them
    for(let f in filterNodes) {
        const currentNode = filterNodes[f];
        let { otherNodeId, otherSettingId } = getOtherSideOfConnector(allConnections, null, {nodeId: f, settingId: currentNode.inputs[0].title});

        executable += `var ${f}${currentNode.outputs[0].title} = function(time) {
            // if(typeof window.${f}${currentNode.outputs[0].title}LastOutput == 'undefined') {
            //     return ${otherNodeId}${otherSettingId}(time);
            // }
            const lastValue = typeof window.${f}${currentNode.outputs[0].title}LastOutput == 'number' ? window.${f}${currentNode.outputs[0].title}LastOutput : 0;
            const currentValue = ${otherNodeId}${otherSettingId}(time);
            const newValue = lastValue + (currentValue - lastValue) * ${currentNode.settings[0].value};
            window.${f}${currentNode.outputs[0].title}LastOutput = newValue;
            return window.${f}${currentNode.outputs[0].title}LastOutput;
        };\n`;

        calculatedNodes.push(`${f}:${currentNode.outputs[0].title}`);
        // delete uncalculatedNodes[f];
    }

    // 0.2 Save derivative nodes
    for(let d in derivativeNodes) {
        const currentNode = derivativeNodes[d];
        let {otherNodeId, otherSettingId} = getOtherSideOfConnector(allConnections, null, {nodeId: d, settingId: currentNode.inputs[0].title});

        executable += `var ${d}${currentNode.outputs[0].title} = function(time) {
            const lastValue = typeof window.${d}${currentNode.outputs[0].title}LastOutput == 'number' ? window.${d}${currentNode.outputs[0].title}LastOutput : 0;
            const currentValue = ${otherNodeId}${otherSettingId}(time);
            const newValue = (currentValue - lastValue) * 16.3;
            window.${d}${currentNode.outputs[0].title}LastOutput = ${otherNodeId}${otherSettingId}(time);
            return newValue;
        };\n`;

        calculatedNodes.push(`${d}:${currentNode.outputs[0].title}`);
        // delete uncalculatedNodes[d];
    }

    // 0.3 Save integral nodes
    for(let i in integralNodes) {
        const currentNode = integralNodes[i];
        const isCompare = Boolean(currentNode.settings[0].value);
        let { otherNodeId, otherSettingId } = getOtherSideOfConnector(allConnections, null, { nodeId: i, settingId: currentNode.inputs[0].title });
        let signal2otherNodeId: string;
        let signal2otherSettingId: string;
        if(isCompare) {
            let sig2data = getOtherSideOfConnector(allConnections, null, { nodeId: i, settingId: currentNode.inputs[1].title });
            signal2otherNodeId = sig2data.otherNodeId;
            signal2otherSettingId = sig2data.otherSettingId;
        }

        executable += `var ${i}${currentNode.outputs[0].title} = function (time) {
            const timeStep = Math.abs(t[1] - t[0]);
            const scaleFactor = 0.1;
            if(typeof window.${i}${currentNode.outputs[0].title}Done == 'undefined') window.${i}${currentNode.outputs[0].title}Done = true;
            const timeIndex = t.length/2 + parseInt(time / timeStep);
            ${isCompare ? `if(${i}${currentNode.outputs[0].title}Done) {
                window.${i}${currentNode.outputs[0].title}Signal1 = new Array(t.length*0.25).fill(0);
                window.${i}${currentNode.outputs[0].title}Signal2 = new Array(t.length*0.75).fill(0);

                for(let tt = t[0]; tt < t[t.length - 1]; tt+=timeStep) {
                    window.${i}${currentNode.outputs[0].title}Signal1.push(${otherNodeId}${otherSettingId}(tt));
                    window.${i}${currentNode.outputs[0].title}Signal2.push(${signal2otherNodeId}${signal2otherSettingId}(tt));
                }

                for(let f = 0; f <= t.length*0.75; f++) {
                    window.${i}${currentNode.outputs[0].title}Signal1.push(0);
                }

                for(let f = 0; f <= t.length*0.25; f++) {
                    window.${i}${currentNode.outputs[0].title}Signal2.push(0);
                }
                
                let result = [];
                
                const sig1length = window.${i}${currentNode.outputs[0].title}Signal1.length;
                const sig2length = window.${i}${currentNode.outputs[0].title}Signal2.length;

                console.log(window.${i}${currentNode.outputs[0].title}Signal1);
                console.log(sig1length, sig2length);

                for(let ti = 0; ti < sig2length; ti++) {
                    const sig1data = window.${i}${currentNode.outputs[0].title}Signal1.slice(0, ti);
                    const sig2data = window.${i}${currentNode.outputs[0].title}Signal2.slice(sig2length - ti, sig2length);

                    let currentSum = 0;
                    for(let s = 0; s < sig2data.length; s++) {
                        currentSum += sig1data[s]*sig2data[s]*scaleFactor;
                    }

                    result.push(currentSum);
                }

                window.${i}${currentNode.outputs[0].title}Done = false;
                window.${i}${currentNode.outputs[0].title}result = result.slice(sig2length/2, sig2length);
            }

            if(time == t[t.length - 1]) { window.${i}${currentNode.outputs[0].title}Done = true; }
            return window.${i}${currentNode.outputs[0].title}result[timeIndex];
            ` : `if(${i}${currentNode.outputs[0].title}Done) {
                window.${i}${currentNode.outputs[0].title}Integral = 0;

                for(let tt = t[0]; tt < t[t.length - 1]; tt+=timeStep) {
                    window.${i}${currentNode.outputs[0].title}Integral += ${otherNodeId}${otherSettingId}(tt)*scaleFactor;
                }

                window.${i}${currentNode.outputs[0].title}Done = false;
            }

            if(time == t[t.length - 1]) { window.${i}${currentNode.outputs[0].title}Done = true; }
            return window.${i}${currentNode.outputs[0].title}Integral;
            `}
        };\n`;

        calculatedNodes.push(`${i}:${currentNode.outputs[0].title}`);
    }

    // 0.4 Save reverse nodes
    for(let r in reverseNodes) {
        const currentNode = reverseNodes[r];
        let { otherNodeId, otherSettingId } = getOtherSideOfConnector(allConnections, null, { nodeId: r, settingId: currentNode.inputs[0].title });
        
        executable += `var ${r}${currentNode.outputs[0].title} = function (time) {
            return ${otherNodeId}${otherSettingId}(-time);
        };\n`;

        calculatedNodes.push(`${r}:${currentNode.outputs[0].title}`);
    }

    // 1. Loop until all nodes are calculated and count number of iterations for statistics
    for (statistics.loopCounter = 0; objectSize(uncalculatedNodes) > 0; statistics.loopCounter++) {
        
        // Loop through all uncalculated nodes
        for (let nodeKey in uncalculatedNodes) {
            // Save current node into a constant
            const currentNode = uncalculatedNodes[nodeKey];

            // Go to next node if not all connected inputs were calculated already
            if (!allInputsCalculated(nodeKey, currentNode.inputs, allConnections, calculatedNodes)) continue;

            let currentNodeCalculatedOutputs: string[] = [];

            // Loop through every output of the node to calculate them
            for (let o = 0; o < currentNode.outputs.length; o++) {
                const outputKey = currentNode.outputs[o].title;
                // If current output was calculated already, skip to next one
                if (wasCalculated(calculatedNodes, nodeKey, outputKey)) {
                    currentNodeCalculatedOutputs.push(`${nodeKey}:${outputKey}`);
                    continue;
                }

                // If not, calculate it and append to the executable text.
                let { exe, wasSuccessful } = calculateOutput(nodeKey, outputKey, currentNode, allConnections);
                if (wasSuccessful) {
                    executable += exe;

                    calculatedNodes.push(`${nodeKey}:${outputKey}`);
                } else {
                    console.error(`Could not generate output code: ${nodeKey} - ${outputKey} | scriptGenerator.ts`)
                }
            }

            if (currentNodeCalculatedOutputs.length === currentNode.outputs.length) {
                delete uncalculatedNodes[nodeKey];
            }
        }
    }

    // 2. Loop through all scopes and draw graphs

    exeArray.push(executable);
    executable = "";

    executable += "function update() {\n";

    let gifRecordingStart = `document.getElementById("signals-recording-start").onclick = function (e) {
        e.preventDefault();
        isRecording = true;
        document.getElementById("signals-recording-start").style.display = "none";
        document.getElementById("signals-recording-stop").style.display = "block";
        `;

    let gifRecordingStop = `document.getElementById("signals-recording-stop").onclick = function (e) {
        e.preventDefault();
        isRecording = false;
        document.getElementById("signals-recording-start").style.display = "block";
        document.getElementById("signals-recording-stop").style.display = "none";
        `;

    // Loop through time scopes
    for (let s in allScopes) {
        const currentScope = allScopes[s];

        let dataInitialiserArray = [];
        let dataGenerationArray = [];

        for(let i = 0; i < currentScope.inputs.length; i++) {
            const inputTitle = currentScope.inputs[i].title;
            const { otherNodeId, otherSettingId } = getOtherSideOfConnector(allConnections, null, { nodeId: s, settingId: inputTitle});

            dataInitialiserArray.push(`let ${inputTitle}data = [];\n`);
            dataGenerationArray.push(`${inputTitle}data.push(${otherNodeId}${otherSettingId}(t[i]));\n`);
        }

        let dataInitialiserComposite = "";
        let dataGenerationComposite = "";

        for(let d in dataInitialiserArray) {
            dataInitialiserComposite += dataInitialiserArray[d];
        }

        for(let d in dataGenerationArray) {
            dataGenerationComposite += dataGenerationArray[d];
        }

        let dataGenerationSnippet = `${dataInitialiserComposite}
            for(let i = 0; i < t.length; i++) {
                ${dataGenerationComposite}
            }`;

        let datasets = [...currentScope.settings].slice(3, currentScope.settings.length).map((setting, i) => {
            const inputTitle = currentScope.inputs[i].title;
            return `{
                label: '${inputTitle.replace("_", " ")}',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: '${setting.value}',
                data: ${inputTitle}data
            }`
        });

        let datasetsArraySnippet = "[";
        for(let d = 0; d < datasets.length; d++) {
            datasetsArraySnippet += datasets[d];
            if(d != (datasets.length - 1)) {
                datasetsArraySnippet += ","
            } else {
                datasetsArraySnippet += "]"
            }
        }

        executable += `
        if(graphs.${s}) {
            ${dataGenerationSnippet}
            graphs.${s}.data.datasets = ${datasetsArraySnippet};
            graphs.${s}.update();
            if(typeof ${s}gif !== 'undefined') {
                if(!lastFrameTimestamp) { 
                    lastFrameTimestamp = new Date;
                } else {
                    const now = new Date;
                    const timeSinceLastFrame = now - lastFrameTimestamp;
                    lastFrameTimestamp = new Date;
    
                    var tempCanvas = document.createElement("canvas");
                    tempCanvas.width = graphs.${s}.canvas.width/2;
                    tempCanvas.height = graphs.${s}.canvas.height/2;
                    var tempCtx = tempCanvas.getContext("2d");
                    tempCtx.fillStyle = "#FFF";
                    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
                    tempCtx.drawImage(graphs.${s}.canvas, 0, 0, graphs.${s}.canvas.width/2, graphs.${s}.canvas.height/2);
    
                    window.${s}gif.addFrame(tempCtx, {delay: timeSinceLastFrame});
                }
            }
        } else {
            let canvasNode = document.getElementById("${s}");
            
            var w = canvasNode.parentNode.offsetWidth;
            var h = canvasNode.parentNode.offsetHeight;
            
            canvasNode.width = w;
            canvasNode.height = h;
            
            var ctx = canvasNode.getContext("2d");

            ${dataGenerationSnippet}

            var myChart = new Chart(ctx, {
                type: 'line',
                data: { labels: t.map(ti => ti.toFixed(2)), datasets: ${datasetsArraySnippet}},
                options: {
                    elements: { line: { tension: 0, stepped: false }, point: { radius: 0, hitRadius: 0, hoverRadius: 0 } },
                    animation: { duration: 0 },
                    tooltips: { enabled: false }, 
                    legend: { display: ${currentScope.inputs.length > 1 ? 'true' : 'false'} }
                    ${(currentScope.settings[1].value == "0") && (currentScope.settings[2].value == "0") ? '' : `, scales: {
                        yAxes: [{ticks: {
                            max: ${parseFloat(currentScope.settings[1].value) + parseFloat(currentScope.settings[2].value) / 2},
                            min: ${parseFloat(currentScope.settings[1].value) - parseFloat(currentScope.settings[2].value) / 2},
                            stepSize: ${parseFloat(currentScope.settings[2].value) / 10}
                        }}]
                    }`}, title: { display: true, text: '${currentScope.title}', position: 'bottom' }
                }
            });

            graphs.${s} = myChart;
        }`;

        gifRecordingStart += `window.${s}gif = new GIF({
            workers: 1,
            quality: 10,
            workerScript: "/gif.worker.js",
            width: graphs.${s}.canvas.width / 2,
            height: graphs.${s}.canvas.height / 2
        });`;
        gifRecordingStop += `window.${s}gif.on('finished', function(blob) {
            // location.assign(URL.createObjectURL(blob));
            download(blob, "anim.gif", "image/gif");

            delete window.${s}gif;
        });

        window.${s}gif.render();`

        exeArray.push(executable);
        executable = "";
    }

    executable += gifRecordingStart + "};\n";
    executable += gifRecordingStop + "};\n";

    // Loop through fft scopes
    for(let f in fftNodes) {
        const currentScope = fftNodes[f];
        const { otherNodeId, otherSettingId } = getOtherSideOfConnector(allConnections, null, { nodeId: f, settingId: "signal" });

        executable += `if(graphs.${f}) {
            let data = [];
            for(let i = 0; i < t.length; i++) {data.push(${otherNodeId}${otherSettingId}(t[i]));}

            let f = new FFT(data.length);
            let complexOutput = f.createComplexArray();

            f.realTransform(complexOutput, data);

            complexOutput = complexOutput.splice(0, ${parseInt(currentScope.settings[2].value)});
            
            complexOutput = complexOutput.map(val => val * 2 / data.length);

            graphs.${f}.data.datasets[0].data = complexOutput;
            graphs.${f}.update();
        } else {
            let canvasNode = document.getElementById("${f}");

            var viewSize = {
                x: canvasNode.parentNode.offsetWidth,
                y: canvasNode.parentNode.offsetHeight
            }
            
            var w = viewSize.x;
            var h = viewSize.y;
            
            canvasNode.width = w;
            canvasNode.height = h;
            
            var ctx = canvasNode.getContext("2d");

            let data = [];

            for(let i = 0; i < t.length; i++) {
                data.push(${otherNodeId}${otherSettingId}(t[i]));
            }

            let f = new FFT(data.length);
            let complexOutput = f.createComplexArray();
            f.realTransform(complexOutput, data);

            complexOutput = complexOutput.splice(0, ${parseInt(currentScope.settings[2].value)});

            complexOutput = complexOutput.map(val => val * 2 / data.length);

            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: complexOutput.map((val, i) => parseFloat(i/2).toFixed(1)),
                    datasets: [
                        {
                            label: "signal",
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            borderColor: '${currentScope.settings[1].value}',
                            data: complexOutput,
                            steppedLine: 'middle'
                        }
                    ]
                }, options: {
                    animation: {
                        duration: 0
                    }, tooltips: {
                        enabled: true
                    }, legend: {
                        display: ${currentScope.inputs.length > 1}
                    }, title: {
                        display: true,
                        text: '${currentScope.title}',
                        position: 'bottom'
                    }, elements: { 
                        line: { tension: 0 },
                        point: { radius: 0, hitRadius: 0, hoverRadius: 0 }
                    }, tooltips: { enabled: false }
                }
            });

            graphs.${f} = myChart;
        }`;
    }

    executable += "};\n"
    executable += "update();"

    exeArray.push(executable);
    executable = "";

    return exeArray;
}