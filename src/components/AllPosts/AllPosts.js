import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginLeft: 100,
        marginBottom:25,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 16,
    },
    pos: {
        marginBottom: 12,
    },
});

const AllPosts = (props) => {
    
    const classes = useStyles();
    const { title, body, id } = props.post;
   
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {title}
                </Typography>
                    
                <Typography variant="body2" component="p">
                    {body}
                <br />
                </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" color="secondary" size="small" component={RouterLink} to={`/postdetails/${id}`}>See Details</Button>
                </CardActions>
        </Card>
    );
};

export default AllPosts;