import axios from "axios";
const SIGNUP_START = "SIGNUP_START";
const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
const SIGNUP_FAIL = "SIGNUP_FAIL";
const LOGOUT = "LOGOUT";

export const signUp = (email, password) => {
  return async (dispatch) => {
    dispatch(signUpStart());
    try {
      const key = "AIzaSyDWvFpGoFO-s4v14osWczOGFuybjhb7org";
      let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;

      const response = await axios.post(url, {
        email,
        password,
        returnSecureToken: true,
      });
      console.log(response.data);
      localStorage.setItem("token", response.data.idToken);
      localStorage.setItem("userId", response.data.localId);
      dispatch(signUpSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(signUpFail(error));
    }
  };
};

const signUpStart = () => {
  return {
    type: SIGNUP_START,
  };
};
const signUpSuccess = (userData) => {
  return {
    type: SIGNUP_SUCCESS,
    token: userData.idToken,
    userId: userData.localId,
  };
};
const signUpFail = (error) => {
  return {
    type: SIGNUP_FAIL,
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

export const signUpCheck = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const userId = localStorage.getItem("userId");
    dispatch(signUpSuccess({ idToken: token, localId: userId }));
  };
};

export { SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAIL, LOGOUT };
