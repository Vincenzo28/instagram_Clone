import * as actionTypes from "../actions/handleLogIn";



const initialState = {
    loading: false,
    error: false,
    token: null,
    userId: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.LOGIN_START:
        return {
          ...state,
          loading: true,
        };
      case actionTypes.LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          token: action.token,
          userId: action.userId,
        };
      case actionTypes.LOGIN_FAIL:
        return {
          ...state,
          loading: false,
          error:action.error,
        };
        case actionTypes.LOGOUT:
          return{
            ...state,
            token: null,
          }
      default:
        return state;
    }
  };
  
  export default reducer;
  