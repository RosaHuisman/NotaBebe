import { SAVE_USER_LOGGED } from 'src/store/actions/userload';

export const initialState = {
  listUsers: [],
  loading: true,
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_LOGGED: {
      return {
        ...oldState,
        listUser: action.userload,
        loading: false,
      };
    }
    default:
      return oldState;
  }
};

export default reducer;
