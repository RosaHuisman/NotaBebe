import { connect } from 'react-redux';
import HeaderStaff from 'src/components/StaffProfile/HeaderStaff';
import { logout } from 'src/store/actions/authActions';

import { findUser } from 'src/store/selectors/user';

// transforme le state en props
const mapStateToProps = (state, ownProps) => ({
  // loggedMessage: `Bonjour ${state.pseudo}`,
  successMessage: state.auth.successMessage,
  // userId: state.user.user_id,
  logged: state.user.logged,
  userId: findUser(state.user.list),
  staff: findUser(state.user.list),
  loading: state.user.loading,

});

// transforme la fonction dispatch en props
const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderStaff);
