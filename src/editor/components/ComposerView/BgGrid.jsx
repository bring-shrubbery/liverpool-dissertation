import React, { Component } from 'react'

import { backgroundUpdatePosition, cancelNewConnector } from '../../redux/actions/composerActions';

// --- STABLE ---
export default class BgGrid extends Component {
    constructor(props) {    
        super(props);

        this.state = {
            didClickOnBgFirst: false
        }
    }

    render() {
        const gridSize = this.props.gridSize;
        const x = this.props.x;
        const y = this.props.y;
        const width = this.props.width;
        const height = this.props.height;
    
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
                onClick={e => this.props.handleClick(e)}
                onMouseDown={e => {
                    e.stopPropagation();

                    this.setState({didClickOnBgFirst: true});
    
                    window.onmousemove = ev => {
                        this.props.dispatch(
                            backgroundUpdatePosition(ev.movementX, ev.movementY)
                        )
                    }
    
                    window.onmouseup = ev => {
                        this.setState({didClickOnBgFirst: false});

                        window.onmouseup = null;
                        window.onmousemove = null;
                    }
                }}
                onTouchStart={e => {
                    e.stopPropagation();

                    this.setState({didClickOnBgFirst: true});
    
                    window.ontouchmove = ev => {
                        if(!window.backgroundLastTouchPositionX) {
                            window.backgroundLastTouchPositionX = ev.touches[0].clientX;
                            window.backgroundLastTouchPositionY = ev.touches[0].clientY;
                        }
    
                        this.props.dispatch(backgroundUpdatePosition(
                            ev.touches[0].clientX - backgroundLastTouchPositionX, 
                            ev.touches[0].clientY - backgroundLastTouchPositionY
                        ));
    
                        window.backgroundLastTouchPositionX = ev.touches[0].clientX;
                        window.backgroundLastTouchPositionY = ev.touches[0].clientY;
                    }
    
                    window.ontouchend = ev => {
                        this.setState({didClickOnBgFirst: false});

                        window.ontouchend = null;
                        window.ontouchmove = null;
                    }
                }}
                onMouseUp={e => {
                    if(!this.state.didClickOnBgFirst){
                        e.stopPropagation();
                        this.props.dispatch(cancelNewConnector())
        
                        window.onmouseup = null;
                        window.onmousemove = null;
                    }
                }}
                onTouchEnd = {e => {
                    if(!this.state.didClickOnBgFirst){
                        e.stopPropagation();
                        this.props.dispatch(cancelNewConnector());
    
                        window.ontouchend = null;
                        window.ontouchmove = null;
                    }
                }}>
                <ul style={{top: ypos - gridSize}}>{HorizontalLines}</ul>
                <ul style={{left: xpos - gridSize}}>{VerticalLines}</ul>
            </div>
        );
    }
}