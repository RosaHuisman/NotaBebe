import { SET_CURRENT_USER } from '../actions';

const initialState = {
  isAuthenticated: false,
  user: {},
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return {
        ...oldState,
        isAuthenticated: action.user,
        user: action.user,
      };
    }
    default:
      return oldState;
  }
};

export default reducer;
