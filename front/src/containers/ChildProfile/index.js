import { connect } from 'react-redux';
import ChildProfile from 'src/components/ChildProfile';
import {
  openChangeInfos, changeChildInfos, closeFormAction, fetchUsersParents} from 'src/store/actions';
import { fetchRecaps } from 'src/store/actions/recap'
import { changeTextValue, fetchComments, openModal, postComment, updateComment, openFormDeleteComment, deleteComment } from 'src/store/actions/comment'
// import { findChild } from 'src/store/selectors/children';
// import { findUser } from 'src/store/selectors/user';
import { findRecap } from 'src/store/selectors/recap';
import { findComments } from 'src/store/selectors/comment';



const mapStateToProps = (state, ownProps) => ({
  //user: findUser(state.user.list, ownProps.match.params.id),
  isOpenInfos: state.user.isOpenInfos,
  commentSend: state.user.commentSend,
  loading: state.recap.loading,
  recap: findRecap(state.recap.list, ownProps.match.params.id),
  comments: findComments(state.comment.list, ownProps.match.params.id),
  modalOpen: state.comment.modalOpen,
  commentId: state.comment.commentId,
  formDeleteOpen: state.comment.formDeleteOpen,

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openUserInfos: () => {
    dispatch(openChangeInfos());
  },

  handleChangeInfos: (parentId, childId) => {
    dispatch(changeChildInfos(parentId, childId));
  },

  closeForm: () => {
    dispatch(closeFormAction());
  },

  submitComment: (parentId, childId, commentId) => {
    dispatch(postComment(parentId, childId));
  },

  onChangeTextValue: (value) => {
    dispatch(changeTextValue(value));
  },

  loadRecaps: () => {
    //console.log('loadrecaps container childprofile')
    dispatch(fetchRecaps());
  },
  loadComments: () => {
    //console.log('loadcomments container childprofile')
    dispatch(fetchComments());
  },

  onClickOpenModalToFormChangeComment: (commentId) => {
    //console.log(commentId)
    dispatch(openModal(commentId));
  },

  onClickCancelFormChangeComment: () => {
    dispatch(openModal());
  },

  patchComment: (parentId, childId, commentId) => {
    dispatch(updateComment(parentId, childId, commentId));
  },

  onClickOpenFormDeleteComment: (commentId) => {
    dispatch(openFormDeleteComment(commentId))
  },

  deleteComment: (parentId, childId, commentId) => {
    dispatch(deleteComment(parentId, childId, commentId));
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(ChildProfile);