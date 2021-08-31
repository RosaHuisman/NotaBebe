import {
  SHOW_FIELD_NAP,
  CHANGE_VALUE_TEXT,
  CHANGE_MOOD,
  CHANGE_TIME_NAP,
  SAVE_RECAPS,
} from 'src/store/actions/recap';



const initialState = {
  isOpen: false,
  loading: true,
  list: [],
  mood: '',
  snap: '',
  enap: '',
  nap: '',
  snap2: '',
  enap2: '',
  nap2: '',
  meal: '',
  others: '',

};

const reducer = (state = initialState, action ) => {
  switch (action.type) {
    case SHOW_FIELD_NAP:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case CHANGE_VALUE_TEXT: {
      //console.log(action.key)
      //console.log(action.value)
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
