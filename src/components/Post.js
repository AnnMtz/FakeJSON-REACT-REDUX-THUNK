import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { createPost } from '../actions/postsActions';
import { useDispatch, useSelector } from 'react-redux';
import { showAlertAction, hideAlertAction } from '../actions/alertActions';

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

const Post = ({history}) => {
    const classes = useStyles();

    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');

    const dispatch = useDispatch();

    const alert = useSelector( state => state.alert.alert);

    console.log(alert);

    // console.log(loading);
    const addPost = post => dispatch( createPost(post) );

    const submitPost = e => {
        e.preventDefault();

        //validation
        if(title.trim() === '' || body.trim() === '') {
            const alertMessage = {
                msg: 'All the fields are required'
            }
            dispatch(showAlertAction(alertMessage));
            return;
        }

        //if no errors
        dispatch(hideAlertAction());

        //create new post
        addPost({
            title,
            body
        });

        history.push('/posts');
    }

    return ( 
        <div className={classes.col}>
            <div className={classes.card}>
            <div className={classes.cardBody}>
                <h2 className={classes.header}>ADD POST</h2>
                {alert ? <p>{alert.msg}</p> : null}
                <form
                    onSubmit={submitPost}
                >
                <div className={classes.formGgroup}>
                    <TextField
                        type="text"
                        className={classes.formControl}
                        placeholder="Title"
                        name="title"
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>

                <div className={classes.formGgroup}>
                    <TextField
                        type="text"
                        className={classes.formControl}
                        placeholder="body"
                        name="body"
                        onChange={e => setBody(e.target.value)}
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
 
export default Post;