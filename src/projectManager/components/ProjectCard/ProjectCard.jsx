import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 400
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: "cover"
    }
};

export default withStyles(styles)(function (props) {
    const { classes } = props;
    
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{
                        height: 32,
                        whiteSpace: 'nowrap'
                    }}>{props.title}</Typography>
                    <Typography component="p" style={{
                        height: 60,
                        overflowY: 'auto'
                    }}>{props.description}</Typography>
                </CardContent>
            </CardActionArea>
            <Divider variant={'middle'} />
            <CardActions>
                <Button size="small" color="primary" href={`/editor/${props.owner}/${props.id}`}>Edit</Button>
                <Button size="small" color="primary" href={`/render/${props.owner}/${props.id}`}>Render</Button>
            </CardActions>
        </Card>
    );
});