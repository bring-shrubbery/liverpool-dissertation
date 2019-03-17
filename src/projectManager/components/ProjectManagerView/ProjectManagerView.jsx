import React, { Component } from 'react'
import './projectManagerView.scss'

import fetch from 'isomorphic-fetch'

import ProjectList from '../ProjectList/ProjectList.jsx';

export default class ProjectManagerView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            existingProjects: []
        }

        this.fetchProjectsInfo = this.fetchProjectsInfo.bind(this);
        this.reload = this.reload.bind(this);
    }

    reload() {
        this.setState({
            existingProjects: []
        });

        fetchProjectsInfo();
    }

    fetchProjectsInfo() {
        fetch('/projects/info/admin')
            .then((res) => {
                if (res.status >= 400) {
                    console.error("Server responded with " + res.status + " error.")
                    return;
                }

                return res.json();
            }).then((res) => {
                this.setState({
                    existingProjects: [...res],
                });
            });
    }

    componentDidMount () {
        this.fetchProjectsInfo();
    }

    render() {
        return (
            <ProjectList projects={this.state.existingProjects}/>
        )
    }
}

