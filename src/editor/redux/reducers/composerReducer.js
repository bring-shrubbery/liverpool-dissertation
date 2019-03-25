const projectData = document.projectData;

const defaultState = {
    allNodes: {...projectData.allNodes},
    allConnections: [...projectData.allConnections],
    isCreatingConnection: projectData.isCreatingConnection,
    composerCoordinates: projectData.composerCoordinates
}

export default function reducer (state = defaultState, action) {
    switch(action.type) {
        case "COMPOSER_ADD_NODE": {
            const originalId = action.payload.nodeId;
            const existingNodes = {...state.allNodes};

            // Check if there is already a node with current id
            let newId = originalId;

            for(const node in existingNodes) {
                if(node === newId) {
                    let id = 1;

                    for(const second_pass_id in existingNodes) {
                        const oldId = second_pass_id.substr(originalId.length, second_pass_id.length);
                        const oldNumericId = parseInt(oldId, 10);
                        
                        if(oldNumericId === id) id++;
                    }

                    newId = originalId + id;
                    break;
                }
            }

            let newNode = {...action.payload.nodeData};
            
            // Add new node
            existingNodes[newId] = {
                title: newNode.title,
                clickedDown: false,
                selected: false,
                settings: newNode.default_settings ? [...newNode.default_settings].map(obj => {return {...obj}}) : [],
                generators: newNode.generators ? [...newNode.generators].map(obj => {return {...obj}}) : [],
                inputs: newNode.inputs ? [...newNode.inputs].map(obj => {return {...obj}}) : [],
                outputs: newNode.outputs ? [...newNode.outputs].map(obj => {return {...obj}}) : [],
                x: action.payload.x, 
                y: action.payload.y,
                width: 150,
                height: 100
            };

            return {
                ...state,
                allNodes: existingNodes
            }
        }

        case "COMPOSER_DELETE_SELECTED_NODES": {
            if(state.composerCoordinates.focused) {
                // Get all existing nodes and connections
                let existingNodes = {...state.allNodes};
                let existingConnections = [...state.allConnections];

                // Init removed nodes tracker
                let removedNodes = [];

                // Find and remove selected nodes
                for(let node in existingNodes) {
                    const currentNode = existingNodes[node];
                    if(currentNode.selected) {
                        removedNodes.push(node);
                        delete existingNodes[node];
                    }
                }

                // Loop through removed nodes
                for(let n in removedNodes) {
                    // Find and remove attached connections
                    for(let c = 0; c < existingConnections.length; c++) {
                        const currentConnection = existingConnections[c];
                    
                        // If connection start is connected to the node, remove the connection and continue to the next node.
                        if(currentConnection.connectorStart.nodeId === removedNodes[n]) {
                            existingConnections.splice(c, 1);
                            c--;
                            continue;
                        }

                        // If connection end is connected to the node, remove the connection.
                        if(currentConnection.connectorEnd.nodeId === removedNodes[n]) {
                            existingConnections.splice(c, 1);
                            c--;
                        }
                    }
                }

                return {
                    ...state,
                    allNodes: existingNodes,
                    allConnections: existingConnections
                }
            } else {
                return {...state}
            }
        }

        case "COMPOSER_DESELECT_ALL": {
            let existingNodes = {...state.allNodes};
            for(let node in existingNodes) {
                existingNodes[node].selected = false;
            }

            return {
                ...state,
                allNodes: existingNodes
            }
        }

        case "COMPOSER_START_NODE_CONNECTION": {
            let connection = state.currentlyCreatedConnection;

            if(connection.exists) {
                // Update connection
                connection = {
                    ex: action.payload.ex,
                    ey: action.payload.ey
                }
            } else {
                // Create connection
                connection = {
                    exists: true,
                    x: action.payload.ox,
                    y: action.payload.oy,
                    ex: action.payload.ex,
                    ey: action.payload.ey
                }
            }


            return {
                ...state,
                currentlyCreatedConnection: connection
            }
        }

        case "COMPOSER_CREATE_NODE_CONNECTION": {
            // let connection = state.currentlyCreatedConnection;

            return {
                ...state
            }
        }

        case "COMPOSER_CANCEL_NODE_CONNECTION": {
            // let connection = state.currentlyCreatedConnection;

            return {
                ...state
            }
        }

        case "COMPOSER_NODE_CLICK_DOWN": {
            let allNodes = {...state.allNodes};
            let nodeId = action.payload;
            let clickedNode = allNodes[nodeId];

            clickedNode = {
                ...clickedNode,
                clickedDown: true
            }

            
            return {
                ...state,
                allNodes: {
                    ...allNodes,
                    [nodeId]: clickedNode
                }
            }
        }
        
        case "COMPOSER_NODE_CLICK_UP": {
            // Variables
            let allNodes = {...state.allNodes};
            let nodeId = action.payload.id;
            let clickedNode = allNodes[nodeId];

            // Only run if clicked down before
            if(clickedNode.clickedDown) {
                // If clicked and not moved
                if(!clickedNode.justMoved) {
                    // If selecting multiple
                    if(action.payload.multi) {
                        clickedNode.selected = !clickedNode.selected;
                    } else {
                        // If selecting one, reset all other
                        for(const currentNodeId in allNodes) {
                            if(currentNodeId !== nodeId) {
                                allNodes[currentNodeId].selected = false;
                            }
                        }
                        
                        // Select current one
                        clickedNode.selected = !clickedNode.selected;
                    }
                } else {
                    clickedNode.selected = false;
                    clickedNode.justMoved = false;
                }
                
                // Reset click down variable
                clickedNode.clickedDown = false;

                return {
                    ...state,
                    allNodes: {
                        ...allNodes,
                        [nodeId]: clickedNode
                    }
                }
            } else {
                console.error("Haven't clicked down yet...");
            }

            break;
        }

        case "COMPOSER_NODE_POSITION_UPDATE": {
            // Variables
            let allNodes = {...state.allNodes};
            let nodeId = action.payload.id;
            let clickedNode = allNodes[nodeId];

            clickedNode.x = action.payload.x;
            clickedNode.y = action.payload.y;

            return {
                ...state,
                allNodes: {
                    ...allNodes,
                    [nodeId]: clickedNode
                }
            }
        }

        case "COMPOSER_NODE_DERIVATIVE_POSITION_UPDATE": {
            // Variables
            let allNodes = {...state.allNodes};
            let nodeId = action.payload.id;
            let clickedNode = allNodes[nodeId];

            clickedNode.x += action.payload.dx;
            clickedNode.y += action.payload.dy;

            return {
                ...state,
                allNodes: {
                    ...allNodes,
                    [nodeId]: clickedNode
                }
            }
        }

        case "COMPOSER_UPDATE_SIZE": {
            return {
                ...state,
                composerCoordinates: {
                    ...state.composerCoordinates,
                    width: action.payload.width,
                    height: action.payload.height
                }
            }
        }

        case "COMPOSER_BACKGROUND_POSITION_UPDATE": {
            return {
                ...state,
                composerCoordinates: {
                    ...state.composerCoordinates,
                    x: state.composerCoordinates.x + action.payload.x,
                    y: state.composerCoordinates.y + action.payload.y
                }
            }
        }

        case "COMPOSER_CONNECTOR_DISCONNECT": {
            let allConnections = [...state.allConnections];

            for(let c in allConnections) {
                const currentConnection = allConnections[c];

                if(currentConnection.connectorEnd.nodeId == action.payload.nodeId) {
                    if(currentConnection.connectorEnd.settingId == action.payload.settingId) {
                        allConnections.splice(c, 1);
                        // delete allConnections[c]
                    }
                }
            }

            return {
                ...state,
                allConnections: allConnections,
                allNodes: {...state.allNodes}
            }
        }

        case "COMPOSER_CONNECTOR_START": {
            let allConnections = [...state.allConnections];

            allConnections.push({
                connectorStart: {
                    nodeId: action.payload.connectorStart.nodeId,
                    settingId: action.payload.connectorStart.settingId
                },
                connectorEnd: {
                    x: action.payload.mousePosition.x,
                    y: action.payload.mousePosition.y 
                }
            })
            
            return {
                ...state,
                allConnections: allConnections
            }
        }

        case "COMPOSER_CONNECTOR_UPDATE": {
            let allConnections = [...state.allConnections];

            for(let c in allConnections) {
                const current = allConnections[c];

                if(current.connectorEnd.x && current.connectorEnd.y) {
                    allConnections[c].connectorEnd = {
                        x: action.payload.mousePosition.x,
                        y: action.payload.mousePosition.y
                    }
                    
                    break;
                }
            }

            return {
                ...state,
                allConnections: allConnections
            }
        }

        case "COMPOSER_CONNECTOR_CANCEL": {
            let allConnections = [...state.allConnections];

            for(let c in allConnections) {
                let connector = allConnections[c];

                if(connector.connectorEnd.x && connector.connectorEnd.y) {
                    allConnections.splice(c, 1);
                }
            }

            return {
                ...state,
                allConnections: allConnections
            }
        }

        case "COMPOSER_CONNECTOR_END": {
            let allConnections = [...state.allConnections];

            // Check if this input is already connected
            const end = action.payload.connectorEnd;
            let alreadyExists = false;

            for(let c in allConnections) {
                const connectorEnd = allConnections[c].connectorEnd;

                // If already exists, cancel
                if(connectorEnd.nodeId === end.nodeId && connectorEnd.settingId === end.settingId) {
                    for(let connectorId in allConnections) {
                        let connector = allConnections[connectorId];
        
                        if(connector.connectorEnd.x && connector.connectorEnd.y) {
                            allConnections.splice(connectorId, 1);
                        }
                    }

                    alreadyExists = true;
                    break;
                }
            }

            if(!alreadyExists) {
                // Find new connection and update it
                for(let c in allConnections) {
                    let connector = allConnections[c];
    
                    if(connector.connectorEnd.x && connector.connectorEnd.y) {
                        let newConnection = {
                            connectorStart: allConnections[c].connectorStart,
                            connectorEnd: action.payload.connectorEnd
                        }
    
                        allConnections[c] = newConnection;
    
                        break;
                    }
                }
            }

            return {
                ...state,
                allConnections: allConnections
            }
        }

        case "SETTINGS_UPDATE_TITLE" : {
            let newNodes = {...state.allNodes};
            const nodeKey = action.payload.nodeKey;
            const newValue = action.payload.newValue;

            if(newNodes[nodeKey] != 'undefined') {
                // Update title
                newNodes[nodeKey].title = newValue;

                return {
                    ...state,
                    allNodes: newNodes
                }
            } else {
                return {...state}
            }
        }
        
        case "SETTINGS_UPDATE_SETTING": {
            let newNodes = {...state.allNodes};
            const nodeKey = action.payload.nodeKey;
            const settingId = action.payload.settingId;
            const newValue = action.payload.newValue;

            if(newNodes[String(nodeKey)]) {
                // Update setting
                newNodes[String(nodeKey)].settings[Number(settingId)].value = newValue;

                return {
                    ...state,
                    allNodes: newNodes
                }
            } else {
                return {
                    ...state
                }
            }
        }

        case "SETTINGS_SETTING_TO_INPUT": {
            // Setup initial data
            const nodeKey = String(action.payload.nodeKey);
            const settingId = Number(action.payload.settingId);
            const newValue = Boolean(action.payload.newValue);

            // Get selected node data
            let newNodes = Object.assign({}, state.allNodes);
            let newConnections = [...state.allConnections];

            let selectedNode = newNodes[nodeKey];
            let currentSettings = selectedNode.settings;
            const settingTitle = currentSettings[settingId].title;
            
            if(newValue) {
                // If adding setting to inputs:
                currentSettings[settingId].isInput = true;
                // Add to the inputs
                selectedNode.inputs.push({
                    title: settingTitle,
                    default_value: currentSettings[settingId].value,
                    type: currentSettings[settingId].type
                })
            } else {
                // If removing setting from inputs
                currentSettings[settingId].isInput = false;

                // Remove any connected connections
                for(let c = 0; c < newConnections.length; c++) {
                    if(newConnections[c].connectorEnd.nodeId === nodeKey) {
                        if(newConnections[c].connectorEnd.settingId === settingTitle) {
                            newConnections.splice(c, 1);
                            break;
                        }
                    }
                }

                // Remove from inputs
                for(let i = 0; i < selectedNode.inputs.length; i++) {
                    if(selectedNode.inputs[i].title === settingTitle) {
                        selectedNode.inputs.splice(i, 1);
                        break;
                    }
                }   
            }

            selectedNode.settings = currentSettings;

            return {
                ...state,
                allNodes: {
                    ...newNodes,
                    [nodeKey]: selectedNode
                },
                allConnections: newConnections
            }
        }

        case "SETTINGS_MATH_INPUT_NUMBER_UPDATE" : {
            // Setup initial data
            const nodeKey = String(action.payload.nodeKey);
            const newValue = parseInt(action.payload.newValue);
            const mathType = String(action.payload.mathType);

            const newNodes = {...state.allNodes};

            let selectedNode = newNodes[nodeKey];

            let newInputs = [];
            for(let i = 1; i <= parseInt(newValue); i++) {
                newInputs.push({
                    title: `input_${i}`,
                    type: "signal"
                })
            }

            selectedNode.inputs = newInputs;

            const saveGens = (symbol) => {
                let newGenValue = "";
                newInputs.forEach((val, i, arr) => {
                    if(i < arr.length - 1) {
                        newGenValue += `[${val.title}]${symbol}`
                    } else {
                        newGenValue += `[${val.title}]`
                    }
                })

                let newGenerators = [{
                    title: "output",
                    value: newGenValue,
                    type: "signal"
                }];

                selectedNode.generators = newGenerators;
            }

            switch(mathType) {
                case "add": {
                    saveGens("+");
                    break;
                }

                case "multiply": {
                    saveGens("*");
                    break;
                }

                case "subtract": {
                    saveGens("-");
                    break
                }

                default: {
                    return {...state}
                }
            }

            return {
                ...state,
                allNodes: newNodes
            }
        }

        case "SETTINGS_SIGNAL_GENERATOR_TYPE_SET": {
            // Setup initial data
            const nodeKey = String(action.payload.nodeKey);
            const settingId = parseInt(action.payload.settingId);
            const mathType = String(action.payload.mathType);

            const newNodes = {...state.allNodes};

            switch(mathType) {
                case "sin": {
                    newNodes[nodeKey].settings[settingId].value = "sin";
                    newNodes[nodeKey].generators = [
                        {
                            "title":"signal",
                            "value": "[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]",
                            "type": "signal"
                        }
                    ];
                    break;
                }

                case "cos": {
                    newNodes[nodeKey].settings[settingId].value = "cos";
                    newNodes[nodeKey].generators = [
                        {
                            "title":"signal",
                            "value": "[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]",
                            "type": "signal"
                        }
                    ];
                    break;
                }

                case "tan": {
                    newNodes[nodeKey].settings[settingId].value = "tan";
                    newNodes[nodeKey].generators = [
                        {
                            "title":"signal",
                            "value": "[amplitude]*tan(2*[PI]*[frequency]*[time]+[phase])+[offset]",
                            "type": "signal"
                        }
                    ];
                    break;
                }

                case "sqw": {
                    newNodes[nodeKey].settings[settingId].value = "sqw";
                    newNodes[nodeKey].generators = [
                        {
                            "title":"signal",
                            "value": "[amplitude]*sqw(2*[PI]*[frequency]*[time]+[phase])+[offset]",
                            "type": "signal"
                        }
                    ];
                    break;
                }

                default: {
                    return {...state}
                }
            }

            return {
                ...state,
                allNodes: newNodes
            }
        }

        case "SETTINGS_SCOPE_SIGNAL_NUMBER_UPDATE": {
            const nodeKey = action.payload.nodeKey;
            const newNumber = action.payload.newNumber;

            let newNodes = {...state.allNodes};
            let newConnections = [...state.allConnections];

            let currentNode = newNodes[nodeKey];

            const presetColors = [
                "#e81438",
                "#2c7bf9",
                "#3cfce6",
                "#f2be24",
                "#a422f4",
                "#00c638",
                "#000000"
            ];

            const currentValue = parseInt(currentNode.settings[0].value);
            const newValue = parseInt(newNumber)
            if(currentValue < newValue) {
                // Add new signal
                currentNode.settings[0].value = newNumber;
                
                const newDifference = newValue - currentValue;
                
                for(let d = 0; d < newDifference; d++) {
                    let randomColor = presetColors[Math.round(Math.random() * (presetColors.length - 1))];

                    currentNode.settings.push({
                        title: `${currentNode.inputs.length+d+1}_color`,
                        value: randomColor,
                        type: "color"
                    }
                    // , {
                    //     title: "auto-scale",
                    //     value: "true",
                    //     type: "boolean"
                    // }
                    );

                    currentNode.inputs.push({
                        "title": `signal_${currentNode.inputs.length+d+1}`,
                        "type": "signal"
                    })
                }
            } else if(currentValue > newValue) {
                // Delete last signal and connected connections
                if(currentNode.settings.length > 3) {
                    currentNode.settings[0].value = newNumber;
    
                    const newDifference = currentValue - newValue;
                    for(let d = 0; d < newDifference; d++) {
                        // Remove settings and inputs
                        currentNode.settings.pop();
                        // currentNode.settings.pop()
                        const inputObject = currentNode.inputs.pop();

                        // Remove connected connections
                        for(let c = 0; c < newConnections.length; c++) {
                            const end = newConnections[c].connectorEnd;
                            if(String(end.nodeId) == String(nodeKey) &&
                                String(end.settingId) == String(inputObject.title)) {
                                    newConnections.splice(c, 1);
                                    break;
                                }
                        }
                    }
                } else {
                    return {...state}
                }
            } else {
                return {...state}
            }

            return {
                ...state,
                allNodes: newNodes,
                allConnections: newConnections
            }
        }

        case "SETTINGS_SETTING_SET_EXPAND": {
            let newNodes = {...state.allNodes};
            let currentNode = newNodes[action.payload.nodeKey];

            currentNode.settings[action.payload.settingId].expanded = action.payload.newValue;

            return {
                ...state,
                allNodes: newNodes
            }

        }

        default: {
            return {...state}
        }
    }
}