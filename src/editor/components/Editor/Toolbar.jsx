import React, { Component } from 'react'
import './Toolbar.scss'

export default class Toolbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fileMenuOpen: false
        };

        this.selectMenu = this.selectMenu.bind(this);
    }

    selectMenu(menuTitle) {
        switch(menuTitle) {
            case "file": {
                this.setState({
                    fileMenuOpen: !this.state.fileMenuOpen
                });
                break;
            }
        }
    }

    render () {
        return (
            <div id={'editor-toolbar'}>
                <div className={'menu-button'} onClick={() => this.selectMenu("file")}>
                    file
                    <span className={`${this.state.fileMenuOpen ? 'opened' : 'closed'}`}>
                        <div className={'menu-subview'}>new</div>
                        <div className={'menu-subview'}>open</div>
                        <div className={'menu-subview'}>save</div>
                        <div className={'menu-subview'}>export</div>
                    </span>
                </div>
                <div className={'menu-button'}><a href={`/render/${document.projectData.owner}/${document.projectData.pid}`}>render</a></div>
            </div>
        )
    }
}