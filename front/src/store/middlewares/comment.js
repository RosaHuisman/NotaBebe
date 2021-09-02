import { 
  FETCH_COMMENTS, 
  saveComments,
  POST_COMMENT,
  saveComment,
  UPDATE_COMMENT,
  commentUpdated,
  DELETE_COMMENT, 
  commentDeleted,
} from 'src/store/actions/comment';

import axios from 'axios';
import api from './utils/api';

const comment = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_COMMENTS: {
      //console.log('je suis dans le cas FETCH COMMENTS')
      const fetchData = async () => {
        try {
          const response = await api.get('profile/staff/comments');
          //console.log('reponse du fetch : ', response.data)
          const actionsaveComments = saveComments(response.data);
          store.dispatch(actionsaveComments);
        }
        catch (error) {
          console.log('il y a eu une erreur', error);
        }
      };

      fetchData();
      break;
    }
    case POST_COMMENT: {
      console.log('je suis dans le cas  POST_COMMENT')
      const state = store.getState();
      const parentId = action.parentId;
      const childId = action.childId;

     axios.post(`http://notabebe-back.herokuapp.com/profile/parent/${parentId}/child/${childId}/comments`, {
       message: state.comment.comment,
       child_id: action.childId,
     })
       .then((response) => {
         console.log(response.data)
         const actionsaveComment = saveComment(response.data);

         store.dispatch(actionsaveComment);
       })
       .catch((error) => {
         console.log('il y a eu une erreur dans le post comment', error);
         // store.dispatch(postCommentError());
       });
     break;
   }
   case UPDATE_COMMENT: {
    console.log('je suis dans le cas UPDATE_COMMENT')
    const state = store.getState();
    const parentId = action.parentId;
    const childId = action.childId;
    const commentId = action.commentId;
    console.log(childId)

   axios.patch(`http://notabebe-back.herokuapp.com/profile/parent/${parentId}/child/${childId}/comments/${commentId}`, {
     message: state.comment.comment,
     commentId: action.commentId,
     child_id: action.childId,
   })
     .then((response) => {
       console.log(response.data)
       const actionupdateComment = commentUpdated(response.data);
       store.dispatch(actionupdateComment);
     })
     .catch((error) => {
       console.log('il y a eu une erreur dans l\'update du commentaire', error);
       // store.dispatch(postCommentError());
     });
   break;
 }
 case DELETE_COMMENT: {
  console.log('je suis dans le cas DELETE_COMMENT')
  const state = store.getState();
  const parentId = action.parentId;
  const childId = action.childId;
  const commentId = action.commentId;
  console.log(commentId)

 axios.delete(`http://notabebe-back.herokuapp.com/profile/parent/${parentId}/child/${childId}/comments/${commentId}`, {
   commentId: action.commentId,
   child_id: action.childId,
 })
   .then((response) => {
     console.log(response.data)
     const actiondeleteComment = commentDeleted(response.data);
     store.dispatch(actiondeleteComment);
   })
   .catch((error) => {
     console.log('il y a eu une erreur dans la suppression du commentaire', error);
     // store.dispatch(postCommentError());
   });
 break;
}

    default:
      next(action);
};
}

export default comment;
