const INITIAL_STATE = {
  email: '',
  auth_token: ''
};

export default function(state = {}, action) {
  switch(action.type) {
    case 'LOGIN':
      console.log('reducer: ', action.payload);
      return {
        message: action.payload
      };
    default:
      return state;
  }
}
