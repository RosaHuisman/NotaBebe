import {
  HOME_INITIAL,
  CHANGE_FIELD_VALUE_LOGIN,
  CHANGE_FIELD_VALUE_FORGOT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  FORGOT_SUCCESS,
  FORGOT_ERROR,
  LOGOUT_SUCCESS,
  SAVE_USER,
} from 'src/store/actions/authActions';

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
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case HOME_INITIAL: {
      return {
        ...oldState,
        loading: false,
      };
    }
    case CHANGE_FIELD_VALUE_LOGIN: {
      return {
        ...oldState,
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
    // case LOGIN_SUCCESS: {
    //   const { email, logged, token, roleId } = action.myTokenDecoded;
    //   return {
    //     ...oldState,
    //     email,
    //     logged,
    //     token,
    //     roleId,
    //     loading: false,
    //     errorMessage: false,
    //     contentHome: false,
    //     successMessage: true,
    //   };
    // }
    case SAVE_USER: {
      const { email, logged, token, roleId, userId, firstName, lastName } = action.myTokenDecoded;
      return {
        ...oldState,
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
        contentHome: false,
        successMessage: true,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...oldState,
        errorMessage: true,
        successMessage: false,
        loading: false,
        email: '',
      };
    }
    case FORGOT_SUCCESS: {
      return {
        ...oldState,
        email: '',
        errorMessage: false,
        messageForgot: false,
        successMessage: true,
        loading: false,
      };
    }
    case FORGOT_ERROR: {
      return {
        ...oldState,
        messageForgot: false,
        errorMessage: true,
        successMessage: false,
        loading: false,
        email: '',
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...oldState,
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
      return oldState;
  }
};

export default reducer;
