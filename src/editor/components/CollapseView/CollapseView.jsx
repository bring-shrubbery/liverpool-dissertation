import React, { Component } from 'react'
import './CollapseView.scss'

export default class CollapseView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            opened: false
        }

        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar() {
        this.setState({
            opened: !this.state.opened
        });
    }

    render () {
        const styles = this.state.opened ? {
            width: '250px'
        } : {
            width: '15px'
        };

        return (
            <div className={`collapse-view ${this.props.right ? 'right' : 'left'}`} style={styles}>
                <div className={`collapse-children ${this.state.opened ? '' : 'hidden'}`}>
                    {this.props.children}
                </div>
                <div className={`collapse-sidebar ${this.state.opened ? 'opened' : 'closed'}`}
                    onClick={this.toggleSidebar}>
                    <div className={`collapse-toggle`}>
                        {
                            this.props.right ? 
                                `${this.state.opened ? '<' : '>'}` 
                                : 
                                `${this.state.opened ? '>' : '<'}`
                        } 
                    </div>
                </div>
            </div>
        )
    }
}