import {
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,
  LOGOUT_ADMIN,
} from '../actions';

const initialState = {
  userList: [],
  loading: true,
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS: {
      return {
        ...oldState,
        loading: true,
      };
    }
    case GET_ALL_USERS_SUCCESS:
      return {
        ...oldState,
        userList: action.payload,
        loading: false,
      };
    case LOGOUT_ADMIN:
      return {
        ...oldState,
        userList: [],
      };
    default:
      return oldState;
  }
};

export default reducer;
