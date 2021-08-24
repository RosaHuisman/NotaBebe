import { connect } from 'react-redux';
import { isUserLogged } from 'src/store/selectors/loggedPseudo';
import { fetchUsersParents } from 'src/store/actions';

import { findUser } from 'src/store/selectors/user';


import App from 'src/components/App';

const mapStateToProps = (state, ownProps) => ({
  // isLogged: isUserLogged(state),
  logged: isUserLogged(state),
  children: state.user.children,
  //user: findUser(state.user.list, ownProps.match.params.id),
  //user: state.user,
  loading: state.user.loading,
});

const mapDispatchToProps = (dispatch) => ({
  loadUsersParents: () => {
    dispatch(fetchUsersParents());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
