import React, { Component } from 'react';
import sampleSignalModel from '../../sampleSignalModel.json';
import './viewer.scss';

import OutputScope from '../ViewerNodes/OutputScope/OutputScope.jsx';
import InputSettingsNode from '../ViewerNodes/InputSettingsNode/InputSettingsNode.jsx';

export default class Viewer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allNodes: {
                inputNodes: {},
                processorNodes: {},
                outputNodes: {}
            },
            allNodesCounter: {
                inputNodes: 0,
                processorNodes: 0,
                outputNodes: 0
            },
            inputHeights: 0,
            outputHeights: 0,
            doesHaveInputNodes: true
        }

        // PROCESS SAVED MODEL
        this.separateNodes = this.separateNodes.bind(this);
        this.separateNodes();

        this.calculateDimensions = this.calculateDimensions.bind(this);
        this.calculateDimensions();
    }

    separateNodes () {
        const nodes = sampleSignalModel.allNodes;

        for(const nodeId in nodes) {
            const currentNode = nodes[nodeId];

            if(currentNode.nodeType == "input") {
                this.state.allNodes.inputNodes[nodeId] = currentNode;
                this.state.allNodesCounter.inputNodes++;
            } else if(currentNode.nodeType == "processor") {
                this.state.allNodes.processorNodes[nodeId] = currentNode;
                this.state.allNodesCounter.processorNodes++;
            } else if(currentNode.nodeType == "output") {
                this.state.allNodes.outputNodes[nodeId] = currentNode;
                this.state.allNodesCounter.outputNodes++;
            } else {
                //TODO: ERROR: Node type is not specified
                console.error("Node type is not specified!");
            }
        }
    }

    calculateDimensions () {
        this.state.doesHaveInputNodes = this.state.allNodesCounter.inputNodes === 0 ? false : true;

        // Model does have input nodes
        this.state.inputHeights = 100 / this.state.allNodesCounter.inputNodes;
        this.state.outputHeights = 100 / this.state.allNodesCounter.outputNodes;
    }

    render () {
        let OutputNodes = [];
        for(let outputNode in this.state.allNodes.outputNodes) {
            OutputNodes.push(
                <OutputScope key={outputNode} id={outputNode} width={this.state.doesHaveInputNodes ? 0.5 * window.innerWidth : window.innerWidth} 
                        height={this.state.outputHeights / 100 * window.innerHeight}/>
            )
        }

        let InputNodes = [];
        for(let inputNode in this.state.allNodes.inputNodes) {
            InputNodes.push(
                <InputSettingsNode inputNodeSettings={this.state.allNodes.inputNodes[inputNode]}/>
            )
        }

        return (
            <div id="viewer">
                <div id="viewer-input-nodes">{InputNodes}</div>
                <div id="viewer-output-nodes">{OutputNodes}</div>
            </div>
        )
    }
}