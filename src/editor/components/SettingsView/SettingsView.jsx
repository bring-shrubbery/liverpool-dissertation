import React, {Component} from 'react';
import './settings.scss';

import { updateTitle, updateSetting, makeSettingAnInput, mathInputNumberUpdate, signalGeneratorTypeSet, scopeSignalNumberUpdate, setExpansionSetting } from '../../redux/actions/settingsActions';

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
                    <input id={'settings-node-title'}
                            type={'text'}
                            onChange={e => this.props.dispatch(updateTitle(selectedNodeKey, e.target.value))}
                            value={selectedNode.title}/>
                    <Settings settingsObject={selectedNode.settings}
                                nodeKey={selectedNodeKey}
                                node={selectedNode}
                                dispatch={(action) => this.props.dispatch(action)}
                                force={() => this.forceUpdate()}
                                allNodes={this.props.allNodes}/>
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

    let settingsList = [];

    for(let settingId in settings) {
        settingsList.push(
        <SettingDiv key={settingId} 
                    settingId={settingId} 
                    settingData={settings[settingId]}
                    nodeKey={props.nodeKey}
                    node={props.node}
                    dispatch={props.dispatch}
                    force={props.force}
                    allNodes={props.allNodes}/>);
    }
    
    // ---------------------- MATH OPERATORS ----------------------------
    const isAdd = props.nodeKey.substr(0, 3) == "add";
    const isSubtract = props.nodeKey.substr(0, 8) == "subtract";
    const isMultiply = props.nodeKey.substr(0, 8) == "multiply";
    
    if(isAdd || isSubtract || isMultiply) {
        let mathType;
    
        if(isAdd) {
            mathType = "add";
        } else if(isSubtract) {
            mathType = "subtract";
        } else if(isMultiply) {
            mathType = "multiply"
        }

        settingsList.push(<li className={'settings-item'} key="numberOfInputs">
            <h5 className={'settings-item-title'}>{"Number of inputs :"}</h5>
            <div className={'settings-item-input settings-item-number'}>
                <input type={'number'} value={parseInt(props.node.inputs.length)} onChange={e => {
                    // Update setting
                    props.dispatch(mathInputNumberUpdate(props.nodeKey, e.target.value, mathType));
                }}/>
            </div>
        </li>);
    }
    
    return (
        <div id={'settings-container'}>
            <ul className={'settings-list'}>
                {settingsList}
            </ul>
        </div>
    )
}

