import {
  CHANGE_VALUE,
  CHANGE_VALUE_LOGIN,
  CHANGE_FIELD_VALUE,
  SET_INPUT_VALUE,
  SET_SETTINGS_FIELD_VALUE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from './actions';

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
        pseudo,
        logged,
        token,
        // userlogin: {
        // ...oldState.userlogin,
        email: '',
        password: '',
        isError: false,
        // },
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
        logged: false,
        pseudo: null,
        // userlogin: {
        email: '',
        password: '',
        isError: false,
        // },
      };
    }
    default:
      return oldState;
  }
};

export default reducer;
