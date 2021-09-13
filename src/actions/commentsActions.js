import clientAxios from '../cofig/axios';
import {
    GET_COMMENTS,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_ERROR
} from '../types';

export function getCommentsAction() {
    return async (dispatch) => {
        dispatch(getComments())

        try {
            const resp = await clientAxios.get('/comments');
            console.log(resp.data);
            dispatch(downloadComments(resp.data))
        } catch (error) {
            console.log(error);
            dispatch(downloadCommentsError());
        }
    }
}

const getComments = () => ({
    type: GET_COMMENTS,
    payload: true
})

const downloadComments = comments => ({
    type: GET_COMMENTS_SUCCESS,
    payload: comments
})

const downloadCommentsError = () => ({
    type: GET_COMMENTS_ERROR,
    payload: true
})