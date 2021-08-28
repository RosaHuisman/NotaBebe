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
  SAVE_USER,
  SEND_COMMENT,
  CHANGE_TEXT_VALUE,

} from '../actions';

const initialState = {
  list: [],
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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_INFOS_USER: {
      console.log('je suis dans le cas SAVE_INFOS_USERS')
      console.log('payload save infos user',action.payload)
      return {
        ...state,
        changeInfos: true,
        isOpenInfos: false,
      };
    }
    case SAVE_USERS_PARENTS: {
       //console.log('je suis dans le cas SAVE_USERS_PARENTS')

      // console.log('dans le reducer', action.users_parents)
      // const { list } = action.payload;
       //console.log('action payload dans le reducer',action.payload)
      return {
        ...state,
        list: action.payload,
        //list: action.users_parents,
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
      console.log('je suis dans le case CHANGE FIELD VALUE TWO')
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
      // console.log('je suis dans le cas CLOSE_CHANGE_INFOS')
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
      return {
        ...state,
        changePasswordError: false,
        isOpenPassword: false,
      };
    }
    case SEND_COMMENT: {
      return {
        ...state,
        commentSend: true,
      };
    }
    case CHANGE_TEXT_VALUE: {
      return {
        ...state,
        comment: action.value,
      };
    }

    default:
      return state;
  }
};

export default reducer;
