import React, { Component } from 'react'



export default class Canvas extends Component {
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

            if(connectorEnd.x && connectorEnd.y) {
                connectorPosition.startPosition = {
                    x: connectorEnd.x,
                    y: connectorEnd.y
                }

                for(let o in outputPositions) {
                    if(outputPositions[o].nodeId === connectorStart.nodeId && outputPositions[o].connectorId === connectorStart.settingId) {
                        connectorPosition.endPosition = {
                            x: outputPositions[o].x,
                            y: outputPositions[o].y
                        }

                        break;
                    }
                }
            } else {
                for(let i in inputPositions) {
                    let position = inputPositions[i];
    
                    let nodeId = position.nodeId;
                    let connectorId = position.connectorId;
                    
                    if(connectorEnd.nodeId === nodeId && connectorEnd.settingId === connectorId) {
                        connectorPosition.startPosition = {
                            x: position.x,
                            y: position.y
                        }
    
                        break;
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
    
                        break;
                    }
                }
            }


            lineCoordinates.push(connectorPosition);
        }

        for(let i in lineCoordinates) {
            const pos = lineCoordinates[i];

            const x1 = pos.startPosition.x * 2 + 16;
            const y1 = pos.startPosition.y * 2 - 93;
            const x2 = pos.endPosition.x * 2 - 134;
            const y2 = pos.endPosition.y * 2 - 93;

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.bezierCurveTo(x1 - 150, y1, x2 + 150, y2, x2, y2);
            ctx.lineWidth = 5;
            ctx.strokeStyle = "#222";
            ctx.stroke();
        }
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