import { connect } from 'react-redux';
import Home from 'src/components/Home';
import { changeFieldValueLogin, login, checkToken } from 'src/store/actions/authActions';

// transforme le state en props
const mapStateToProps = (state) => ({
  errorMessage: state.user.errorMessage,
  contentHome: state.user.contentHome,
  successMessage: state.user.successMessage,
  user: state.user,
  token: state.user.token,
});

const mapDispatchToProps = (dispatch) => ({
 
  handleLogin: () => {
    dispatch(login());
  },
  checkIsLogged: () => {
    dispatch(checkToken());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
