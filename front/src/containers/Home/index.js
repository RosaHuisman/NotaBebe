import { connect } from 'react-redux';
import Home from 'src/components/Home';
import { changeFieldValue, login } from 'src/store/actions';

// transforme le state en props
const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  // isError: state.user.isError,
});

// transforme la fonction dispatch en props
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, key) => {
    dispatch(changeFieldValue(value, key));
  },
  handleLogin: () => {
    dispatch(login());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
