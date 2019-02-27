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

export function updateTitle(nodeKey, settingId, newValue) {
    return {
        type: "SETTINGS_UPDATE_TITLE",
        payload: {
            nodeKey: nodeKey,
            settingId: settingId,
            newValue: newValue
        }
    }
}