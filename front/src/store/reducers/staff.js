import {
  SAVE_NEW_PASSWORD_STAFF,


} from 'src/store/actions/staff'

const initialState = {
  changePasswordError: false,
};

const reducer = (state = initialState, action ={} ) => {
  switch (action.type) {
    case SAVE_NEW_PASSWORD_STAFF: {
      return {
        ...state,
        changePasswordError: false,
      };
    }
    default:
      return state;
  }
  
};

export default reducer;
