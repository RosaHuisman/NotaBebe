import { connect } from 'react-redux';
import HeaderAdmin from 'src/components/Admin/HeaderAdmin';
import { logout } from 'src/store/actions/authActions';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  successMessage: state.user.successMessage,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
 
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAdmin);
