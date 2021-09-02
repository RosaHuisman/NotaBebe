import {
  // HOME_INITIAL,
  OPEN_CHANGE_INFOS,
  // CHANGE_VALUE,
  CHANGE_FIELD_VALUE,
  CHANGE_FIELD_VALUE_TWO,
  TOGGLE_CHANGE_PASSWORD,
  CLOSE_FORM,
  INFOS_ERROR,
  PASSWORD_ERROR,
  SAVE_INFOS_USER,
  // SAVE_PASSWORD_USER,
  SAVE_NEW_PASSWORD_PARENT,
  SAVE_USERS_PARENTS,
  SAVE_USERS_STAFF,
  SAVE_USER,
  CHANGE_TEXT_VALUE,
  ADMIN_ADD_USER_SUCCESS,
  ADMIN_ADD_USER_ERROR,
  RESET_FORM_ADMIN,
} from '../actions';

const initialState = {
  list: [],
  userlist: [],
  isOpenInfos: false,
  isOpenPassword: false,

  oldpassword: '',
  newpassword: '',
  confirmpassword: '',

  changeInfos: false,
  changeInfosError: false,
  changePasswordError: false,
  loading: true,
  comment: '',
  commentSend: false,
  email: '',
  password: '',
  logged: false,
  token: null,
  roleId: null,
  isError: false,
  address: '',

  last_name: '',
  first_name: '',
  phone_number: '',
  postcode: '',
  city: '',
  role_id: '',
  user_id: '',
  contentAdminPageAdd: true,
  addUserSuccess: false,
  addUserError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_INFOS_USER: {

      return {
        ...state,
        changeInfos: true,
        isOpenInfos: false,
      };
    }
    case SAVE_USERS_PARENTS: {
      //console.log('je suis dans le cas SAVE_USERS_PARENTS');
      //const { user_id, role_id } = action.payload;

      console.log('action payload dans le reducer', action.payload);

      return {
        ...state,
        list: action.payload,
        //ser_id,
        //role_id,
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
    // case HOME_INITIAL: {
    //   return {
    //     loading: false,
    //   };
    // }
    // case SAVE_USER: {
    //   const { email, logged, token, roleId } = action.myTokenDecoded;
    //   return {
    //     ...state,
    //     email,
    //     logged,
    //     token,
    //     roleId,
    //     isError: false,
    //     loading: false,
    //   };
    // }
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

    // case SAVE_PASSWORD_USER: {
    //   return {
    //     ...state,
    //     changePasswordError: false,
    //     isOpenPassword: false,
    //   };
    // }
    case SAVE_NEW_PASSWORD_PARENT: {
      console.log('je suis dans le case change password parent')
      return {
        ...state,
        changePasswordError: false,
        isOpenPassword: false,
      };
    }
    case CHANGE_TEXT_VALUE: {
      return {
        ...state,
        comment: action.value,
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
        role_id: '',
        contentAdminPageAdd: true,
        addUserSuccess: false,
        addUserError: false,
      };
    }

    default:
      return state;
  }
};

export default reducer;
