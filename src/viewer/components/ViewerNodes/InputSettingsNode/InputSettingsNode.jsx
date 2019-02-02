import React, { Component } from 'react';

export default class InputSettingsNode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            settings: {...this.props.inputNodeSettings}
        }
    }

    render () {
        let SettingsNodes = [];
        for(const settingId in this.state.settings) {
            const currentSetting = this.state.settings[settingId];

            SettingsNodes.push(
                <SettingLine id={settingId} key={settingId} label={settingId}/>
            )
        }

        return (<div class="viewer-input-node-settings-div">
            {SettingsNodes}
        </div>)
    }
}

class SettingLine extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valueType: this.props.type,
            value: 0
        }
    }

    render() {
        return (<div id={this.props.id}>
            <label>{this.props.label}</label>
            <input value={this.state.value}></input>
        </div>)
    }
}