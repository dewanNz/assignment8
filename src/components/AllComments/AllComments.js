import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const AllComments = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            overflow: 'hidden',
            padding: theme.spacing(0, 3),
        },
        paper: {
            maxWidth: '50%',
            margin: `${theme.spacing(1)}px auto`,
            padding: theme.spacing(2),
        },
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
          },
    }));
    const classes = useStyles();

    const { name, email, body } = props.allComment;
    return (
        <div className={classes.root}>
            
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar  src="" className={classes.large}></Avatar>
                    </Grid>
                    <Grid item md>
                        <Typography style={{ fontWeight: 800 }}>{name}</Typography>
                        <Typography style={{ fontWeight: 600 }}>{email}</Typography>
                        <Typography>{body}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default AllComments;