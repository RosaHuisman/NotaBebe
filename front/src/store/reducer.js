import {
  SET_INPUT_VALUE,
  SET_SETTINGS_FIELD_VALUE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './actions';

const initialState = {
  nickname: null,
  inputValue: '',
  login: {
    email: 'admin@notabebe.io',
    password: 'admin',
    // email: '',
    // password: '',
    isError: false,
  },
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...oldState,
        inputValue: action.value,
      };
    case LOGIN_SUCCESS:
      return {
        ...oldState,
        nickname: action.nickname,
        login: {
          ...oldState.login,
          email: '',
          password: '',
          isError: false,
        },
      };
    case LOGIN_ERROR:
      return {
        ...oldState,
        login: {
          ...oldState.login,
          isError: true,
        },
      };
    case SET_SETTINGS_FIELD_VALUE:
      return {
        ...oldState,
        login: {
          ...oldState.login,
          [action.fieldKey]: action.newValue,
        },
      };
    default:
      return oldState;
  }
};

export default reducer;
