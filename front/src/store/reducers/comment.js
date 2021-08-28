

import {
  SAVE_COMMENTS,
} from 'src/store/actions/comment'

const initialState = {
  isOpen: false,
  loading: true,
  list: [],
};

const reducer = (state = initialState, action ={} ) => {
  switch (action.type) {
      case SAVE_COMMENTS: {
        console.log('je suis dans le cas SAVE_COMMENTS')
        console.log('action payload dans le reducer comment',action.payload)
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
