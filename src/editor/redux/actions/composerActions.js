import libraryNodes from '../../libraryNodes.json';

export function composerAddNode ({nodeId, dropPositionX, dropPositionY}) {
    const completeNodes = {...libraryNodes["input"], ...libraryNodes["processors"], ...libraryNodes["output"]};

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

export function nodeSettingsReduceArray(nodeId, settingId) {
    return {
        type: "SETTINGS_REDUCE_ARRAY",
        payload: {nodeId: nodeId, settingId: settingId}
    }
}

export function nodeSettingsExpandArray(nodeId, settingId) {
    return {
        type: "SETTINGS_EXPAND_ARRAY",
        payload: {nodeId: nodeId, settingId: settingId}
    }
}

export function startConnectingNode(originPosition, mousePosition) {
    return {
        type: "COMPOSER_START_NODE_CONNECTION",
        payload: {
            ox: originPosition.x,
            oy: originPosition.y,
            ex: mousePosition.x,
            ey: mousePosition.y
        }
    }
}

export function endConnectingNode(originPosition, mousePosition) {
    return {
        type: "COMPOSER_START_NODE_CONNECTION",
        payload: {
            ox: originPosition.x,
            oy: originPosition.y,
            ex: mousePosition.x,
            ey: mousePosition.y
        }
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