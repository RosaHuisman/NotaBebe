import {
  SHOW_FIELD_NAP,
  CHANGE_VALUE_TEXT,
  CHANGE_MOOD,
  CHANGE_TIME_NAP,
  // CHANGE_TIME_NAP_START,
  // CHANGE_TIME_NAP_END,
  SAVE_RECAPS,
  CHANGE_DATE,
  SAVE_RECAP,
} from 'src/store/actions/recap';



const initialState = {
  isOpen: false,
  loading: true,
  list: [],
  time: '12:00:00',
  start_time: '',
  end_time: '',
  comment: '',
  naps: [],
  meals: [],


  date: '',
  mood: '',
  others:'',
};





const reducer = (state = initialState, action ) => {
  switch (action.type) {
    case SHOW_FIELD_NAP:
      const newNap = {
        start_time: state.start_nap_1,
        end_time: state.end_nap_1,
        comment: state.comment_nap_1 
      } 

      console.log(newNap)
      return {
        ...state,
        isOpen: !state.isOpen,
        naps: [{...newNap}]
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
        console.log(typeof(action.value))
        console.log(action.key)
        // const newItem = {
        //   start_time: state.start_nap_1,
        //   end_time: state.end_nap_1,
        // }
      return {
        ...state,
          [action.key]: action.value,
      }
    // case CHANGE_TIME_NAP_START:
    //   return {
    //     ...state,
    //     naps:[
    //       {
    //       start_nap: action.value,
    //     }]
    //   }
    //   case CHANGE_TIME_NAP_END:
    //   return {
    //     ...state,
    //     naps:[
    //       {
    //       end_nap: action.value,
    //     }]
    //   }
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
