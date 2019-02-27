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

            // Add new node
            existingNodes[newId] = {
                ...action.payload.nodeData, 
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
                let existingNodes = {...state.allNodes};
                for(let node in existingNodes) {
                    const currentNode = existingNodes[node];
                    if(currentNode.selected) {
                        delete existingNodes[node];
                    }
                }

                return {
                    ...state,
                    allNodes: existingNodes
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
                console.log("Haven't clicked down yet...");
            }
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
            // console.log(state.allConnections)

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

        default: {
            return {...state}
        }
    }
}