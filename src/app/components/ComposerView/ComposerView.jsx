import React, {Component} from 'react';
import './composer.scss';
import libraryNodes from '../LibraryView/libraryNodes.json';

class BackgroundGrid extends Component {
    constructor () {
        super();

        this.state = {
            gridSize: 50,
            composerZoom: 1,
            zoomSpeed: 0.0005,
            didUpdateZoom: true,
            windowWidth: 1,
            windowHeight: 1,
            widthGridCount: 1,
            heightGridCount: 1
        }

        // this.handleScroll = this.handleScroll.bind(this);
        this.updateSizes = this.updateSizes.bind(this);
    }

    // handleScroll (e) {
    //     if(!this.state.didUpdateZoom) {
    //         let newZoom = this.state.composerZoom + this.state.zoomSpeed * e.deltaY;

    //         if(this.state.composerZoom < 0.4) {
    //             newZoom = 0.4;
    //         }
    
    //         this.setState({
    //             composerZoom: newZoom,
    //             didUpdateZoom: true
    //         })

    //         this.updateSizes();
    //     }
    // }

    componentDidMount () {
        this.updateSizes();
    }

    updateSizes () {
        const composerNode = document.getElementById('composer-view');
        const width = composerNode.offsetWidth;
        const height = composerNode.offsetHeight;
        
        this.setState({
            windowWidth: width,
            windowHeight: height,
            widthGridCount: width / this.state.gridSize / this.state.composerZoom,
            heightGridCount: height / this.state.gridSize / this.state.composerZoom,
            didUpdateZoom: false
        })
    }

    render () {
        return (
            <div id={'composer-view-background'} 
                    onClick={e => console.log(e)}
                    style={{
                        // width: this.state.windowWidth,
                        // height: this.state.windowHeight
                    }}>
                
            </div>
        )
    }
}

