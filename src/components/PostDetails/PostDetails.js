import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const PostDetails = (props) => {
    const [post, setPost] = useState({});
    const {id}= useParams();

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [id]) 

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
      }));
      const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} >
            <Typography variant="h6" gutterBottom style={{ fontWeight: 800 }}>{post.title}</Typography>
            <Typography variant="body1" gutterBottom>{post.body}</Typography>
            </Paper>

            <Comments></Comments>
        </div>
    );
};

export default PostDetails;