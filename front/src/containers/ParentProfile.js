import { connect } from 'react-redux';
import ParentProfile from 'src/components/ParentProfile';
import { openChangeInfos, changeValue, changeInfos, toggleChangePassword, closeChangeInfos, changePassword } from 'src/store/actions';


const mapStateToProps = (state) => ({
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  address: state.user.address,
  postcode: state.user.postcode,
  city: state.user.city,
  phone_number: state.user.phone_number,
  email: state.user.email,
  isOpen: state.user.isOpen,

});

const mapDispatchToProps = (dispatch) => ({
  changeUserInfos: () => {
  dispatch(openChangeInfos());
}, 
//   onChange: (value, key) => {
//   dispatch(changeValue(value, key));
// },
changeField: (value, key) => {
  dispatch(changeValue(value, key));
}, 

handleChangeInfos: () => {
  dispatch(changeInfos());
},

togglerChangePassword: () => {
  dispatch(toggleChangePassword())
},

closeChangeInfos: () => {
  dispatch(closeChangeInfos())
},

handleChangePassword: () => {
  dispatch(changePassword())
}
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ParentProfile);
