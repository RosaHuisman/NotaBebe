import { connect } from 'react-redux';
import Login from 'src/components/Login';
import { changeValueLogin, login, logout } from 'src/store/actions/userlogin';

// transforme le state en props
const mapStateToProps = (state) => ({
  // email: state.userlogin.email,
  // password: state.userlogin.password,
  // isError: state.userlogin.isError,
  email: state.userlogin.email,
  password: state.userlogin.password,
  isError: state.userlogin.isError,
  logged: state.userlogin.logged,
  loggedMessage: `Bonjour ${state.pseudo}`,
});

// transforme la fonction dispatch en props
// const mapDispatchToProps = (dispatch) => ({
//   onEmailChange: (value) => {
//     dispatch({
//       type: 'SET_SETTINGS_FIELD_VALUE',
//       newValue: value,
//       fieldKey: 'email',
//     });
//   },
//   onPasswordChange: (value) => {
//     dispatch({
//       type: 'SET_SETTINGS_FIELD_VALUE',
//       newValue: value,
//       fieldKey: 'password',
//     });
//   },
//   // changeField: (value, key) => {
//   //   dispatch(changeValueLogin(value, key));
//   // },
//   handleLogin: () => {
//     dispatch({
//       type: 'SUBMIT_LOGIN',
//     });
//   },
// });

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, key) => {
    dispatch(changeValueLogin(value, key));
  },
  handleLogin: () => {
    dispatch(login());
  },
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