function SettingDiv (props) {
    // SettingsDiv initialised as follows:
    // <SettingDiv key={settingId} 
    //                 settingId={settingId} 
    //                 settingData={settings[settingId]}
    //                 nodeKey={props.nodeKey}
    //                 node={props.node}
    //                 dispatch={props.dispatch}
    //                 force={props.force}
    //                 allNodes={props.allNodes}/>);

    switch(props.settingData.type) {
        case "number": {
            return (
                <li className={'settings-item'}>
                    <h5 className={'settings-item-title'}>{displayWithoutLowdash(props.settingData.title)} :</h5>
                    <div className={'settings-item-input settings-item-number'}>
                        {!Boolean(props.settingData.isInput) ? <input type={'number'} value={props.settingData.value} onChange={e => {
                            // Update setting
                            props.dispatch(updateSetting(props.nodeKey, props.settingId, e.target.value));
                        }}/> : <div className={'settings-item-controlled'}>Controlled</div>}

                        <input className={'settings-item-is-input'} type={'checkbox'} checked={Boolean(props.settingData.isInput)} onChange={e => {
                            // Convert setting to an input
                            props.dispatch(makeSettingAnInput(props.nodeKey, props.settingId, Boolean(e.target.checked)));
                        }}/>
                    </div>
                </li>
            );
        }

        case "number_uncontrolled": {
            return (
                <li className={'settings-item'}>
                    <h5 className={'settings-item-title'}>{displayWithoutLowdash(props.settingData.title)} :</h5>
                    <div className={'settings-item-input settings-item-number'}>
                        <input type={'number'} value={props.settingData.value} onChange={e => {
                            // Update setting
                            props.dispatch(updateSetting(props.nodeKey, props.settingId, e.target.value));
                        }}/>
                    </div>
                </li>
            );
        }

        case "boolean": {
            return (
                <li className={'settings-item'}>
                    <h5 className={'settings-item-title'}>{displayWithoutLowdash(props.settingData.title)} :</h5>
                    <div className={'settings-item-input settings-item-boolean'}>
                        <input type={'checkbox'} checked={Boolean(props.settingData.value)} onChange={e => {
                            // Update setting
                            props.dispatch(updateSetting(props.nodeKey, props.settingId, Boolean(e.target.checked)));
                        }}/>
                    </div>
                </li>
            );
        }

        case "text": {
            return (
                <li className={'settings-item'}>
                    <h5 className={'settings-item-title'}>{displayWithoutLowdash(props.settingData.title)} :</h5>
                    <div className={'settings-item-input settings-item-text'}>
                        <input type={'text'} value={props.settingData.value} onChange={e => {
                            // Update Setting
                            props.dispatch(updateSetting(props.nodeKey, props.settingId, String(e.target.value)));
                        }}/>
                    </div>
                </li>
            );
        }

        case "color": {
            return (
                <li className={'settings-item'}>
                    <h5 className={'settings-item-title'}>{displayWithoutLowdash(props.settingData.title)} :</h5>
                    <div className={'settings-item-input settings-item-color'}>
                        <input type={'color'} value={props.settingData.value} onChange={e => {
                            // Update Setting
                            props.dispatch(updateSetting(props.nodeKey, props.settingId, e.target.value));
                        }}/>
                    </div>
                </li>
            );
        }

        case "scopeReference": {
            return (
                <li className={'settings-item'}>
                    <h5 className={'settings-item-title'}>{displayWithoutLowdash(props.settingData.title)} :</h5>
                    <div className={'settings-item-input settings-item-array-selector'}>
                        <ScopeSelector  allNodes={props.allNodes} 
                                        value={props.settingData.value} 
                                        nodeKey={props.nodeKey} 
                                        settingId={props.settingId} 
                                        dispatch={props.dispatch}/>
                    </div>
                </li>
            )
        }

        case "signal_type": {
            return (
                <li className={'settings-item'}>
                    <h5 className={'settings-item-title'}>{displayWithoutLowdash(props.settingData.title)} :</h5>
                    <div className={'settings-item-input settings-item-array-selector'}>
                        <SignalGeneratorSelector    allNodes={props.allNodes} 
                                                    value={props.settingData.value} 
                                                    nodeKey={props.nodeKey} 
                                                    settingId={props.settingId} 
                                                    dispatch={props.dispatch}/>
                    </div>
                </li>
            )
        }

        // This one can only be in the scope settings for now
        case "number_of_signals": {
            return (
                <li className={'settings-item'}>
                    <h5 className={'settings-item-title'}>{displayWithoutLowdash(props.settingData.title)} :</h5>
                    <div className={'settings-item-input settings-item-number'}>
                        <input type={'number'} value={props.settingData.value} onChange={e => {
                            // Update setting
                            props.dispatch(scopeSignalNumberUpdate(props.nodeKey, e.target.value));
                        }}/>
                    </div>
                </li>
            )
        }

        case "array": {
            let arrayOptions = props.settingData.array_options.map((option, i) => {
                return <li key={i} 
                    id={props.nodeKey + option.title}
                    title={option.description} 
                    onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        props.dispatch(updateSetting(props.nodeKey, props.settingId, option.title));
                        props.dispatch(setExpansionSetting(props.nodeKey, props.settingId, false))
                    }
                }>{option.title}</li>
            });

            return (
                <li className={'settings-item'}>
                    <h5 className={'settings-item-title'}>{displayWithoutLowdash(props.settingData.title)} :</h5>
                    <div className={'settings-item-array'}>
                        <div className={'settings-item-array-selection' + (Boolean(props.settingData.expanded) === true ? ' array-hidden' : '')}
                            onClick={e => {
                                e.preventDefault();
                                e.stopPropagation();
                                props.dispatch(setExpansionSetting(props.nodeKey, props.settingId, true));

                                window.onclick = e => {
                                    e.stopPropagation();
                                    props.dispatch(setExpansionSetting(props.nodeKey, props.settingId, false));
                                    window.onclick = null;
                                }
                            }}>{props.settingData.value}</div>
                        <ul className={'settings-item-array-list ' + (props.settingData.expanded == true ? '' : 'array-hidden')}>
                            {arrayOptions}
                        </ul>
                    </div>
                </li>
            );
        }

        default: {
            return (
                <li className={'settings-item'}>
                    <h5 className={'settings-item-title'}>{displayWithoutLowdash(props.settingData.title)} :</h5>
                    <div className={'settings-item-input'}>
                        <div>{props.settingData.type}</div>
                    </div>
                </li>
            )
        }
    }
}

class ScopeSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    

    render () {
        let availableScopes = [];
        let allTouchInputs = [];
        const allNodes = {...this.props.allNodes};

        for(let nodeKey in this.props.allNodes) {
            if(nodeKey.substr(0, 5) === "scope") {
                availableScopes.push(nodeKey);
            }
        }

        for(let nodeKey in this.props.allNodes) {
            if(nodeKey.substr(0, 10) === "touchInput" && nodeKey != this.props.nodeKey) {
                allTouchInputs.push(nodeKey);
            }
        }

        for(let t in allTouchInputs) {
            let touchInput = allTouchInputs[t];

            // console.log(touchInput)

            if(availableScopes.length > 0) {
                for(let s = 0; s < availableScopes.length; s++) {
                    let currentScope = availableScopes[s];
    
                    if(allNodes[touchInput].settings[1].value === currentScope) {
                        availableScopes.splice(s, 1);
                        s--;
                    }
                }
            }
        }

        let scopeListElements = [
            "unselected",
            ...availableScopes
        ].map(name => {
            return (<li key={name} id={name} className={`settings-item-array-item`} onClick={e => {
                this.setState({
                    isOpen: false
                })
                this.props.dispatch(updateSetting(this.props.nodeKey, this.props.settingId, e.target.innerText));
            }}>{name}</li>)
        })

        if(this.state.isOpen) {
            return (
                <ul className={`settings-item-array settings-item-scope-selector`}>
                    {scopeListElements}
                </ul>
            )
        } else {
            return (<div className={'settings-item-array-button'} onClick={e => {
                this.setState({
                    isOpen: true
                })
            }}>{this.props.value === "" ? "unselected" : this.props.value}</div>)
        }
        
    }
}


class SignalGeneratorSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    render () {
        let availableSignalGenerators = [
            "sin",
            "cos",
            "tan",
            "sqw"
        ];

        let scopeListElements = availableSignalGenerators.map(name => {
            return (<li key={name} id={name} className={`settings-item-array-item`} onClick={e => {
                this.setState({
                    isOpen: false
                })

                this.props.dispatch(signalGeneratorTypeSet(this.props.nodeKey, this.props.settingId, name));
            }}>{name}</li>)
        })

        if(this.state.isOpen) {
            return (
                <ul className={`settings-item-array settings-item-scope-selector`}>
                    {scopeListElements}
                </ul>
            )
        } else {
            return (<div className={'settings-item-array-button'} onClick={e => {
                this.setState({
                    isOpen: true
                })
            }}>{this.props.value}</div>)
        }
        
    }
}

function findSelectedNode (allNodes) {
    for(let node in allNodes) {
        if(allNodes[node].selected) {
            return {selectedNode: allNodes[node], selectedNodeKey: node};
        }
    }

    return {selectedNode: null,selectedNodeKey: null};
}

function displayWithoutLowdash(text) {
    return String(text).replace("_", " ");
}