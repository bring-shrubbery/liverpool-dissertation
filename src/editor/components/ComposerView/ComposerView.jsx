import React, {Component} from 'react';
import './composer.scss';

import {composerAddNode,
    composerUpdateSize,
    deleteSelectedNodes,
    deselectAll,
    nodeClickDown,
    nodeClickUp,
    nodeMouseMoveUpdate,
    backgroundUpdatePosition} from '../../redux/actions/composerActions';

import { connect } from 'react-redux';

@connect((store) => {
    return {
        allNodes: store.composer.allNodes,
        allConnections: store.composer.allConnections,
        composerCoordinates: store.composer.composerCoordinates
    }
})
export default class ComposerView extends Component {
    constructor(props) {
        super(props);

        // Function bindings
        this.addNode = this.addNode.bind(this);
        this.renderNodes = this.renderNodes.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleBackgroundClick = this.handleBackgroundClick.bind(this);
        this.getConnectorPositions = this.getConnectorPositions.bind(this);

        // Refs
        this.canvasRef = React.createRef();
        this.bgRef = React.createRef();

        this.state = {
            ctx: null
        }
    }

    addNode (e) {
        e.preventDefault();

        let functionId = String(e.dataTransfer.getData("id"));

        const composerView = document.getElementById('composer-view');
        const composerOriginX = composerView.offsetLeft;
        const composerOriginY = composerView.offsetTop;
        const dropPositionX = e.pageX - composerOriginX - this.props.composerCoordinates.x;
        const dropPositionY = e.pageY - composerOriginY - this.props.composerCoordinates.y;

        this.props.dispatch(
            composerAddNode({
                nodeId: functionId, 
                dropPositionX: dropPositionX, 
                dropPositionY: dropPositionY
            })
        );
    }

    renderNodes () {
        // this.ctx = this.canvasRef.current.getContext("2d");
        let nodeArray = [];

        for(const node in this.props.allNodes) {
            const currentNode = this.props.allNodes[node];

            nodeArray.push(<Node 
                nodeData={currentNode}
                functionId={node}
                key={node}
                id={node}
                dispatch={this.props.dispatch}
                composerPosition={{
                    x: this.props.composerCoordinates.x,
                    y: this.props.composerCoordinates.y
                }}
                connectors={this.props.allConnections}
            />);
        }
        
        return nodeArray;
    }

    handleKeyPress (ev) {
        
        console.log(ev.keyCode);
        ev.preventDefault();

        switch(ev.keyCode) {
            case 8: { // backspace
                this.props.dispatch(deleteSelectedNodes());
                break;
            }

            case 46: { // delete
                this.props.dispatch(deleteSelectedNodes());
                break;
            }
        }
    }

    handleBackgroundClick(e) {
        // e.preventDefault();

        this.props.dispatch(deselectAll());
        this.forceUpdate();
    }
    
    componentDidMount () {
        const width = this.bgRef.current.offsetWidth;
        const height = this.bgRef.current.offsetHeight;

        if(!width || !height) return;

        if(this.props.composerCoordinates.width != width ||
            this.props.composerCoordinates.height != height) {
                this.props.dispatch(composerUpdateSize({width, height}));
            }
    }

    getConnectorPositions() {
        let outputNodes = [...document.getElementsByClassName("composer-node-output-span")];
        let inputNodes = [...document.getElementsByClassName("composer-node-input-span")];

        let nodePositionObtainer = function(inArray) {
            let returnArray = [];

            if(inArray.length && inArray.length > 0) {
                for(let i in inArray) {
                    // console.log(i);
                    let node = inArray[i];
                    let currentNodePosition = {
                        x: node.offsetLeft, 
                        y: node.offsetTop,
                        nodeId: null,
                        connectorId: null
                    };
    
                    
    
                    let parent = node.parentNode;

                    currentNodePosition.connectorId = parent.innerText;

                    if(parent) {
                        while(parent.classList[0] !== "composer-node") {
                            currentNodePosition.x += parent.offsetLeft;
                            currentNodePosition.y += parent.offsetTop;
                            
                            parent = parent.parentNode;
                        }
                    }
                    
                    currentNodePosition.nodeId = parent.id;
                    currentNodePosition.x += parent.offsetLeft;
                    currentNodePosition.y += parent.offsetTop;
        
                    returnArray.push(currentNodePosition);
                }
            }  

            return returnArray;
        }

        let outputNodesPositions = nodePositionObtainer(outputNodes);
        let inputNodesPositions = nodePositionObtainer(inputNodes);

        // console.log(outputNodesPositions, inputNodesPositions);

        return {
            outputNodesPositions: outputNodesPositions,
            inputNodesPositions: inputNodesPositions
        }
    }

