import { connect } from 'react-redux';
import Home from 'src/components/Home';
import { changeFieldValueLogin, login } from 'src/store/actions/authActions';

// transforme le state en props
const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  errorMessage: state.auth.errorMessage,
  contentHome: state.auth.contentHome,
  successMessage: state.auth.successMessage,
});

// transforme la fonction dispatch en props
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, key) => {
    dispatch(changeFieldValueLogin(value, key));
  },
  handleLogin: () => {
    dispatch(login());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
