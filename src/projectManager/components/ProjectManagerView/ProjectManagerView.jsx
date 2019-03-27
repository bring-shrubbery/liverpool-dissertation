import React, { Component } from 'react';
import './projectManagerView.scss';

import fetch from 'isomorphic-fetch';

export default class ProjectManagerView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            existingProjects: [],
            userData: {},
            didJustLoad: false
        }

        this.renderProjects = this.renderProjects.bind(this);
        this.fetchProjectsInfo = this.fetchProjectsInfo.bind(this);
        this.reload = this.reload.bind(this);
    }

    reload() {
        this.setState({
            didJustLoad: false
        });

        console.log("Reset: didLoad = false;");
    }

    renderProjects() {
        if(this.state.existingProjects.length > 0) {
            let projectsDivs = this.state.existingProjects.map(project => {
                return (<div key={project.projectId} className={'project-item project-info'}>
                    <div id={'data-container'}>
                        <div id={'title'}>{project.title}</div>
                        <div id={'description'}>{project.description}</div>
                        <div id={'links'}>
                            <a href={`/editor/${project.owner}/${project.projectId}`}>edit</a>
                            <a href={`/render/${project.owner}/${project.projectId}`}>render</a>
                        </div>
                    </div>
                </div>);
            });

            projectsDivs.push(<NewProject key={'new-project'} reload={this.reload}/>);

            return projectsDivs;
        } else {
            // console.error("No projects info in the state!")
            return null;
        }
    }

    fetchProjectsInfo() {
        let th = this;

        if(typeof document !== 'undefined'){
            fetch('/projects/info/admin')
            .then(function (res) {
                if(res.status >= 400) {
                    console.error("Server responded with "+res.status+" error.")
                    return;
                }

                return res.json();
            }).then(function(res) {
                th.setState({
                    existingProjects: res,
                    didJustLoad: true
                });
            })
        }
    }

    render() {
        if(!this.state.didJustLoad) this.fetchProjectsInfo();
        // console.log("Rendered!");

        const projectItems = this.renderProjects();

        return (
            <div id={'project-manager'}>
                <div className={'projects-user-data'}>
                    <div className={'projects-user-data-1'}>
                        <div className={'projects-user-avatar-main'}></div>
                        <h1 className={'projects-user-name-main'}>admin</h1>
                    </div>
                    <div className={'reload-button'} onClick={e => {
                            e.stopPropagation();
                            e.persist();
                            this.reload();

                            e.target.className = "rotating";

                            setTimeout(function () { this.target.className = ""; }.bind(e), 1000);
                        }}>
                        <img src="/reload.png" alt="reload" width="16" height="16"/>
                    </div>
                </div>
                <div className={'project-list'}>
                    {projectItems}
                </div>
            </div>
        )
    }
}


class NewProject extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isFilling: false,
            isSubmitting: false,
            isFailed: false,
            title: "",
            description: ""

        }

        this.submitNewProject = this.submitNewProject.bind(this);
        this.moveToFilling = this.moveToFilling.bind(this);
        this.cancelFill = this.cancelFill.bind(this);
    }

    submitNewProject (e) {
        e.preventDefault();

        let that = this;

        this.setState({
            isFilling: false,
            isSubmitting: true
        })

        if(typeof document !== 'undefined'){
            fetch(`/createProject/admin/${this.state.title}/${this.state.description}`)
            .then((res) => {
                this.cancelFill();
    
                let getText = res.text();
    
                getText.then(t => {
                    window.location.assign(t);
                });
            })
            .catch((err) => {
                that.setState({
                    isFilling: false,
                    isSubmitting: false,
                    isFailed: true
                })
            })
        }
    }

    moveToFilling (e) {
        e.preventDefault();
        e.stopPropagation();

        this.setState({
            isFilling: true,
            isSubmitting: false
        })
    }

    cancelFill() {
        this.setState({
            isFilling: false,
            isSubmitting: false,
            isFailed: false,
            title: "",
            description: ""
        });

        this.props.reload();
    }

    render () {
        return (
            <div key={'new-project'} className={'project-item project-new'}>
                <NewProjectDiv  isHidden={this.state.isFilling || this.state.isSubmitting || this.state.isFailed} 
                                onClick={this.moveToFilling}/>
                <NewProjectForm onSubmit={this.submitNewProject} 
                                onCancel={this.cancelFill} 
                                title={this.state.title} 
                                description={this.state.description}
                                isHidden={this.state.isSubmitting || !this.state.isFilling || this.state.isFailed}
                                onTitleUpdate={e => this.setState({title: e.target.value})}
                                onDescriptionUpdate={e => this.setState({description: e.target.value})}/>
            </div>
        )
    }
}

function NewProjectDiv(props) {
    return (
        <div id={'new-project-new-button'} className={props.isHidden ? 'hidden' : ''} onClick={props.onClick}>
            <div></div>
            <div></div>
        </div>
    )
}

function NewProjectForm(props) {
    return (
        <form id={'new-project-details'} onSubmit={props.onSubmit} className={props.isHidden ? 'hidden': ''}>
            <label id={'new-project-title'}>Project Title</label>
            <input id={'new-project-title-input'} type={'text'} value={props.title} onChange={props.onTitleUpdate} placeholder={'title...'}/>
            <label id={'new-project-description'}>Description</label>
            <textarea id={'new-project-description-input'} onChange={props.onDescriptionUpdate} value={props.description} placeholder={'description...'}/>
            <input type={'button'} onClick={props.onCancel} value={'Cancel'}/>
            <input type={'submit'} value={'Create'}/>
        </form>
    )
}