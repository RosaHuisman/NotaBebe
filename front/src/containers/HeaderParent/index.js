import { connect } from 'react-redux';
import HeaderParent from 'src/components/ParentProfile/HeaderParent';
import { logout } from 'src/store/actions/authActions';

import { findUser } from 'src/store/selectors/user';

// transforme le state en props
const mapStateToProps = (state) => ({
  // loggedMessage: `Bonjour ${state.pseudo}`,
  successMessage: state.auth.successMessage,
  // userId: state.user.user_id,
  logged: state.user.logged,
  userId: findUser(state.user.list),

});

// transforme la fonction dispatch en props
const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderParent);
