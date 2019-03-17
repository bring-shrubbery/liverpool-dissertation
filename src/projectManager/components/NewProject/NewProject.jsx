class NewProject extends Component {
    constructor(props) {
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

    submitNewProject(e) {
        e.preventDefault();

        let that = this;

        this.setState({
            isFilling: false,
            isSubmitting: true
        })

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

    moveToFilling(e) {
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
            title: "New Project",
            description: "Please enter description..."
        });

        this.props.reload();
    }

    render() {

        return (
            <div key={'new-project'} className={'project-new'}>
                <NewProjectDiv isHidden={this.state.isFilling || this.state.isSubmitting || this.state.isFailed}
                    onClick={this.moveToFilling} />
                <NewProjectForm onSubmit={this.submitNewProject}
                    onCancel={this.cancelFill}
                    title={this.state.title}
                    description={this.state.description}
                    isHidden={this.state.isSubmitting || !this.state.isFilling || this.state.isFailed}
                    onTitleUpdate={e => this.setState({ title: e.target.value })}
                    onDescriptionUpdate={e => this.setState({ description: e.target.value })} />
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
        <form id={'new-project-details'} onSubmit={props.onSubmit} className={props.isHidden ? 'hidden' : ''}>
            <label id={'new-project-title'}>Project Title</label>
            <input id={'new-project-title-input'} type={'text'} value={props.title} onChange={props.onTitleUpdate} placeholder={'title...'} />
            <label id={'new-project-description'}>Description</label>
            <textarea id={'new-project-description-input'} onChange={props.onDescriptionUpdate} value={props.description} placeholder={'description...'} />
            <input type={'button'} onClick={props.onCancel} value={'Cancel'} />
            <input type={'submit'} value={'Create'} />
        </form>
    )
}