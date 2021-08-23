import {
  // SET_INPUT_VALUE,
  SET_SETTINGS_FIELD_VALUE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from '../actions';

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

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    // case SET_INPUT_VALUE:
    //   return {
    //     ...oldState,
    //     inputValue: action.value,
    //   };
    case LOGIN_SUCCESS:
      return {
        ...oldState,
        nickname: action.nickname,
        token: action.token,
        isLogged: action.logged,
        userlogin: {
          ...oldState.userlogin,
          email: '',
          password: '',
          isError: false,
        },
      };
    case LOGIN_ERROR:
      return {
        ...oldState,
        userlogin: {
          ...oldState.userlogin,
          isError: true,
        },
      };
    case SET_SETTINGS_FIELD_VALUE:
      return {
        ...oldState,
        userlogin: {
          ...oldState.userlogin,
          [action.fieldKey]: action.newValue,
        },
      };
    case LOGOUT:
      return {
        ...oldState,
        nickname: null,
        token: null,
        isLogged: false,
        userlogin: {
          ...oldState.userlogin,
          email: 'admin@notabebe.io',
          password: 'admin',
          isError: false,
        },
      };
    default:
      return oldState;
  }
};

export default reducer;
