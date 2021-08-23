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
<<<<<<< HEAD
        nickname: action.nickname,
<<<<<<< HEAD
        token: action.token,
        isLogged: action.logged,
=======
        nickname: action.data.pseudo,
        token: action.data.token,
        isLogged: action.data.logged,
>>>>>>> origin/features-componentAdminDesktop
        userlogin: {
          ...oldState.userlogin,
=======
        login: {
          ...oldState.login,
>>>>>>> origin/features-parentProfil
          email: '',
          password: '',
          isError: false,
        },
      };
    case LOGIN_ERROR:
      return {
        ...oldState,
<<<<<<< HEAD
        userlogin: {
          ...oldState.userlogin,
=======
        login: {
          ...oldState.login,
>>>>>>> origin/features-parentProfil
          isError: true,
        },
      };
    case SET_SETTINGS_FIELD_VALUE:
      return {
        ...oldState,
<<<<<<< HEAD
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
=======
        login: {
          ...oldState.login,
          [action.fieldKey]: action.newValue,
        },
      };
    case CHANGE_INFOS:
      //console.log('je suis dans le cas CHANGE_INFOS')
      return {
        ...oldState,
        user: {
          ...oldState,
          isOpen: true,
>>>>>>> origin/features-parentProfil
        },
      };
    default:
      return oldState;
  }
};

export default reducer;
<<<<<<< HEAD
=======

>>>>>>> origin/features-parentProfil
