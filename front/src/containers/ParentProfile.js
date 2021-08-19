import { connect } from 'react-redux';
import ParentProfile from 'src/components/ParentProfile';
import { openChangeInfos, changeValue, changeInfos, toggleChangePassword, closeFormAction, changePassword, changeFieldValue } from 'src/store/actions';


const mapStateToProps = (state, ownProps) => ({
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  address: state.user.address,
  postcode: state.user.postcode,
  city: state.user.city,
  phone_number: state.user.phone_number,
  email: state.user.email,
  isOpenInfos: state.user.isOpenInfos,
  isOpenPassword: state.user.isOpenPassword,
  oldpassword: state.user.oldpassword,
  newpassword: state.user.newpassword,
  confirmpassword: state.user.confirmpassword,
  value: state[ownProps.name],
  hasInfosError: state.changeInfosError,
  hasPasswordError: state.changePasswordError,


});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openUserInfos: () => {
  dispatch(openChangeInfos());
}, 

changeField: (value, key) => {
  dispatch(changeValue(value, key));
}, 

handleChangeInfos: () => {
  dispatch(changeInfos());
},

togglerChangePassword: () => {
  dispatch(toggleChangePassword())
},

closeForm: () => {
  dispatch(closeFormAction())
},

handleChangePassword: () => {
  dispatch(changePassword())
},

  
});

export default connect(mapStateToProps, mapDispatchToProps)(ParentProfile);
