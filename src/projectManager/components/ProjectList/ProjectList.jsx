import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
    Grid
} from '@material-ui/core';

import ProjectCardElement from '../ProjectCard/ProjectCard.jsx'

function ProjectList(props) {
    let projectsDivs = props.projects.map(
        (data, i) => (<Grid item xs key={i}>
            <ProjectCardElement title={data.title}
                                description={data.description}
                                owner={data.owner}
                                id={data.projectId} />
        </Grid>)
    );

    return (
        <Grid container
                direction="row"
                justify="flex-start"
                alignItems="baseline"
                spacing={24}
                style={{
                    padding: 24,
                    overflowY: 'scroll'
                }}>
            {projectsDivs}
        </Grid>
    );
}

export default ProjectList;