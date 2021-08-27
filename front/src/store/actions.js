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
export const CHANGE_CHILD = 'CHANGE_CHILD';
export const CHANGE_MOOD = 'CHANGE_MOOD';
export const CHANGE_TIME_NAP = 'CHANGE_TIME_NAP';
export const SEND_RECAP = 'SEND_RECAP';

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
})

export const changeTextValue = (key, value) => ({
  type: CHANGE_TEXT_VALUE,
  value, 
  key,
})

export const changeChild = (key, value) => ({
  type: CHANGE_CHILD,
  value, 
  key,
})

export const changeMood = (key, value) => ({
  type: CHANGE_MOOD,
  value, 
  key,
})

export const changeTimeNap = (key, value) => ({
  type: CHANGE_TIME_NAP,
  value, 
  key,
})

// export const sendRecap = (key, value) => ({
//   type: SEND_RECAP,
//   value, 
//   key,
// })
