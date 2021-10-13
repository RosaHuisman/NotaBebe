import {
  OPEN_CHANGE_INFOS,
  CHANGE_FIELD_VALUE,
  CHANGE_FIELD_VALUE_TWO,
  TOGGLE_CHANGE_PASSWORD,
  CLOSE_FORM,
  INFOS_ERROR,
  PASSWORD_ERROR,
  SAVE_INFOS_USER,
  SAVE_NEW_PASSWORD_PARENT,
  SAVE_USERS_PARENTS,
  SAVE_USERS_STAFF,
  SAVE_USER,
  ADMIN_ADD_USER_SUCCESS,
  ADMIN_ADD_USER_ERROR,
  RESET_FORM_ADMIN,
  CHANGE_ROLE,
} from '../actions';

import { CLEAR_CHANGE_PASSWORD_CONFIRM_MESSAGE } from 'src/store/actions/staff';

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
  CHECK_TOKEN_SUCCESS,
  CHECK_TOKEN_ERROR,
} from 'src/store/actions/authActions';

import {
  SAVE_PARENT_BY_ID,
  SAVE_STAFF_BY_ID,

} from 'src/store/actions'

const initialState = {
  
  loading: true,
  //role_id: '',
  // user_id: '',
  logged: false,
  token: null,
  roleId: null,
  userId: null,

  //infos 
  last_name: '',
  first_name: '',
  email: '',
  emailForgot: '',
  password: '',
  address: '',
  postcode: '',
  city: '',
  phone_number: '',


  // change infos & password
  isOpenInfos: false,
  isOpenPassword: false,
  oldpassword: '',
  newpassword: '',
  confirmpassword: '',
  changeInfos: false,
  changeInfosError: false,
  changePasswordError: false,
  
  // admin
  contentAdminPageAdd: true,
  addUserSuccess: false,
  addUserError: false,
  //list: [],
  //userlist: [],
  
  // forgot password
  messageForgot: true,
  successMessage: false,
  errorMessage: false,
  contentHome: true,

  // role connection
  parent: [],
  staff: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_INFOS_USER: {
      return {
        allergy: action.payload.updatedChild?.allergies,
        ...state,
        isOpenInfos: false,
      };
    }
    case SAVE_USERS_PARENTS: {
      return {
        ...state,
        list: action.payload,
        loading: false,
        logged: true,
      };
    }
    case SAVE_USERS_STAFF: {
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    }
    case OPEN_CHANGE_INFOS:
      return {
        ...state,
        isOpenInfos: !state.isOpenInfos,
      };
    case CHANGE_FIELD_VALUE: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    case CHANGE_FIELD_VALUE_TWO: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    case TOGGLE_CHANGE_PASSWORD:
      return {
        ...state,
        isOpenPassword: !state.isOpenPassword,
      };
    case CLOSE_FORM:
      return {
        ...state,
        isOpenInfos: false,
        isOpenPassword: false,
      };
    case INFOS_ERROR: {
      return {
        ...state,
        loginError: true,
      };
    }
    case PASSWORD_ERROR: {
      return {
        ...state,
        loginError: true,
      };
    }

    case CLEAR_CHANGE_PASSWORD_CONFIRM_MESSAGE: {
      return {
        ...state,
        oldpassword: '',
        newpassword: '',
        confirmpassword: '',
      };
    }

    case SAVE_NEW_PASSWORD_PARENT: {
      return {
        ...state,
        changePasswordError: false,
        isOpenPassword: false,
      };
    }

    case ADMIN_ADD_USER_SUCCESS: {
      return {
        ...state,
        contentAdminPageAdd: false,
        addUserSuccess: true,
        addUserError: false,
      };
    }
    case ADMIN_ADD_USER_ERROR: {
      return {
        ...state,
        contentAdminPageAdd: false,
        addUserSuccess: false,
        addUserError: true,
      };
    }
    case RESET_FORM_ADMIN: {
      return {
        ...state,
        email: '',
        password: '',
        address: '',
        last_name: '',
        first_name: '',
        phone_number: '',
        postcode: '',
        city: '',
        roleId: '',
        contentAdminPageAdd: true,
        addUserSuccess: false,
        addUserError: false,
      };
    }
    case CHANGE_ROLE: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    // authentification reducer 
    case SAVE_STAFF_BY_ID: {
      const { email, logged, token, roleId, userId, firstName, lastName } = action.myTokenDecoded;

      return {
        ...state,
        staff: action.payload,
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
        firstName: '',
        lastName: '',
        staff: {},
        emailForgot: '',
        userId: null,
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
