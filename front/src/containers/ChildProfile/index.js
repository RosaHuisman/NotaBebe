import { connect } from 'react-redux';
import ChildProfile from 'src/components/ChildProfile';
import {
  openChangeInfos, changeChildInfos, closeFormAction, sendComment, changeTextValue, fetchUsersParents
} from 'src/store/actions';
import { fetchRecaps } from 'src/store/actions/recap'
import { fetchComments } from 'src/store/actions/comment'
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

  submitComment: () => {
    dispatch(sendComment());
  },

  onChangeTextValue: (value) => {
    dispatch(changeTextValue(value));
  },

  loadRecaps: () => {
    //console.log('loadrecaps container childprofile')
    dispatch(fetchRecaps());
  },
  loadComments: () => {
    console.log('loadcomments container childprofile')
    dispatch(fetchComments());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(ChildProfile);
