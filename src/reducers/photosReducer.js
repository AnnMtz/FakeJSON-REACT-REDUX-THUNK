import {
    GET_PHOTOS,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_ERROR
} from '../types';

const initialState = {
    photos: [],
    loading: false,
    error: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}