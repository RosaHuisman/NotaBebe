import {
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,
  LOGOUT_ADMIN,
  USER_LIST_LOADING,
  USER_LIST_LOAD_SUCCESS,
  USER_LIST_LOAD_ERROR,
  SEARCH_CONTACTS,
  OPEN_MODAL_DELETE_USER,
  CLOSE_MODAL_DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  ADMIN_ADD_USER_SUCCESS,
  ADMIN_ADD_USER_ERROR,
  CHANGE_FIELD_VALUE_ADMIN_ADD_USER,
} from '../actions';

const initialState = {
  // userList: [],
  // loading: true,

  loading: false,
  error: null,
  dataUserList: [],
  isSearchActive: false,
  foundUsers: [],
  users: [],
  FormDeleteOpen: false,
  userDeleteId: null,
  deletedUserError: null,
  deletedUserSuccess: null,

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_ALL_USERS: {
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // }
    // case GET_ALL_USERS_SUCCESS:
    //   return {
    //     ...state,
    //     userList: action.payload,
    //     loading: false,
    //   };
    // case LOGOUT_ADMIN:
    //   return {
    //     ...state,
    //     userList: [],
    //   };
    case USER_LIST_LOADING: {
      console.log('je suis dans le reducer USER LIST LOADING')
      return {
        ...state,
        // listUsers: {
        //   ...state.listUsers,
        loading: true,
        // },
      };
    }
    case USER_LIST_LOAD_SUCCESS: {
      return {
        ...state,
        // listUsers: {
        // ...state.listUsers,
        loading: false,
        dataUserList: action.payload,
        // },
      };
    }
    case USER_LIST_LOAD_ERROR: {
      return {
        ...state,
        // listUsers: {
        // ...state.listUsers,
        loading: false,
        error: action.payload,
        // },
      };
    }
    case OPEN_MODAL_DELETE_USER: {
      return {
        ...state,
        FormDeleteOpen: !state.FormDeleteOpen,
        // FormDeleteOpen: true,
        userDeleteId: action.userDeleteId,
      };
    }
    case CLOSE_MODAL_DELETE_USER: {
      return {
        ...state,
        FormDeleteOpen: state.FormDeleteOpen,
        userDeleteId: action.userDeleteId,
      };
    }
    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        deletedUserSuccess: true,
        FormDeleteOpen: false,
      };
    }
    case DELETE_USER_ERROR: {
      return {
        ...state,
        deletedUserError: action.payload,
      };
    }
    case CHANGE_FIELD_VALUE_ADMIN_ADD_USER: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    default:
      return state;
  }
};

export default reducer;
