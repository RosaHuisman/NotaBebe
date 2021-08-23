import {
  CHANGE_VALUE_LOGIN,
  SET_SETTINGS_FIELD_VALUE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  SET_CURRENT_USER,
} from '../actions';

export const initialState = {
  loading: true,
  pseudo: null,
  logged: false,
  token: null,
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
    case LOGIN_SUCCESS: {
      const { pseudo, logged, token } = action.payload;
      return {
        ...oldState,
        pseudo,
        logged,
        token,
        email: '',
        password: '',
        isError: false,
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
        email: '',
        password: '',
        isError: false,
      };
    }
    default:
      return oldState;
  }
};

export default reducer;
