import { SET_AUTH_STATE, CLEAR_AUTH_STATE } from '../constants/authConstants';


const initialState = {
  isAuthenticated: false,
  user: {},
  userConfirmed: false,
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_AUTH_STATE:
      return {...state, ...action.data};
    case CLEAR_AUTH_STATE:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;