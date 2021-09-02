import { connect } from 'react-redux';
import { homeInitial, checkToken } from 'src/store/actions/authActions';
import { fetchUsersParents } from 'src/store/actions';

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
import { findUser } from 'src/store/selectors/user';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  user: state.auth,

  // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
  children: state.user.children,
  //user: findUser(state.user.list, ownProps.match.params.id),
  //user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  welcomePage: () => {
    dispatch(homeInitial());
  },
  checkIsLogged: () => {
    dispatch(checkToken());
  },
  // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
  // loadUsersParents: () => {
  //   dispatch(fetchUsersParents());
  // },

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
