import axios from "axios";
const LOGIN_START = "LOGIN_START";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
const LOGOUT = "LOGOUT";

export const logIn = (email, password) => {
  return async (dispatch) => {
    dispatch(logInStart());
    try {
      const key = "AIzaSyDWvFpGoFO-s4v14osWczOGFuybjhb7org";
      const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;

      const response = await axios.post(url, {
        email,
        password,
        returnSecureToken: true,
      });
      console.log(response.data);
      localStorage.setItem("token", response.data.idToken);
      localStorage.setItem("userId", response.data.localId);
      dispatch(logInSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(logInFail(error));
    }
  };
};

const logInStart = () => {
  return {
    type: LOGIN_START,
  };
};
const logInSuccess = (userData) => {
  return {
    type: LOGIN_SUCCESS,
    token: userData.idToken,
    userId: userData.localId,
  };
};
const logInFail = (error) => {
  return {
    type: LOGIN_FAIL,
    error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  return {
    type: LOGOUT,
  };
};

export const logInCheck = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const userId = localStorage.getItem("userId");
    dispatch(logInSuccess({ idToken: token, localId: userId }));
  };
};

export { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT };
