import React, { Component } from 'react';
import './projectManagerView.scss';

import fetch from 'isomorphic-fetch';

export default class ProjectManagerView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            existingProjects: [],
            userData: {}
        }

        this.renderProjects = this.renderProjects.bind(this);
        this.fetchProjectsInfo = this.fetchProjectsInfo.bind(this);
    }

    renderProjects() {
        if(this.state.existingProjects.length > 0) {
            return this.state.existingProjects.map(project => {
                return (<div key={project.projectId} className={'project-info'}>
                    <ul key={'a'}>
                        <li id={'title'}>{project.title}</li>
                        <li id={'description'}>{project.description}</li>
                        <li id={'links'}>
                            <a href={`/editor/${project.owner}/${project.projectId}`}>edit</a>
                            <a href={`/render/${project.owner}/${project.projectId}`}>render</a>
                        </li>
                    </ul>
                </div>);
            })
        } else {
            return null;
        }
    }

    fetchProjectsInfo() {
        let th = this;
        fetch('/projects/info/admin')
        .then(function (res) {
            if(res.status >= 400) {
                console.error("Server responded with "+res.status+" error.")
                return;
            }

            return res.json();
        }).then(function(res) {
            th.setState({
                existingProjects: res
            })
        })
    }

    componentWillMount() {
        this.fetchProjectsInfo();
    }

    render() {
        return (
            <div id={'project-manager'}>
                <div className={'project-list'}>
                    {this.renderProjects()}
                </div>
            </div>
        )
    }
}
