

import {
  SAVE_COMMENTS,
  OPEN_MODAL,
  SAVE_COMMENT,
  CHANGE_TEXT_VALUE,
  COMMENT_UPDATED,
  OPEN_FORM_DELETE_COMMENT,
  COMMENT_DELETED,

} from 'src/store/actions/comment'

const initialState = {
  isOpen: false,
  loading: true,
  list: [],
  modalOpen: false,
  comment:'',
  commentId: null,
  formDeleteOpen: false,
  commentSend: false,  
};

const reducer = (state = initialState, action ={} ) => {
  switch (action.type) {
      case SAVE_COMMENTS: {
        //console.log('je suis dans le cas SAVE_COMMENTS')
        //console.log('action payload dans le reducer comment',action.payload)
       return {
         ...state,
         list: action.payload,
         loading: false,
       };
     }
     case OPEN_MODAL: {
      console.log('je suis dans le cas OPEN MODAL')
      console.log(action.commentId)
       return {
         ...state,
         modalOpen: !state.modalOpen,
         //[action.commentId]: !state.modalOpen, 
         commentId: action.commentId,
       }
     }
     case SAVE_COMMENT: {
      return {
        ...state,
        commentSend: !state.commentSend,
        //commentId: action.payload.data.id,
        comment:'',
      };
    }
    case CHANGE_TEXT_VALUE: {
      return {
        ...state,
        comment: action.value,
      };
    }
    case COMMENT_UPDATED: {
      return {
        ...state,
        modalOpen: false,
      };
    }
    case OPEN_FORM_DELETE_COMMENT: {
      console.log(action.commentId)
      return {
        ...state,
        formDeleteOpen: !state.formDeleteOpen, 
        commentId: action.commentId
      }
    }
    case COMMENT_DELETED: {
      return {
        ...state,
        formDeleteOpen: false,
      };
    }
    default:
      return state;
  }
  
};

export default reducer;
