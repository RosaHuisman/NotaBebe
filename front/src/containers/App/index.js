import { connect } from 'react-redux';
import { fetchUsersParents } from 'src/store/actions';
// import { fetchUserLogged } from 'src/store/actions';
import { checkToken } from 'src/store/actions';

import { findUser } from 'src/store/selectors/user';

import App from 'src/components/App';

const mapStateToProps = (state, ownProps) => ({
  children: state.user.children,
  //user: findUser(state.user.list, ownProps.match.params.id),
  //user: state.user,

  loading: state.user.loading,
  // loading: state.userload.loading,
  // loading: state.userload,
  logged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  checkIsLogged: () => {
    dispatch(checkToken());
  },
  // loadUserLogged: () => {
  //   dispatch(fetchUserLogged());
  // },
  loadUsersParents: () => {
    dispatch(fetchUsersParents());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
