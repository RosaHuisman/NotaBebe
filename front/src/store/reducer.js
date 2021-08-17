import {
  SET_INPUT_VALUE,
  SET_SETTINGS_FIELD_VALUE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from './actions';

const initialState = {
  nickname: null,
  inputValue: '',
  token: null,
  isLogged: false,
  userlogin: {
    email: 'admin@notabebe.io',
    password: 'admin',
    // email: '',
    // password: '',
    isError: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.value,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        nickname: action.nickname,
        token: action.token,
        isLogged: action.logged,
        userlogin: {
          ...state.userlogin,
          email: '',
          password: '',
          isError: false,
        },
      };
    case LOGIN_ERROR:
      return {
        ...state,
        userlogin: {
          ...state.userlogin,
          isError: true,
        },
      };
    case SET_SETTINGS_FIELD_VALUE:
      return {
        ...state,
        userlogin: {
          ...state.userlogin,
          [action.fieldKey]: action.newValue,
        },
      };
    case LOGOUT:
      return {
        ...state,
        nickname: null,
        token: null,
        isLogged: false,
        userlogin: {
          ...state.userlogin,
          email: 'admin@notabebe.io',
          password: 'admin',
          isError: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
