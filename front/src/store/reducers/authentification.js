import {
  HOME_INITIAL,
  CHANGE_FIELD_VALUE_LOGIN,
  CHANGE_FIELD_VALUE_FORGOT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  FORGOT_SUCCESS,
  FORGOT_ERROR,
  LOGOUT,
  LOGOUT_SUCCESS,
  SAVE_USER,
  CHECK_TOKEN_SUCCESS,
  CHECK_TOKEN_ERROR,
} from 'src/store/actions/authActions';

import {
  SAVE_PARENT_BY_ID,
} from 'src/store/actions'

const initialState = {
  email: '',
  emailForgot: '',
  password: '',
  token: null,
  roleId: null,
  userId: null,
  messageForgot: true,
  successMessage: false,
  errorMessage: false,
  contentHome: true,
  loading: true,
  parent: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // save the parent's data in the state, we receive an array of objects with as many objects as the parent has children 
    case SAVE_PARENT_BY_ID: {
     
      const { email, logged, token, roleId, userId, firstName, lastName } = action.myTokenDecoded;

      return {
        ...state,
        parent: action.payload,
        loading: false,
        email,
        logged,
        password: '',
        token,
        roleId,
        userId,
        firstName,
        lastName,
        errorMessage: false,
        contentHome: true,
        successMessage: true,
      }
    }
    case HOME_INITIAL: {
      return {
        ...state,
        loading: false,
        contentHome: true,
      };
    }
    case CHANGE_FIELD_VALUE_LOGIN: {
      return {
        ...state,
        loading: false,
        [action.key]: action.value,
      };
    }
    case CHANGE_FIELD_VALUE_FORGOT: {
      return {
        loading: true,
        email: 'ffre',
        [action.key]: action.value,
      };
    }
    case CHECK_TOKEN_SUCCESS: {

      const { email, logged, token, roleId, userId} = action.tokenLocal;
      return {
        ...state,
        email,
        logged,
        token,
        roleId,
        userId,
        loading: false,
        errorMessage: false,
        contentHome: false,
        successMessage: true,
      };
    }
    case CHECK_TOKEN_ERROR: {
      return {
        ...state,
      };
    }
    case SAVE_USER: {

      const { email, logged, token, roleId, userId, firstName, lastName } = action.myTokenDecoded;
      return {
        ...state,
        email,
        logged,
        password: '',
        token,
        roleId,
        userId,
        firstName,
        lastName,
        loading: false,
        errorMessage: false,
        // contentHome: false,
        contentHome: true,
        successMessage: true,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        errorMessage: true,
        successMessage: false,
        loading: false,
        email: '',
      };
    }
    case FORGOT_SUCCESS: {
      return {
        ...state,
        email: '',
        errorMessage: false,
        messageForgot: false,
        successMessage: true,
        loading: false,
      };
    }
    case FORGOT_ERROR: {
      return {
        ...state,
        messageForgot: false,
        errorMessage: true,
        successMessage: false,
        loading: false,
        email: '',
      };
    }
    case LOGOUT: {
      localStorage.removeItem('MyToken');
      return {
        ...state,
        email: '',
        password: '',
        token: null,
        roleId: null,
        messageForgot: false,
        successMessage: false,
        errorMessage: false,
        loading: false,
        contentHome: true,
        parent: [],

      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        email: '',
        password: '',
        token: null,
        roleId: null,
        messageForgot: false,
        successMessage: false,
        errorMessage: false,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
