import axios from 'axios';

export const fetchPosts = (type,callback) => async (dispatch) => {
  // make request to /api/posts/type
    dispatch({
      type: 'POST_FETCH',
      payload: {
        title: type,
        posts: []
      }
    });
};
