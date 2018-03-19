import axios from "axios";

export const loginUser = (values,callback) => async (dispatch) => {
  console.log(values);
  let { data } = await axios.post('/api/users/login',values);
  dispatch({
    type: 'LOGIN',
    payload: data
  });
  callback();
};

export const registerUser = (values,callback) => async (dispatch) => {
  console.log(values);
  let { data } = await axios.post('/api/users/login',values);
  dispatch({
    type: 'REGISTER',
    payload: data
  });
  callback();
};
