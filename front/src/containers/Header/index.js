import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { logout, homeInitial } from 'src/store/actions/authActions';

// transforme le state en props
const mapStateToProps = (state) => ({
  // loggedMessage: `Bonjour ${state.pseudo}`,
  roleId: state.user.roleId,
  userId: state.user.userId,
  logged: state.user.logged,
  loading: state.user.loading,
});

// transforme la fonction dispatch en props
const mapDispatchToProps = (dispatch) => ({
  // handleLogout: () => {
  //   dispatch({ type: 'LOGOUT' });
  // },
  handleLogout: () => {
    dispatch(logout());
  },
  welcomePage: () => {
    dispatch(homeInitial());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
