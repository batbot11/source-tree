import { SET_AUTH_STATE, CLEAR_AUTH_STATE } from '../constants/authConstants';

export const setAuthState = data => ({
  type: SET_AUTH_STATE,
  data,
});

export const clearAuthState = () => ({
  type: CLEAR_AUTH_STATE,
});