import {
  LOADING_TOGGLE_ACTION,
  LOGIN_CONFIRMED_ACTION,
  LOGIN_FAILED_ACTION,
  LOGOUT_ACTION,
} from 'src/store/actions/authActions';

const initialState = {
  auth: {
    email: '',
    idToken: '',
    localId: '',
    expiresIn: '',
    refreshToken: '',
  },
  errorMessage: '',
  successMessage: '',
  showLoading: false,
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_CONFIRMED_ACTION: {
      return {
        ...oldState,
        auth: action.payload,
        errorMessage: '',
        successMessage: 'Login Successfully Completed',
        showLoading: false,
      };
    }
    case LOGOUT_ACTION: {
      return {
        ...oldState,
        errorMessage: '',
        successMessage: '',
        auth: {
          email: '',
          idToken: '',
          localId: '',
          expiresIn: '',
          refreshToken: '',
        },
      };
    }
    case LOGIN_FAILED_ACTION: {
      return {
        ...oldState,
        errorMessage: action.payload,
        successMessage: '',
        showLoading: false,
      };
    }
    case LOADING_TOGGLE_ACTION: {
      return {
        ...oldState,
        showLoading: action.payload,
      };
    }
    default:
      return oldState;
  }
};

export default reducer;
