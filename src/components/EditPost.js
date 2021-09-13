import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch, useSelector } from 'react-redux';
import { edditPostAction } from '../actions/postsActions';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-flex',
        width: '70%'
    },
    card: {
        marginLeft: '26rem',
        width: '100%'
    },
    cardBody: {
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        marginLeft: '17%'
    },
    formControl: {
        width: '25rem',
        marginTop: '25px'
    },
    button: {
        marginTop: '36px',
        width: '41%',
        height: '43px',
        marginLeft: '35px'
        }

}));

const EditPost = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const history = useHistory();

    const [post, setPost] = useState({
        title: '',
        body: ''
    })

    const postedit = useSelector(state => state.posts.postedited);
    console.log(post);
  
    // if(!post) return null;

    useEffect(() => {
        setPost(postedit);
    }, [postedit]);

    const handleChange = e => {
        setPost({
            ...post,
            [e.target.name]:e.target.value
        })
    }

    const submitEdition = e => {
        e.preventDefault();

        dispatch(edditPostAction(post))

        history.push('/');
    }

    return (
        <div className={classes.col}>
        <div className={classes.card}>
        <div className={classes.cardBody}>
            <h2 className={classes.header}>EDIT POST</h2>
            <form
                onSubmit={submitEdition}
            >
            <div className={classes.formGgroup}>
                <TextField
                    type="text"
                    className={classes.formControl}
                    placeholder="Title"
                    name="title"
                    value={post.title}
                    onChange={handleChange}
                />
            </div>

            <div className={classes.formGgroup}>
                <TextField
                    type="text"
                    className={classes.formControl}
                    placeholder="body"
                    name="body"
                    value={post.body}
                    onChange={handleChange}
                />
            </div>
            <div>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                >
                Save
                </Button>
            </div>
            </form>
        </div>
        </div>
</div>
     );
}
 
export default EditPost;