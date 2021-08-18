import { connect } from 'react-redux';
import ParentProfile from 'src/components/ParentProfile';
import { changeInfos, changeValue, toggleChangePassword, closeChangeInfos } from 'src/store/actions';


const mapStateToProps = (state) => ({
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  address: state.user.address,
  cp: state.user.cp,
  city: state.user.city,
  phone_number: state.user.phone_number,
  email: state.user.email,
  change_infos: state.user.change_infos,
  change_password: state.user.change_password, 

});

const mapDispatchToProps = (dispatch) => ({
  changeUserInfos: () => {
  dispatch(changeInfos());
}, 
//   onChange: (value, key) => {
//   dispatch(changeValue(value, key));
// },
changeField: (value, key) => {
  dispatch(changeValue(value, key));
}, 

togglerChangePassword: () => {
  dispatch(toggleChangePassword())
},

closeChangeInfos: () => {
  dispatch(closeChangeInfos())
}
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ParentProfile);
