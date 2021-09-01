import {
  SHOW_FIELD_NAP,
  CHANGE_VALUE_TEXT,
  CHANGE_MOOD,
  CHANGE_TIME_NAP,
  SAVE_RECAPS,
  CHANGE_DATE,
  SAVE_RECAP,
} from 'src/store/actions/recap';



const initialState = {
  isOpen: false,
  loading: true,
  list: [],
  time: '12:00:00',
};

const reducer = (state = initialState, action ) => {
  switch (action.type) {
    case SHOW_FIELD_NAP:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case CHANGE_VALUE_TEXT: {
      return {
        ...state,
        [action.key]: action.value,
      }; 
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
      case SAVE_RECAPS: {
       return {
         ...state,
         list: action.payload,
         loading: false,
       };
     }
     case CHANGE_DATE: {
      return {
        ...state,
        [action.key]: action.value,
      }; 
    }
    case SAVE_RECAP: {
      return {
        ...state,
        recap: action.payload,
      }
    }
    default:
      return state;
  }
};

export default reducer;
