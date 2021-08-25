import { connect } from 'react-redux';
import ChildProfile from 'src/components/ChildProfile';
import {
  openChangeInfos, changeInfos, closeFormAction, sendComment, changeTextValue,
} from 'src/store/actions';
import { findChild } from 'src/store/selectors/children';
import { findUser } from 'src/store/selectors/user';

const mapStateToProps = (state, ownProps) => ({
  user: findUser(state.user.list, ownProps.match.params.id),
  isOpenInfos: state.user.isOpenInfos,
  commentSend: state.user.commentSend,

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openUserInfos: () => {
    dispatch(openChangeInfos());
  },

  handleChangeInfos: () => {
    dispatch(changeInfos());
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

});

export default connect(mapStateToProps, mapDispatchToProps)(ChildProfile);
