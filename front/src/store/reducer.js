import {
  CHANGE_VALUE,
  CHANGE_VALUE_LOGIN,
  CHANGE_FIELD_VALUE,
  SET_INPUT_VALUE,
  SET_SETTINGS_FIELD_VALUE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  CHANGE_INFOS,
} from './actions';

<<<<<<< HEAD
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
=======
// const initialState = {
//   nickname: null,
//   inputValue: '',
//   token: null,
//   logged: false,
//   user: {
//     email: 'admin@notabebe.io',
//     password: 'admin',
//     // email: '',
//     // password: '',
//     isError: false,
//   },
// };

export const initialState = {
  // email: 'admin@notabebe.io',
  // password: 'admin',
  pseudo: null,
  logged: false,
  token: null,
  // isError: false,
  // user: {
  // //   // email: '',
  // //   // password: '',
  //   email: 'admin@notabebe.io' || 'nounou@notabebe.io' || 'parent@notabebe.io',
  //   password: 'admin' || 'nounou' || 'parent',
  //   isError: false,
  // },
  email: 'admin@notabebe.io',
  password: 'admin',
  isError: false,
>>>>>>> origin/features-componentLoginV2-linkData
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE_LOGIN:
      return {
        ...oldState,
        [action.key]: action.value,
      };
    // case LOGIN_SUCCESS:
    //   return {
    //     ...oldState,
    //     nickname: action.data.pseudo,
    //     token: action.data.token,
    //     logged: action.data.logged,
    //     user: {
    //       ...oldState.user,
    //       email: '',
    //       password: '',
    //       isError: false,
    //     },
    //   };
    // case CHANGE_VALUE: {
    //   return {
    //     ...oldState,
    //     [action.key]: action.value,
    //   };
    // }
    // case CHANGE_FIELD_VALUE: {
    //   return {
    //     ...oldState,
    //     [action.key]: action.value,
    //   };
    // }
    case LOGIN_SUCCESS: {
      const { pseudo, logged, token } = action.payload;
      return {
        ...oldState,
<<<<<<< HEAD
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
=======
        pseudo,
        logged,
        token,
        // userlogin: {
        // ...oldState.userlogin,
        email: '',
        password: '',
        isError: false,
        // },
>>>>>>> origin/features-componentLoginV2-linkData
      };
    }
    case LOGIN_ERROR: {
      return {
        ...oldState,
        isError: true,
      };
    }
    case SET_SETTINGS_FIELD_VALUE: {
      return {
        ...oldState,
        [action.fieldKey]: action.newValue,
        // [action.key]: action.value,
      };
    }
    case LOGOUT: {
      return {
        ...oldState,
        token: null,
<<<<<<< HEAD
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
=======
        logged: false,
        pseudo: null,
        // userlogin: {
        email: '',
        password: '',
        isError: false,
        // },
>>>>>>> origin/features-componentLoginV2-linkData
      };
    }
    default:
      return oldState;
  }
};

export default reducer;
