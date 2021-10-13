import { connect } from 'react-redux';
import { homeInitial, checkToken } from 'src/store/actions/authActions';
import App from 'src/components/App';

const mapStateToProps = (state, ownProps) => ({
  loading: state.user.loading,
  user: state.user,

  children: state.children.list,
 
});

const mapDispatchToProps = (dispatch) => ({
  welcomePage: () => {
    dispatch(homeInitial());
  },
  checkIsLogged: () => {
    dispatch(checkToken());
  },
 

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
