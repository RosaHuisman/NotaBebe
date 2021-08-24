import {
  SHOW_FIELD_NAP,
  CHANGE_TEXT_VALUE,
} from '../actions';

const initialState = {
  isOpen: false,
};

const reducer = (state = initialState, action ={} ) => {
  switch (action.type) {
    case SHOW_FIELD_NAP:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case CHANGE_TEXT_VALUE:
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
