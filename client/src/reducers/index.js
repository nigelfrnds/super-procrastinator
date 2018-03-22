import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import postReducer from './posts_reducer';

export default combineReducers({
  form: formReducer,
  posts: postReducer
});
