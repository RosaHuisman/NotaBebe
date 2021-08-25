import { connect } from 'react-redux';
import Home from 'src/components/Home';
import { changeValueLogin, login } from 'src/store/actions';

// transforme le state en props
const mapStateToProps = (state) => ({
  email: state.userlogin.email,
  password: state.userlogin.password,
  // isError: state.userlogin.isError,
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
