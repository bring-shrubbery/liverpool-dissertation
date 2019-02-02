import React, { Component } from 'react';

export default class OutputScope extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: this.props.width * 3,
            height: this.props.height * 3
        }

        this.canvas = React.createRef();

        this.drawLine = this.drawLine.bind(this);
    }

    componentDidMount () {
        this.ctx = this.canvas.current.getContext("2d");

        this.ctx.lineWidth = 3;
        this.drawLine(0, this.state.height/2, this.state.width, this.state.height/2);
        this.drawLine(this.state.width/2, 0, this.state.width/2, this.state.height);
        this.drawCircle(this.state.width/2, this.state.height/2, 50);
    }

    drawLine(x1, y1, x2, y2) {
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }

    drawCircle(x, y, r) {
        this.ctx.beginPath();
        this.ctx.arc(x , y, r, 0, 2*Math.PI);
        this.ctx.stroke();
    }

    render() {
        return (
            <canvas ref={this.canvas} 
                    width={this.state.width} 
                    height={this.state.height} 
                    style={{
                        width: `${this.props.width}px`, 
                        height: `${this.props.height}px`
                    }}/>
        )
    }
}