export const CHANGE_VALUE_LOGIN = 'CHANGE_VALUE_LOGIN';
export const SAVE_USER_LOGIN = 'SAVE_USER_LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const CHECK_TOKEN = 'CHECK_TOKEN';

export const changeValueLogin = (value, key) => ({
  type: CHANGE_VALUE_LOGIN,
  key,
  value,
});

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const createLoginErrorAction = () => ({
  type: LOGIN_ERROR,
});

export const fetchUserData = () => ({
  type: FETCH_USER_DATA,
});

export const saveUserData = (favorites) => ({
  type: SAVE_USER_DATA,
  payload: favorites,
});

export const checkToken = () => ({
  type: CHECK_TOKEN,
});
