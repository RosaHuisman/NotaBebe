import {
  SAVE_COMMENTS,
  OPEN_MODAL,
  SAVE_COMMENT,
  CHANGE_TEXT_VALUE,
  COMMENT_UPDATED,
  OPEN_FORM_DELETE_COMMENT,
  COMMENT_DELETED,
  FILTER_COMMENTS
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
  inputValue:'',
  commentSend: false,
};

const reducer = (state = initialState, action ={} ) => {
  switch (action.type) {
      case SAVE_COMMENTS: {
       return {
         ...state,
         list: action.payload,
         loading: false,
       };
     }
     case OPEN_MODAL: {
       return {
         ...state,
         modalOpen: !state.modalOpen,
         //[action.FILTER_COMMENTScommentId]: !state.modalOpen, 
         commentId: action.commentId,
       }
     }
     case SAVE_COMMENT: {
      return {
        ...state,
        commentSend: !state.commentSend,
        //commentId:FILTER_COMMENTS action.payload.data.id,
        comment:'',
        commentSend: true, 
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
    case FILTER_COMMENTS: {
      return {
        ...state,
        inputValue: action.filterInputValue
      }
    }
    default:
      return state;
  }
  
};

export default reducer;
