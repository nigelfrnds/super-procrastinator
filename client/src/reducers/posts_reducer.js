const INITIAL_STATE = {
  data: {}
};

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case 'POST_FETCH':
      console.log('post: ', action.payload);
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
