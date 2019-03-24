export function composerAddNode ({nodeId, dropPositionX, dropPositionY, completeNodes}) {

    let nodeData = {...completeNodes[nodeId], settings: completeNodes[nodeId].default_settings};
    
    delete nodeData.description;

    return {
        type: "COMPOSER_ADD_NODE",
        payload: {nodeId: nodeId, nodeData: nodeData, x: dropPositionX, y: dropPositionY}
    }
}

export function composerUpdateSize ({width, height}) {
    return {
        type: "COMPOSER_UPDATE_SIZE",
        payload: {width: width, height: height}
    }
}

export function deleteSelectedNodes() {
    return {
        type: "COMPOSER_DELETE_SELECTED_NODES"
    }
}

export function deselectAll () {
    return {
        type: "COMPOSER_DESELECT_ALL"
    }
}

export function nodeClickDown(id) {
    return {
        type: "COMPOSER_NODE_CLICK_DOWN",
        payload: id
    }
}

export function nodeClickUp(id, multi) {
    return {
        type: "COMPOSER_NODE_CLICK_UP",
        payload: {
            id: id, 
            multi: multi
        }
    }
}

export function nodeMouseMoveUpdate(id, x, y) {
    return {
        type: "COMPOSER_NODE_POSITION_UPDATE",
        payload: {
            id: id,
            x: x,
            y: y
        }
    }
}

export function nodeMouseDerivativePosition(id, dx, dy) {
    return {
        type: "COMPOSER_NODE_DERIVATIVE_POSITION_UPDATE",
        payload: {
            id: id,
            dx: dx,
            dy: dy
        }
    }
}

export function backgroundUpdatePosition(x, y) {
    return {
        type: "COMPOSER_BACKGROUND_POSITION_UPDATE",
        payload: {
            x: x,
            y: y
        }
    }
}

export function disconnectNode(nodeId, settingId) {
    return {
        type: "COMPOSER_CONNECTOR_DISCONNECT",
        payload: {
            nodeId: nodeId,
            settingId: settingId
        }
    }
}

export function startNewConnector (nodeId, settingId, posX, posY) {
    return {
        type: "COMPOSER_CONNECTOR_START",
        payload: {
            connectorStart: {
                nodeId: nodeId,
                settingId: settingId
            }, mousePosition: {
                x: posX,
                y: posY
            }
        }
    }
}

export function updateNewConnector (nodeId, settingId, posX, posY) {
    return {
        type: "COMPOSER_CONNECTOR_UPDATE",
        payload: {
            connectorStart: {
                nodeId: nodeId,
                settingId: settingId
            }, mousePosition: {
                x: posX,
                y: posY
            }
        }
    } 
}

export function endNewConnector (endNodeId, endSettingId) {
    return {
        type: "COMPOSER_CONNECTOR_END",
        payload: {
            connectorEnd: {
                nodeId: endNodeId,
                settingId: spaceToUnderscore(endSettingId)
            }
        }
    } 
}

export function cancelNewConnector() {
    return {
        type: "COMPOSER_CONNECTOR_CANCEL",
        payload: 1
    }
}

const spaceToUnderscore = (text) => String(text).replace(" ", "_");