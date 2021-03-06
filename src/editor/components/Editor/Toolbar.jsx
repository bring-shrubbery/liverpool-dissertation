import React, { Component } from 'react'
import './Toolbar.scss'

import fetch from 'isomorphic-fetch';

import { connect } from 'react-redux';

@connect((store) => {
    return {
        projectData: store.composer
    }
})
export default class Toolbar extends Component {
    constructor(props) {
        super(props);

        if(!window.localStorage.getItem('loggedInUser')) {
            window.localStorage.setItem('loggedInUser', 'admin');
        }

        const currentUser = window.localStorage.getItem('loggedInUser');

        this.state = {
            user: currentUser
        }

        this.saveProject = this.saveProject.bind(this);
        this.renderProject = this.renderProject.bind(this);
        this.exportJson = this.exportJson.bind(this);
    }

    saveProject () {
        const projectId = document.projectData.pid;
        const owner = document.projectData.owner;

        fetch(`/save/${owner}/${projectId}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.props.projectData)
        }).then(function (response) {
            if (response.status != 200) {
                alert(response.status + '|' + response.statusText + '|' + response.url);
                return;
            }

            alert("Saved Successfully!");
        }).catch(function(err) {
            alert("Couldn't save project: " + err.message);
        });
    }

    renderProject() {
        const projectId = document.projectData.pid;
        const owner = document.projectData.owner;

        fetch(`/save/${owner}/${projectId}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.props.projectData)
        }).then((response) => {
            if (response.status != 200) {
                alert(response.status + '->' + response.statusText + '->' + response.url);
            }

            window.location.assign(`/render/${owner}/${projectId}`);
        }).catch(function(err) {
            alert("Couldn't save project: " + err.message);
        });
    }

    exportJson() {
        const json = JSON.stringify(this.props.projectData);
        const blob = new Blob([json], {type: "application/json"});
        const url = URL.createObjectURL(blob);
        window.location.assign(url);
    }

    render () {
        return (
            <div id={'editor-toolbar'}>
                <div className={'menu-button'}><a href={`/projects/${this.state.user}`}>home</a></div>
                <div className={'menu-button'} onClick={this.saveProject}>save</div>
                <div className={'menu-button'} onClick={this.renderProject}>render</div>
                <div className={'menu-button'} onClick={this.exportJson}>json</div>                
            </div>
        )
    }
}