import {
    GET_COMMENTS,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_ERROR
} from '../types';

const initialState = {
    comments: [],
    error: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_COMMENTS:
            return {
                ...state,
                loading: action.payload 
            }
        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: [...state.comments, action.payload]
            }
        case GET_COMMENTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}