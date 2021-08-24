import {
  SHOW_FIELD_NAP,
  CHANGE_TEXT_VALUE,
  CHANGE_CHILD,
  CHANGE_MOOD,
  CHANGE_TIME_NAP,
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
      };CHANGE_TIME_NAP
    case CHANGE_CHILD:
      return {
        ...state,
        [action.key]: action.value,
      }
    case CHANGE_MOOD:
      return {
        ...state,
        [action.key]: action.value,
      }
    case CHANGE_TIME_NAP:
      return {
        ...state,
        [action.key]: action.value,
      }
    default:
      return state;
  }
};

export default reducer;
