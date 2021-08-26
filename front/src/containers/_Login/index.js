import { connect } from 'react-redux';
import Login from 'src/components/Login';
import { changeValueLogin, login } from 'src/store/actions/authActions';

// transforme le state en props
const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  isError: state.auth.isError,
});

// transforme la fonction dispatch en props
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, key) => {
    dispatch(changeValueLogin(value, key));
  },
  handleLogin: () => {
    dispatch(login());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
