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
                    <Settings settingsObject={selectedNode.settings} 
                                nodeKey={selectedNodeKey} 
                                node={selectedNode}
                                dispatch={this.props.dispatch}/>
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
        settingDivs.push(
            <SettingDiv key={settingId} 
                        settingId={settingId} 
                        settingData={settings[settingId]}
                        nodeKey={props.nodeKey}
                        node={props.node}
                        dispatch={props.dispatch}/>
        );
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
    let inputElement;
    switch(props.settingData.type) {
        case "number": {
            inputElement = <input type={'number'} value={props.settingData.value} onChange={e => {
                // Update setting
                // props.dispatch()
            }}/>;
            break;
        }

        case "boolean": {

            break;
        }

        case "signal": {

            break;
        }

        case "text": {
            inputElement = <input type={'text'} value={props.settingData.value} onChange={e => {
                // Update Setting
                // props.dispatch()
            }}/>;
            break;
        }

        default: {

            break;
        }
    }


    return (
        <li className={'settings-setting-list-item'}>
            <h5>{props.settingData.title}</h5>
            {inputElement}
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