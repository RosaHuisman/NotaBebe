import {
  SHOW_FIELD_NAP,
  CHANGE_TEXT_VALUE,
  CHANGE_CHILD,
  CHANGE_MOOD,
  CHANGE_TIME_NAP,
} from '../actions';

import {
  SAVE_RECAPS,
} from 'src/store/actions/recap'

const initialState = {
  isOpen: false,
  loading: true,
  list: [],
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
      case SAVE_RECAPS: {
        //console.log('je suis dans le cas SAVE_RECAPS')
        //console.log('action payload dans le reducer recap',action.payload)
       return {
         ...state,
         list: action.payload,
         loading: false,
       };
     }
    default:
      return state;
  }
};

export default reducer;
