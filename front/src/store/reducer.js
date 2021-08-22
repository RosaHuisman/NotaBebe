import {
  SET_INPUT_VALUE,
  SET_SETTINGS_FIELD_VALUE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
<<<<<<< HEAD
  LOGOUT,
=======
  CHANGE_INFOS,
>>>>>>> origin/features-parentProfil
} from './actions';

const initialState = {
  nickname: null,
  inputValue: '',
<<<<<<< HEAD
  token: null,
  isLogged: false,
  userlogin: {
    email: 'admin@notabebe.io',
    password: 'admin',
=======
  login: {
    email: 'bouclierman@herocorp.io',
    password: 'jennifer',
>>>>>>> origin/features-parentProfil
    // email: '',
    // password: '',
    isError: false,
  },
<<<<<<< HEAD
=======
  user: {
    id: 1,
    firstname: 'Tata',
    lastname: 'Toto',
    address: 'rue de la paix',
    postcode: '06360',
    city: 'Tapol',
    email: 'tata@toto.fr',
    password: 'hello',
    phone_number: '06.33.33.33.33',
    isOpen: false,
  }
>>>>>>> origin/features-parentProfil
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
<<<<<<< HEAD
        token: action.token,
        isLogged: action.logged,
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
