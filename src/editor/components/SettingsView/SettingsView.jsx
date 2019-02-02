import React, {Component} from 'react';
import './settings.scss';

import {nodeSettingsReduceArray, nodeSettingsExpandArray} from '../../redux/actions/composerActions';

import { connect } from 'react-redux';

@connect((store) => {
    return {
        allNodes: store.composer.allNodes
    }
})
export default class SettingsView extends Component {    
    render () {
        let {selectedNode, selectedNodeKey} = findSelectedNode(this.props.allNodes);
        
        if(selectedNode) {
            return (
                <div id={'settings-view'}>
                    <h1>{selectedNode.title}</h1>
                    <Settings settingsObject={selectedNode.settings}/>
                </div>
            )
        } else {
            return (
                <div id={'settings-view'}>
                    <span>select node to edit settings...</span>
                </div>
            )
        }
        
    }
}

function Settings (props) {
    const settings = props.settingsObject;

    let settingDivs = [];

    for(let settingId in settings) {
        settingDivs.push(<SettingDiv key={settingId} settingId={settingId} settingData={settings[settingId]}/>);
    }

    return (
        <div id={'settings-container'}>
            <ul className={'setting-top-level-list'}>
                {settingDivs}
            </ul>
        </div>
    )
}

function SettingDiv (props) {
    let settingType = "number";

    // console.log(typeof props.settingData);
    // console.log(props.settingData);

    if(typeof props.settingData === "array") {
        settingType = "array";
    }


    return (
        <li className={'settings-setting-list-item'}>
            <h5>{props.settingId}</h5>
            <input type={'number'}></input>
            { settingType === "array" ?
                <div>hello</div>
            : null }
        </li>
    )
}

function findSelectedNode (allNodes) {
    for(let node in allNodes) {
        if(allNodes[node].selected) {
            return {selectedNode: allNodes[node],selectedNodeKey: node};
        }
    }

    return {selectedNode: null,selectedNodeKey: null};
}

