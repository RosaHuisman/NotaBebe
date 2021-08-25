import { connect } from 'react-redux';
import Login from 'src/components/Login';
import { changeValueLogin } from '../../store/actions';

// transforme le state en props
const mapStateToProps = (state, ownProps) => ({
  // email: state.userlogin.email,
  // password: state.userlogin.password,
  // isError: state.userlogin.isError,
  // email: state.user.email,
  // password: state.user.password,
  isError: state.userlogin.isError,
  value: state.ownProps.name,
});

// transforme la fonction dispatch en props
const mapDispatchToProps = (dispatch) => ({
  // onEmailChange: (value) => {
  //   dispatch({
  //     type: 'SET_SETTINGS_FIELD_VALUE',
  //     newValue: value,
  //     fieldKey: 'email',
  //   });
  // },
  // onPasswordChange: (value) => {
  //   dispatch({
  //     type: 'SET_SETTINGS_FIELD_VALUE',
  //     newValue: value,
  //     fieldKey: 'password',
  //   });
  // },
  changeFieldLogin: (value, key) => {
    dispatch(changeValueLogin(value, key));
  },
  changeField: (newValue, name) => {
    dispatch({
      type: 'SET_INPUT_VALUE',
      name: name,
      value: newValue,
    });
  },
  handleLogin: () => {
    dispatch({
      type: 'SUBMIT_LOGIN',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
