import { connect } from 'react-redux';
import Login from 'src/components/Login';

const mapStateToProps = (state) => ({
  email: state.userlogin.email,
  password: state.userlogin.password,
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
  // changeField: (newValue, name) => {
  //   dispatch({
  //     type: 'SET_INPUT_VALUE',
  //     name: name,
  //     value: newValue,
  //   });
  // },
  handleLogin: () => {
    dispatch({
      type: 'SUBMIT_LOGIN',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
