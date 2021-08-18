/* eslint-disable import/prefer-default-export */

//actions login
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SET_SETTINGS_FIELD_VALUE = 'SET_SETTINGS_FIELD_VALUE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

//actions user
export const OPEN_CHANGE_INFOS = 'CHANGE_INFOS';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const CHANGE_INFOS = 'CHANGE_INFOS';
export const TOGGLE_CHANGE_PASSWORD = 'TOGGLE_CHANGE_PASSWORD';
export const CLOSE_CHANGE_INFOS = 'CLOSE_CHANGE_INFOS';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';


//actions login
export const createLoginSuccessAction = (nickname) => ({ type: LOGIN_SUCCESS, nickname });
export const createLoginErrorAction = () => ({ type: LOGIN_ERROR });

//actions user
export const openChangeInfos = () => ({ 
  type: OPEN_CHANGE_INFOS, 
});

export const changeValue = (value, key) => ({
  type: CHANGE_VALUE,
  key,
  value,
});

export const changeInfos = () => ({
    type: CHANGE_INFOS,
});

export const toggleChangePassword = () => ({
  type: TOGGLE_CHANGE_PASSWORD,
});

export const closeChangeInfos = () => ({
  type: CLOSE_CHANGE_INFOS,
});

export const changePassword = () => ({
  type: CHANGE_PASSWORD,
});

