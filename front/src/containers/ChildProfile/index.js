import { connect } from 'react-redux';
import ChildProfile from 'src/components/ChildProfile';
import { openChangeInfos, changeInfos, closeFormAction } from 'src/store/actions';
import { findChild } from 'src/store/selectors/children';


const mapStateToProps = (state, ownProps) => ({
  
  //child: findChild(state.children.list, ownProps.match.params.id),  
  user: state.user,
  isOpenInfos: state.user.isOpenInfos,


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


  
});

export default connect(mapStateToProps, mapDispatchToProps)(ChildProfile);
