import {
    ADD_POST,
    ADD_POST_SUCCESS,
    ADD_POST_ERROR,
    GET_POSTS,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
    POST_DELETED,
    POST_DELETED_SUCCESS,
    POST_DELETED_ERROR,
    POST_EDITED,
    START_EDITION,
    POST_EDITED_SUCCESS,
    POST_EDITED_ERROR
} from '../types';

import clientAxios from '../cofig/axios';
import Swal from 'sweetalert2';

export function createPost(post) {
    return async (dispatch) => {
        dispatch(addPost());

        try{
            await clientAxios.post('/posts', post);
            dispatch(addPostSuccess(post));

            Swal.fire(
                'Success',
                'The post was added correctly',
                'success'
            )
        } catch (error) {
            console.log(error);
            dispatch(addPostError(true))

            Swal.fire({
                icon: 'error',
                title:'There was a mistake',
                text: 'There was a mistake, try again later'
            })
        }
    }
}

const addPost = () => ({
    type: ADD_POST,
    payload: true
})

const addPostSuccess = post => ({
    type: ADD_POST_SUCCESS,
    payload: post
})

const addPostError = error => ({
    type: ADD_POST_ERROR,
    payload: error
})

//funtion to get the posts
export function getPosts() {
    return async (dispatch) => {
        dispatch(gettingPosts());

        try{
            const resp = await clientAxios.get('/posts');
            
            dispatch(downloadSucces(resp.data))
           
        }catch (error) {
            dispatch(downloadFail())
        }
    }
}

const gettingPosts = () => ({
    type: GET_POSTS,
    payload: true
})

const downloadSucces = posts => ({
    type: GET_POSTS_SUCCESS,
    payload: posts
})

const downloadFail = () => ({
    type: GET_POSTS_ERROR,
    payload: true
})

//Selecciona y elimina post
export function deletePostAction(id) {
    return async (dispatch) => {
        dispatch(deletePost(id));
        console.log(id);

        try {
            await clientAxios.delete(`/posts/${id}`)
            dispatch(successDeleted(id))

            Swal.fire(
                'Deleted!',
                'Your post has been deleted.',
                'success'
              )
        } catch (error) {
            console.log(error);
            dispatch(failDeleted())
        }
    }
}


const deletePost = id => ({
    type: POST_DELETED,
    payload: id
});

const successDeleted = () => ({
    type: POST_DELETED_SUCCESS
})

const failDeleted = () => ({
    type: POST_DELETED_ERROR,
    payload: true
})

export function getEditedPost(post) {
    return (dispatch) => {
        dispatch(getPostEdited(post))
    }
}

const getPostEdited = post => ({
    type: POST_EDITED,
    payload: post
})

//editar post en la api y state
export function edditPostAction(post) {
    return async (dispatch) => {
        dispatch(editPost());

        try{
           const resultado = await clientAxios.put(`/posts/${post.id}`, post);
           console.log(resultado);
           dispatch(editPostSuccess(post))
        } catch (error) {
            console.log(error);
            dispatch(editFail())
        }
    }
}

const editPost = () => ({
    type: START_EDITION
})

const editPostSuccess = post => ({
    type: POST_EDITED_SUCCESS,
    payload: post
})

const editFail = () => ({
    type: POST_EDITED_ERROR,
    payload: true
})