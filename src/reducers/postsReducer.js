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
    POST_EDITED_SUCCESS,
    POST_EDITED_ERROR
} from '../types'

const initialState = {
    post: [],
    error: null,
    loading: false,
    postdeleted: null,
    postedited: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_POSTS:
        case ADD_POST:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                post: [...state.post, action.payload]
            }
        case GET_POSTS_ERROR:
        case ADD_POST_ERROR:
        case POST_DELETED_ERROR:
        case POST_EDITED_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                post: action.payload
            }
        case POST_DELETED:
            return {
                ...state,
                postdeleted: action.payload
            }
        case POST_DELETED_SUCCESS:
            return {
                ...state,
                post: state.post.filter(post => post.id !== state.postdeleted),
                postdeleted: null
            }
        case POST_EDITED:
            return {
                ...state,
                postedited: action.payload
            }
        case POST_EDITED_SUCCESS:
            return {
                ...state,
                postedited: null,
                post: state.post.map(post => 
                    post.id === action.payload.id ? post = action.payload : post
                )
            }
        default:
            return state;
    }
}