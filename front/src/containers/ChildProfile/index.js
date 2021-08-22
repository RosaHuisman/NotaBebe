import { connect } from 'react-redux';
import ChildProfile from 'src/components/ChildProfile';
import { openChangeInfos, changeInfos, closeFormAction, sendComment, changeTextValue } from 'src/store/actions';
import { findChild } from 'src/store/selectors/children';


const mapStateToProps = (state, ownProps) => ({
  
  //child: findChild(state.children.list, ownProps.match.params.id),  
  user: state.user,
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
  dispatch(closeFormAction())
},

submitComment: () => {
  dispatch(sendComment())
},

onChangeTextValue: (value) => {
  dispatch(changeTextValue(value));
},

  
});

export default connect(mapStateToProps, mapDispatchToProps)(ChildProfile);
