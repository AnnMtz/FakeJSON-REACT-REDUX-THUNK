import { combineReducers }from 'redux';
import postsReducer from './postsReducer';
import alertReducer from './alertReducer';
import commentsReducer from './commentsReducer';
import photosReducer from './photosReducer';

export default combineReducers({
    posts: postsReducer,
    alert: alertReducer,
    comments: commentsReducer,
    photos: photosReducer
});