    render () {
        return (
            <div id={'composer-view'} 
                ref={this.bgRef}
                onKeyUp={this.handleKeyPress}>
                <div id={'composer-canvas'}
                    onDrop={this.addNode}
                    onDragOver={e => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}>
                    <Canvas width={this.props.composerCoordinates.width}
                            height={this.props.composerCoordinates.height}
                            connectorPositions={this.getConnectorPositions}
                            stateConnectors={this.props.allConnections}/>
                    <BgGrid x={this.props.composerCoordinates.x}
                            y={this.props.composerCoordinates.y}
                            width={this.props.composerCoordinates.width}
                            height={this.props.composerCoordinates.height}
                            gridSize={this.props.composerCoordinates.gridSize}
                            handleClick={this.handleBackgroundClick}
                            dispatch={this.props.dispatch}/>
                    <div id="composer-node-container">
                        {this.renderNodes()}
                    </div>
                </div>
            </div>
        )
    }
}

class Canvas extends Component {
    constructor (props) {
        super(props);

        this.state = {
            width: props.width,
            height: props.height,
            connectors: {}
        }

        document.updateCanvas = () => this.forceUpdate();
    }

    componentDidUpdate() {
        var c = document.getElementById("main-canvas");
        var ctx = c.getContext("2d");

        ctx.clearRect(0, 0, this.props.width*2, this.props.height * 2);
        
        let positions = this.props.connectorPositions();
        
        const inputPositions = positions.inputNodesPositions;
        const outputPositions = positions.outputNodesPositions;

        let lineCoordinates = [];

        for(let c in this.props.stateConnectors) {
            const currentConnector = this.props.stateConnectors[c];

            const connectorStart = currentConnector.connectorStart;
            const connectorEnd = currentConnector.connectorEnd;

            let connectorPosition = {};

            for(let i in inputPositions) {
                let position = inputPositions[i];
                let nodeId = position.nodeId;
                let connectorId = position.connectorId;
    
                if(connectorEnd.nodeId === nodeId && connectorEnd.settingId === connectorId) {
                    connectorPosition.startPosition = {
                        x: position.x,
                        y: position.y
                    }
                }
            }

            for(let i in outputPositions) {
                let position = outputPositions[i];
                let nodeId = position.nodeId;
                let connectorId = position.connectorId;
    
                if(connectorStart.nodeId === nodeId && connectorStart.settingId === connectorId) {
                    connectorPosition.endPosition = {
                        x: position.x,
                        y: position.y
                    }
                }
            }

            lineCoordinates.push(connectorPosition);
        }

        // console.log(lineCoordinates);
        

        for(let i in lineCoordinates) {
            const pos = lineCoordinates[i];

            const x1 = pos.startPosition.x * 2 + 16;
            const y1 = pos.startPosition.y * 2 - 93;
            const x2 = pos.endPosition.x * 2 - 134;
            const y2 = pos.endPosition.y * 2 - 93;

            // cPos.x = cPos.x * 2 + 12;
            // cPos.y = cPos.y * 2 - 94

            // this.drawCircle(ctx, cPos.x, cPos.y, 6, "black");

            this.drawLine(ctx, x1, y1, x2, y2, "#222");
        }
    }