class Composer extends Component {
    constructor (props) {
        super(props);

        this.state = {
            globalX: 0,
            globalY: 0,
            globalZoom: 1,
            nodes: [],
            isDragging: false,
            lastDragX: 0,
            lastDragY: 0
        }

        this.addNode = this.addNode.bind(this);
        this.renderNodes = this.renderNodes.bind(this);
        this.updateSelection = this.updateSelection.bind(this);
        this.handleDragStart = this.handleDragStart.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);
        this.handleNodeSelection = this.handleNodeSelection.bind(this);
    } 

    addNode (e) {
        e.preventDefault();

        let functionId = String(e.dataTransfer.getData("text"));

        const canvas = document.getElementById('composer-canvas');
        const canvasOriginX = canvas.offsetParent.offsetLeft;
        const canvasOriginY = canvas.offsetParent.offsetTop;
        const dropPositionX = e.pageX - canvasOriginX - this.state.globalX;
        const dropPositionY = e.pageY - canvasOriginY - this.state.globalY;

        const inputNodes = libraryNodes["input"];
        const processorNodes = libraryNodes["processors"];
        const outputNodes = libraryNodes["output"];

        const completeNodes = {...inputNodes, ...processorNodes, ...outputNodes};

        let nodeData = completeNodes[functionId];

        // Determine new ID if same node already exists in the canvas
        let newFunctionId = functionId;
        const existingNodes = this.state.nodes;

        for(let node in existingNodes) {

            if(existingNodes[node].functionId === functionId) {
                let id = 1;

                for(let node2 in existingNodes) {
                    const oldFunctionId = String(existingNodes[node2].functionId);
                    const oldNumericStringId = oldFunctionId.substring(functionId.length, oldFunctionId.length);
                    const oldId = parseInt(oldNumericStringId, 10);

                    if(functionId + oldId == functionId + id) id++;
                }

                newFunctionId = functionId + id;
                break;
            }
        }

        let newNode = {
            title: nodeData.title,
            functionId: newFunctionId,
            positionX: dropPositionX,
            positionY: dropPositionY,
            selected: false
        }

        let nodeList = this.state.nodes;
        nodeList.push(newNode);

        this.setState({
            nodes: nodeList
        })
    }

    updateSelection (id) {

    }

    renderNodes (globalX, globalY) {
        return this.state.nodes.map(
            el => {
                const positionX = el.positionX + globalX;
                const positionY = el.positionY + globalY;

                console.log(positionX, positionY);

                return <InputNode title={el.title} 
                                functionId={el.functionId}
                                key={el.functionId} 
                                positionX={positionX}
                                positionY={positionY}
                                width={150}
                                selected={el.selected}
                                onSelected={this.handleNodeSelection}/>
            }
        )
    }

    handleDragStart (e) {
        e.stopPropagation();
        const canvas = document.getElementById('composer-canvas');
        const initialOffsetX = canvas.offsetParent.offsetLeft;
        const initialOffsetY = canvas.offsetParent.offsetTop;

        const onCanvasPositionX1 = e.clientX - initialOffsetX;
        const onCanvasPositionY1 = e.clientY - initialOffsetY;
        

        this.setState({
            lastDragX: onCanvasPositionX1,
            lastDragY: onCanvasPositionY1
        })
        
        canvas.onmousemove = function (ev) {
            const canvas = document.getElementById('composer-canvas');
            const offsetX = canvas.offsetParent.offsetLeft;
            const offsetY = canvas.offsetParent.offsetTop;

            const onCanvasPositionX = ev.clientX - offsetX;
            const onCanvasPositionY = ev.clientY - offsetY;

            const globalDeltaX = this.state.lastDragX - onCanvasPositionX;
            const globalDeltaY = this.state.lastDragY - onCanvasPositionY;

            this.setState({
                globalX: this.state.globalX - globalDeltaX,
                globalY: this.state.globalY - globalDeltaY,
                lastDragX: onCanvasPositionX,
                lastDragY: onCanvasPositionY
            })
        }.bind(this);
    }

    handleDragEnd (e) {
        const canvas = document.getElementById('composer-canvas');

        canvas.onmousemove = function () {}
    }

    handleNodeSelection (id) {
        const existingNodes = this.state.nodes;

        for(let node in existingNodes) {
            if(existingNodes[node].functionId === id) {
                existingNodes[node].selected = true;
            } else {
                existingNodes[node].selected = false;
            }
        }

        this.forceUpdate();
    }

    render () {
        return (
            <div id={'composer-canvas'}
                onDrop={this.addNode}
                onDragOver={e => e.preventDefault()}
                onMouseDown={this.handleDragStart}
                onMouseUp={this.handleDragEnd}
                onMouseOut={this.handleDragEnd}>
                {this.renderNodes(this.state.globalX, this.state.globalY)}
            </div>
        )
    }
}

class InputNode extends Component {
    constructor (props) {
        super(props);

        this.state = {
            positionX: props.positionX,
            positionY: props.positionY,
            width: props.width,
            selected: false
        }

        // Settings object is separate as we don't need to redraw UI elements whn settings change
        this.settings = {

        }

        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({
            positionX: props.positionX,
            positionY: props.positionY,
            selected: props.selected
        })
    }

    handleSelect (e) {
        e.preventDefault();
        e.stopPropagation();

        this.props.onSelected(this.props.functionId);
    }

    render () {
        return (
            <div className={'composer-input-node' + (this.state.selected ? ' selected' : '')}  
                    id={this.props.functionId} 
                    style={{
                        top: `${this.state.positionY}px`, 
                        left: `${this.state.positionX - this.state.width / 2}px`,
                        width: `${this.state.width}px`
                    }}
                    onClick={e => e.stopPropagation()}
                    onMouseDown={e => e.stopPropagation()}>
                <h2 onClick={this.handleSelect}>{this.props.title}</h2>
                <div className={'composer-node-input-output-container'}>
                    <ul className={'composer-node-input-list'}>
                        <li>Output 1</li>
                        <li>Output 2</li>
                        <li>Output 3</li>
                    </ul>
                    <ul className={'composer-node-output-list'}>
                        <li>Input 1</li>
                        <li>Input 2</li>
                        <li>Input 3</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default class ComposerView extends Component {
    // constructor (props) {
    //     super(props);
    // }

    render () {
        return (
            <div id={'composer-view'}>
                <Composer/>
                {/* <BackgroundGrid/> */}
            </div>
        )
    }
}