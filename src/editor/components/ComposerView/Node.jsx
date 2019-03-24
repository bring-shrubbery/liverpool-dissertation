import React, { Component } from 'react'

import {
    nodeClickDown,
    nodeClickUp,
    nodeMouseMoveUpdate,
    disconnectNode,
    startNewConnector,
    updateNewConnector,
    cancelNewConnector,
    endNewConnector
} from '../../redux/actions/composerActions';

// --- NOT FINISHED ---
// TODO:
// * Connector handlers
export default class Node extends Component {
    constructor(props) {
        super(props);

        const nodeData = this.props.nodeData;

        this.state = {
            x: parseInt(nodeData.x),
            y: parseInt(nodeData.y),
            inputConnections: nodeData.inputs,
            outputConnections: nodeData.outputs,
            clickedDown: false,
            justMoved: false,
            upToDate: true
        }

        this.nodeMouseDown = this.nodeMouseDown.bind(this);
        this.nodeTouchDown = this.nodeTouchDown.bind(this);
    }

    nodeMouseDown (e) {
        e.stopPropagation();

        this.setState({
            clickedDown: true
        })

        this.props.dispatch(
            nodeClickDown(this.props.functionId)
        );

        window.onmousemove = e => {
            e.stopPropagation();

            // If holding mouse
            if(this.state.clickedDown) {
                const mousePosition = {
                    x: e.clientX,
                    y: e.clientY
                }

                const currentNodePosition = {
                    x: this.state.x,
                    y: this.state.y
                }

                let offsetX = mousePosition.x - currentNodePosition.x;
                let offsetY = mousePosition.y - currentNodePosition.y;

                if(Math.abs(offsetX) < 5 && Math.abs(offsetY) < 5) return;

                if(!this.state.justMoved) {
                    // If this is initial call
                    this.setState({
                        justMoved: true,
                        mouseClickPositionX: mousePosition.x - currentNodePosition.x,
                        mouseClickPositionY: mousePosition.y - currentNodePosition.y
                    });
                } else {
                    document.updateCanvas();

                    this.setState({
                        x: mousePosition.x - this.state.mouseClickPositionX,
                        y: mousePosition.y - this.state.mouseClickPositionY
                    });
                    
                }
            }
        }

        window.onmouseup = e => {
            // If clicked down before
            if(this.state.clickedDown) {
                // If moved mouse before relesing mouse
                if(this.state.justMoved) {
                    // Set final node position
                    this.props.dispatch(
                        nodeMouseMoveUpdate(
                            this.props.functionId, 
                            this.state.x,
                            this.state.y)
                    )

                    this.setState({
                        clickedDown: false,
                        justMoved: false
                    })
                } else {
                    this.props.dispatch(
                        nodeClickUp(this.props.functionId, e.shiftKey)
                    );

                    // Reset variables if just clicked
                    this.setState({
                        clickedDown: false,
                        justMoved: false,
                        selected: this.props.nodeData.selected
                    });
                }
            }
            
            window.onmousemove = null;
            window.onmouseup = null;
        }
    }

    nodeTouchDown (e) {
        e.stopPropagation();

        this.setState({
            clickedDown: true
        })

        this.props.dispatch(
            nodeClickDown(this.props.functionId)
        );

        window.ontouchmove = e => {
            e.stopPropagation();

            // If holding mouse
            if(this.state.clickedDown) {
                const touchPosition = {
                    x: e.touches[0].clientX,
                    y: e.touches[0].clientY
                }

                const currentNodePosition = {
                    x: this.state.x,
                    y: this.state.y
                }

                if(!this.state.justMoved) {
                    // If this is initial call
                    this.setState({
                        justMoved: true,
                        mouseClickPositionX: touchPosition.x - currentNodePosition.x,
                        mouseClickPositionY: touchPosition.y - currentNodePosition.y
                    });
                } else {
                    document.updateCanvas();

                    this.setState({
                        x: touchPosition.x - this.state.mouseClickPositionX,
                        y: touchPosition.y - this.state.mouseClickPositionY
                    });
                }
            }
        }

        window.ontouchend = e => {
            // If clicked down before
            if(this.state.clickedDown) {
                // If moved mouse before relesing mouse
                if(this.state.justMoved) {
                    // Set final node position
                    this.props.dispatch(
                        nodeMouseMoveUpdate(
                            this.props.functionId, 
                            this.state.x,
                            this.state.y)
                    )

                    this.setState({
                        clickedDown: false,
                        justMoved: false
                    })
                } else {
                    this.props.dispatch(
                        nodeClickUp(this.props.functionId, e.shiftKey)
                    );

                    // Reset variables if just clicked
                    this.setState({
                        clickedDown: false,
                        justMoved: false,
                        selected: this.props.nodeData.selected
                    });
                }

            }
            
            window.ontouchmove = null;
            window.ontouchend = null;
        }
    }

    componentDidMount() {
        window.onmousemove = null;
    }

