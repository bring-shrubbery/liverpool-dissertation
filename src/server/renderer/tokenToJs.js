// As a reminder:
// One item in an array of tokens can only be an object and only have following parameters:
// * type           - for every token
// * value          - for every token
// * code  - for scopes (math/regular)

export function tokenToJs (nodeId, variableName, jsonTokens) {
    let executableString = `var ${nodeId}${variableName} = function(time) { return `;
    
    executableString += calculateCode([...jsonTokens])

    return executableString + "};\n";
}

function calculateCode(json) {
    let executableString = "";

    if(json == null) return "";

    for(let i = 0; i < json.length; i++) {
        // Variables for convenience
        const token = json[i];
        const type = token.type;
        const value = token.value;

        // Actual logic
        if(type != "scope" && type != "math") {
            // One of the basic types

            if(value === 'PI') {
                executableString += "Math.PI";
            } else if (type === "var" && value !== "time") {
                executableString += `${value}(time)`;
            } else {
                executableString += value;
            }
        } else if (type === "math") {
            // Math function

            if(value === "sin") {
                // If one of the supported functions, recursevly generate string from the code parameter
                executableString += "Math.sin(";
                executableString += calculateCode(token.code);
                executableString += ")";
            } else if(value === "cos") {
                // If one of the supported functions, recursevly generate string from the code parameter
                executableString += "Math.cos(";
                executableString += calculateCode(token.code);
                executableString += ")";
            } else if(value === "tan") {
                // If one of the supported functions, recursevly generate string from the code parameter
                executableString += "Math.tan(";
                executableString += calculateCode(token.code);
                executableString += ")";
            } else if(value === "sqw") {
                executableString += "Math.sqw(";
                executableString += calculateCode(token.code);
                executableString += ")";
            } else if(value === "exp") {
                executableString += "Math.exp(";
                executableString += calculateCode(token.code);
                executableString += ")";
            } else if(value === "snc") {
                executableString += "Math.sinc(";
                executableString += calculateCode(token.code);
                executableString += ")";
            } else if(value === "stp") {
                executableString += "Math.step(";
                executableString += calculateCode(token.code);
                executableString += ")";
            } else if(value === "rmp") {
                executableString += "Math.ramp(";
                executableString += calculateCode(token.code);
                executableString += ")";
            } else if(value === "ups") {
                executableString += "Math.pulse(";
                executableString += calculateCode(token.code);
                executableString += ")";
            } else if(value === "nos") {
                executableString += "Math.noise(";
                executableString += calculateCode(token.code);
                executableString += ")";
            } else if(value === "saw") {
                executableString += "Math.sawtooth(";
                executableString += calculateCode(token.code);
                executableString += ")";
            }   else if(value === "pyr") {
                executableString += "Math.pyramid(";
                executableString += calculateCode(token.code);
                executableString += ")";
            }  else {
                // If not supported function, throw error to the console
                console.error("Unsupported math function !!!");
            }
        } else {
            // Regular scope

            executableString += "(" + calculateCode(token.code) + ")";
        }
    }

    return executableString;
}