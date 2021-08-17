import { connect } from 'react-redux';
import Login from 'src/components/Login';
// import { isUserLogged } from 'src/store/selectors';
// import {
//   createSubmitLoginAction,
//   // createSetSettingsFieldValueAction,
// } from 'src/store/actions';

const mapStateToProps = (state) => ({
  email: state.userlogin.email,
  password: state.userlogin.password,
  // isLogged: isUserLogged(state),
  isError: state.userlogin.isError,
});

const mapDispatchToProps = (dispatch) => ({
  onEmailChange: (e) => {
    dispatch({
      type: 'SET_SETTINGS_FIELD_VALUE',
      newValue: e.target.value,
      fieldKey: 'email',
    });
  },
  onPasswordChange: (e) => {
    dispatch({
      type: 'SET_SETTINGS_FIELD_VALUE',
      newValue: e.target.value,
      fieldKey: 'password',
    });
  },
  changeField: (newValue, name) => {
    dispatch({
      type: 'SET_INPUT_VALUE',
      name: name,
      value: newValue,
    });
  },
  // onSettingsSubmit: (e) => {
  //   e.preventDefault();
  //   dispatch({
  //     type: 'SUBMIT_LOGIN',
  //   });
  // },
  handleLogin: () => {
    dispatch({
      type: 'SUBMIT_LOGIN',
    });
  },
  handleLogout: () => {
    dispatch({ type: 'LOGOUT' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
