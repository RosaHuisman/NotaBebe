/* eslint-disable import/prefer-default-export */

export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SET_SETTINGS_FIELD_VALUE = 'SET_SETTINGS_FIELD_VALUE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

// actions logout
export const LOGOUT = 'LOGOUT';

// actions user
export const OPEN_CHANGE_INFOS = 'OPEN_CHANGE_INFOS';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const CHANGE_INFOS = 'CHANGE_INFOS';
export const TOGGLE_CHANGE_PASSWORD = 'TOGGLE_CHANGE_PASSWORD';
export const CLOSE_FORM = 'CLOSE_FORM';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';
export const INFOS_ERROR = 'INFOS_ERROR';
export const PASSWORD_ERROR = 'PASSWORD_ERROR';
export const SAVE_INFOS_USER = 'SAVE_INFOS_USER';
export const SAVE_PASSWORD_USER = 'SAVE_PASSWORD_USER';

// actions login
export const createLoginSuccessAction = (nickname) => ({ type: LOGIN_SUCCESS, nickname });
export const createLoginErrorAction = () => ({ type: LOGIN_ERROR });

// actions user
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

export const closeFormAction = () => ({
  type: CLOSE_FORM,
});

export const changePassword = () => ({
  type: CHANGE_PASSWORD,
});

export const passwordError = () => ({
  type: LOGIN_ERROR,
});

export const infosError = () => ({
  type: LOGIN_ERROR,
});

export const saveInfosUser = () => ({
  type: SAVE_INFOS_USER,
});

export const savePasswordUser = () => ({
  type: SAVE_PASSWORD_USER,
});
