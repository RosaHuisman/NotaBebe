import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { logout } from 'src/store/actions/authActions';

import { isUserLogged } from 'src/store/selectors/loggedPseudo';

// transforme le state en props
const mapStateToProps = (state) => ({
  logged: isUserLogged(state),
  // loggedMessage: `Bonjour ${state.pseudo}`,
  successMessage: state.auth.successMessage,
  user: state.user,
});

// transforme la fonction dispatch en props
const mapDispatchToProps = (dispatch) => ({
  // handleLogout: () => {
  //   dispatch({ type: 'LOGOUT' });
  // },
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