    componentDidMount() {

    }

    drawCircle(ctx, x, y, r, color) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }

    drawLine(ctx, x1, y1, x2, y2, color) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = 5;
        ctx.strokeStyle = color;
        ctx.stroke();
    }

    render () {
        return (
            <canvas id="main-canvas"
                    width={this.props.width * 2}
                    height={this.props.height * 2}
                    style={{
                        width: this.props.width,
                        height: this.props.height
                    }}></canvas>
        )
    }
}

// --- NOT FINISHED ---
// TODO:
// * Connector handlers
class Node extends Component {
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
    }

    componentWillUpdate () {
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

                // console.log()
                return (<li className="composer-node-input-labels" key={label.title}>
                    {label.title}
                    <span onClick={e => {
                        e.stopPropagation();
                        e.preventDefault();
                    }}
                    onMouseDown = {e => {
                        e.stopPropagation();
                        e.preventDefault();
                    }}
                    onMouseUp = {e => {
                        e.preventDefault();
                        e.stopPropagation();
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
                    <span onClick={e => {
                        e.stopPropagation();
                        e.preventDefault();
                    }}
                    onMouseDown = {e => {
                        e.stopPropagation();
                        e.preventDefault();

                    }}
                    onMouseUp = {e => {
                        window.onmousemove = null;
                        window.onmouseup = null;
                    }}
                    onMouseLeave = {e => {
                        e.preventDefault();
                        e.stopPropagation();

                        window.onmouseup = () => {
                            window.onmousemove = null;
                            window.onmouseup = null;
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
    }

    render() {
        return (
            <div className={'composer-node' + (this.props.nodeData.selected ? ' selected' : '')}  
                    id={this.props.functionId} 
                    style={{
                        top: `${this.state.y + this.props.composerPosition.y}px`, 
                        left: `${this.state.x + this.props.composerPosition.x - this.props.nodeData.width / 2}px`,
                        width: `${this.props.nodeData.width}px`
                    }}
                    onMouseDown={e => {
                        e.preventDefault();
                        e.stopPropagation();

                        this.setState({
                            clickedDown: true
                        })

                        this.props.dispatch(
                            nodeClickDown(this.props.functionId)
                        );

                        window.onmousemove = e => {
                            e.preventDefault();
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
                    }}
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


// --- STABLE ---
function BgGrid (props) {
    const gridSize = props.gridSize;
    const x = props.x;
    const y = props.y;
    const width = props.width;
    const height = props.height;

    const HorizontalLines = [...Array(Math.ceil(height / gridSize)).keys()].map(
        el => {
            return (<li key={el} 
                        className={'composer-background-horizontal-lines'} 
                        style={{
                            width: width*3, 
                            height: gridSize, 
                            top: el*gridSize, 
                            left: 0}}></li>);
        }
    );

    const VerticalLines = [...Array(Math.ceil(width / gridSize)).keys()].map(
        el => {
            return (<li key={el} 
                        className={'composer-background-vertical-lines'} 
                        style={{
                            width: gridSize, 
                            height: height*3, 
                            top: 0, 
                            left: el*gridSize}}></li>);
        }
    );

    let xpos = x / gridSize - Math.floor(x / gridSize);
    xpos = xpos * gridSize;

    let ypos = y / gridSize - Math.floor(y / gridSize);
    ypos = ypos * gridSize;

    return (
        <div id={'composer-view-background'}
            onClick={e => props.handleClick(e)}
            onMouseDown={e => {
                e.preventDefault();
                e.stopPropagation();

                window.onmousemove = ev => {
                    props.dispatch(
                        backgroundUpdatePosition(ev.movementX, ev.movementY)
                    )
                }

                window.onmouseup = ev => {
                    window.onmouseup = null;
                    window.onmousemove = null;
                }
            }}>
            <ul style={{top: ypos - gridSize}}>{HorizontalLines}</ul>
            <ul style={{left: xpos - gridSize}}>{VerticalLines}</ul>
        </div>
    );
}