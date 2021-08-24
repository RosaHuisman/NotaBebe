import { connect } from 'react-redux';
import Header from 'src/components/Header';

import { isUserLogged } from 'src/store/selectors/loggedPseudo';

const mapStateToProps = (state) => ({
  logged: isUserLogged(state),
  loggedMessage: `Bonjour ${state.userlogin.pseudo}`,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch({ type: 'LOGOUT' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
