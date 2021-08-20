import {
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
//   userlogin: {
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
  userlogin: {
    email: 'admin@notabebe.io',
    password: 'admin',
    isError: false,
  },
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    // case SET_INPUT_VALUE: {
    //   return {
    //     ...oldState,
    //     inputValue: action.value,
    //   };
    // }
    // case LOGIN_SUCCESS:
    //   return {
    //     ...oldState,
    //     nickname: action.data.pseudo,
    //     token: action.data.token,
    //     logged: action.data.logged,
    //     userlogin: {
    //       ...oldState.userlogin,
    //       email: '',
    //       password: '',
    //       isError: false,
    //     },
    //   };
    case LOGIN_SUCCESS: {
      const { pseudo, logged, token } = action.payload;
      return {
        ...oldState,
        pseudo,
        logged,
        token,
        userlogin: {
          ...oldState.userlogin,
          email: '',
          password: '',
          isError: false,
        },
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
      };
    }
    case LOGOUT: {
      return {
        ...oldState,
        token: null,
        logged: false,
        pseudo: null,
        userlogin: {
          email: 'admin@notabebe.io',
          password: 'admin',
          isError: false,
        },
      };
    }
    default:
      return oldState;
  }
};

export default reducer;
