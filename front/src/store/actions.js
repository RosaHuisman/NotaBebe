/* eslint-disable import/prefer-default-export */
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SET_SETTINGS_FIELD_VALUE = 'SET_SETTINGS_FIELD_VALUE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const GET_RECAP = 'GET_RECAP';
export const GET_RECAP_SUCCESS = 'GET_RECAP_SUCCESS';
export const SHOW_FIELD_NAP = 'SHOW_FIELD_NAP';
export const CHANGE_TEXT_VALUE = 'CHANGE_TEXT_VALUE';

export const FETCH_RECAPS = 'FETCH_RECAPS';

export const createLoginSuccessAction = (nickname) => ({ type: LOGIN_SUCCESS, nickname });
export const createLoginErrorAction = () => ({ type: LOGIN_ERROR });

export const createGetRecapAction = () => ({
  type: GET_RECAP,
});

export const fetchRecaps = () => ({
  type: FETCH_RECAPS,
});

export const showFieldNap = () => ({
  type: SHOW_FIELD_NAP,
});

export const changeTextValue = (key, value) => ({
  type: CHANGE_TEXT_VALUE,
  value,
  key,
});
