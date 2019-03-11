export function updateSetting(nodeKey, settingId, newValue) {
    return {
        type: "SETTINGS_UPDATE_SETTING",
        payload: {
            nodeKey: nodeKey,
            settingId: settingId,
            newValue: newValue
        }
    }
}

export function updateTitle(nodeKey, newValue) {
    return {
        type: "SETTINGS_UPDATE_TITLE",
        payload: {
            nodeKey: nodeKey,
            newValue: newValue
        }
    }
}

export function makeSettingAnInput(nodeKey, settingId, value) {
    return {
        type: "SETTINGS_SETTING_TO_INPUT",
        payload: {
            nodeKey: nodeKey,
            settingId: settingId,
            newValue: value
        }
    }
}

export function mathInputNumberUpdate(nodeKey, value, mathType) {
    return {
        type: "SETTINGS_MATH_INPUT_NUMBER_UPDATE",
        payload: {
            nodeKey: nodeKey,
            newValue: value,
            mathType: mathType
        }
    }
}

export function signalGeneratorTypeSet(nodeKey, settingId, mathType) {
    return {
        type: "SETTINGS_SIGNAL_GENERATOR_TYPE_SET",
        payload: {
            nodeKey: nodeKey,
            settingId: settingId,
            mathType: mathType
        }
    }
}