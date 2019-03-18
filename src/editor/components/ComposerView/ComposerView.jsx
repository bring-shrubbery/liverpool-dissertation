import React, {Component} from 'react'
import './composer.scss'

import {
    composerAddNode,
    composerUpdateSize,
    deleteSelectedNodes,
    deselectAll
} from '../../redux/actions/composerActions'

import BgGrid from './BgGrid.jsx'
import Node from './Node.jsx'
import Canvas from './Canvas.jsx'

import { connect } from 'react-redux'

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

        this.bgRef = React.createRef();
    }

    addNode (e) {
        e.preventDefault();

        let functionId = String(e.dataTransfer.getData("id"));

        const composerView = document.getElementById('composer-view');
        const composerOriginX = composerView.offsetLeft;
        const composerOriginY = composerView.offsetTop;
        const dropPositionX = e.pageX - composerOriginX - this.props.composerCoordinates.x;
        const dropPositionY = e.pageY - composerOriginY - this.props.composerCoordinates.y;

        let allLibraryNodes = {};

        for(let c in document.libraryNodes) {
            const nodesInCategory = document.libraryNodes[c];
            for(let n in nodesInCategory) {
                allLibraryNodes[n] = nodesInCategory[n];
            }
        }

        this.props.dispatch(
            composerAddNode({
                nodeId: functionId, 
                dropPositionX: dropPositionX, 
                dropPositionY: dropPositionY,
                completeNodes: allLibraryNodes
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
        ev.preventDefault();
        console.log(ev.keyCode);
        console.log("Registered Key: "+ev.keyCode);

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

        this.forceUpdate();
    }

    handleBackgroundClick(e) {
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

        return {
            outputNodesPositions: outputNodesPositions,
            inputNodesPositions: inputNodesPositions
        }
    }

    render () {
        return (
            <div id={'composer-view'} 
                ref={this.bgRef}
                tabIndex="0"
                // contentEditable={true}
                onKeyUp={this.handleKeyPress}
                style={{
                    outline: 'none'
                }}>
                <div id={'composer-canvas'}
                    onDrop={this.addNode}
                    onDragOver={e => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                    contentEditable={false}>
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