    render() {
        let ci = [];
        let co = [];

        for(let i in this.props.connectors) {
            let c = this.props.connectors[i];

            if(c.connectorStart.nodeId === this.props.id) {
                co.push(c.connectorStart.settingId);
            }

            if(c.connectorEnd.nodeId === this.props.id) {
                ci.push(c.connectorEnd.settingId);
            }
        }

        if(this.props.nodeData.inputs) {
            this.inputLabels = [...this.props.nodeData.inputs].map(label =>{
                let connected = false;

                for(let i in ci) {
                    if(label.title === ci[i]) {
                        connected = true;
                        break;
                    }
                }

                const endConnectorFunction = e => {
                    e.stopPropagation();

                    this.props.dispatch(endNewConnector(this.props.functionId, label.title));

                    window.onmousemove = null;
                    window.onmouseup = null;
                };

                return (<li className="composer-node-input-labels" key={label.title}>
                    {displayWithoutLowdash(label.title)}
                    <span onMouseDown={(e) => {
                        e.stopPropagation();

                        e.target.onmouseup = (e) => {
                            e.stopPropagation();
                            // Remove the connection if clicked on it.
                            this.props.dispatch(disconnectNode(this.props.functionId , label.title));

                            e.target.onmouseup = endConnectorFunction;
                        }

                        window.onmouseup = ev => {
                            e.target.onmouseup = endConnectorFunction;

                            window.onmousemove = null;
                            window.onmouseup = null;
                        }
                    }}
                    onMouseUp={endConnectorFunction}
                    onTouchStart={e => {
                        e.stopPropagation();

                        e.target.ontouchend = (e) => {
                            // Remove the connection if clicked on it.
                            this.props.dispatch(disconnectNode(this.props.functionId , label.title));

                            e.target.ontouchend = e => {
                                e.stopPropagation();

                                this.props.dispatch(endNewConnector(this.props.functionId, label.title));

                                window.ontouchmove = null;
                                window.ontouchend = null;
                            };
                        }
                    }}
                    className={
                        'composer-node-input-span' 
                        + (this.props.nodeData.selected ? ' composer-node-connectors-selected': '')
                        + (connected ? ' connected': '')
                        }></span>
                    </li>);
            })
        } else {
            this.inputLabels = null;
        }
    
        if(this.props.nodeData.outputs) {
            this.outputLabels = [...this.props.nodeData.outputs].map(label =>{
                let connected = false;

                for(let i in co) {
                    if(label.title === co[i]) {
                        connected = true;
                        break;
                    }
                }

                return (<li className="composer-node-output-labels" key={label.title}>
                    {label.title}
                    <span onMouseDown = {e => {
                        e.stopPropagation();

                        const canvasParent = document.getElementById("composer-view");
                        const canvasPosition = {
                            x: canvasParent.offsetLeft,
                            y: canvasParent.offsetTop
                        }

                        this.props.dispatch(startNewConnector(
                            this.props.functionId,
                            label.title,
                            e.clientX - canvasPosition.x - 5,
                            e.clientY - canvasPosition.y + 50
                        ));

                        e.target.onmouseup = e => {
                            e.stopPropagation();

                            this.props.dispatch(cancelNewConnector(this.props.functionId, label.title));

                            window.onmousemove = null;
                            window.onmouseup = null;
                        }

                        window.onmousemove = e => {
                            e.stopPropagation();

                            const canvasParent = document.getElementById("composer-view");
                            const canvasPosition = {
                                x: canvasParent.offsetLeft,
                                y: canvasParent.offsetTop
                            }

                            this.props.dispatch(updateNewConnector(
                                this.props.functionId, 
                                label.title,
                                e.clientX - canvasPosition.x - 5, 
                                e.clientY - canvasPosition.y + 50
                            ));
                        };

                        window.onmouseup = ev => {
                            this.props.dispatch(cancelNewConnector(this.props.functionId, label.title));

                            window.onmousemove = null;
                            window.onmouseup = null;
                        }
                    }}
                    onTouchStart = {e => {
                        e.stopPropagation();

                        const canvasParent = document.getElementById("composer-view");
                        const canvasPosition = {
                            x: canvasParent.offsetLeft,
                            y: canvasParent.offsetTop
                        }

                        this.props.dispatch(startNewConnector(
                            this.props.functionId, 
                            label.title,
                            e.touches[0].clientX - canvasPosition.x - 5, 
                            e.touches[0].clientY - canvasPosition.y + 50
                        ));

                        e.target.ontouchend = e => {
                            e.stopPropagation();

                            this.props.dispatch(cancelNewConnector(this.props.functionId, label.title));

                            window.ontouchmove = null;
                            window.ontouchend = null;
                        }

                        window.ontouchmove = e => {
                            e.stopPropagation();

                            const canvasParent = document.getElementById("composer-view");
                            const canvasPosition = {
                                x: canvasParent.offsetLeft,
                                y: canvasParent.offsetTop
                            }

                            this.props.dispatch(updateNewConnector(
                                this.props.functionId, 
                                label.title,
                                e.touches[0].clientX - canvasPosition.x - 5, 
                                e.touches[0].clientY - canvasPosition.y + 50
                            ));
                        };

                        window.ontouchend = e => {
                            this.props.dispatch(cancelNewConnector(this.props.functionId, label.title));

                            window.ontouchmove = null;
                            window.ontouchend = null;
                        }
                    }}
                    className={
                        'composer-node-output-span' 
                        + (this.props.nodeData.selected ? ' composer-node-connectors-selected': '')
                        + (connected ? ' connected': '')
                        }></span>
                    </li>)
            })
        } else {
            this.outputLabels = null;
        }

        return (
            <div className={'composer-node' + (this.props.nodeData.selected ? ' selected' : '')}  
                    id={this.props.functionId} 
                    style={{
                        top: `${this.state.y + this.props.composerPosition.y}px`, 
                        left: `${this.state.x + this.props.composerPosition.x - this.props.nodeData.width / 2}px`,
                        width: `${this.props.nodeData.width}px`
                    }}
                    onMouseDown={this.nodeMouseDown}
                    onTouchStart={this.nodeTouchDown}
                    >
                <h2>{this.props.nodeData.title}</h2>
                <div className={'composer-node-input-output-container'}>
                    <ul className={'composer-node-input-list'}>
                        {this.inputLabels}
                    </ul>
                    <ul className={'composer-node-output-list'}>
                        {this.outputLabels}
                    </ul>
                </div>
            </div>
        );
    }
}

function displayWithoutLowdash(text) {
    return String(text).replace("_", " ");
}