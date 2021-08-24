import { connect } from 'react-redux';
import { fetchUsersParents } from 'src/store/actions';
import { fetchUserLogged } from 'src/store/actions/userload';
import { checkToken } from 'src/store/actions/userlogin';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  // loading: state.userload.loading,
  loading: state.userload,
  logged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  checkIsLogged: () => {
    dispatch(checkToken());
  },
  loadUserLogged: () => {
    dispatch(fetchUserLogged());
  },
  loadUsersParents: () => {
    dispatch(fetchUsersParents());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
