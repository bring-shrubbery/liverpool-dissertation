import React, { Component } from 'react';
import './projectManagerView.scss';

const Project = (props) => {
    return (
        <div className={'project-manager-project-instance'} id={props.id}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <button id="viewer-button" onClick={props.onOpenViewer}>Open Viewer</button>
            <button id="editor-button" onClick={props.onOpenEditor}>Open Editor</button>
        </div>
    )
}

export default class ProjectManagerView extends Component {
    constructor(props) {
        super(props);

        this.onOpenViewer = this.onOpenViewer.bind(this);
        this.onOpenEditor = this.onOpenEditor.bind(this);
    }

    onOpenEditor (e) {
        e.preventDefault();

        this.props.redirect("editor");
    }

    onOpenViewer (e) {
        e.preventDefault();

        this.props.redirect("viewer");
    }

    render() {
        return (
            <div id={'project-manager'}>
                <Project title="Last Saved Project" 
                    description="sample project to show off on interim presentation"
                    id={'redux_latest_store'}
                    onOpenViewer={this.onOpenViewer}
                    onOpenEditor={this.onOpenEditor}/>
            </div>
        )
    }
}
