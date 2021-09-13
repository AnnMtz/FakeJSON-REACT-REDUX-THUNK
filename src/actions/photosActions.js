import clientAxios from '../cofig/axios';
import {
    GET_PHOTOS,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_ERROR
} from '../types';

export function getPhotosAction() {
    return async (dispatch) => {
        dispatch(getPhotos())

        try {
            const resp = await clientAxios.get('/photos');
            console.log(resp);
            
        } catch (error) {
            
        }
    }
}

const getPhotos = () => ({
    type: GET_PHOTOS,
    payload: true
})