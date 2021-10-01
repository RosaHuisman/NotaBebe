import { connect } from 'react-redux';
import StaffProfile from 'src/components/StaffProfile';

import { changePassword, clearPasswordMessage } from 'src/store/actions/staff'



const mapStateToProps = (state, ownProps) => ({
  staff: state.auth.staff,
  loading: state.user.loading,
  hasPasswordError: state.staff.changePasswordError,
  changePasswordConfirmMessage: state.staff.changePasswordConfirmMessage,

});

const mapDispatchToProps = (dispatch) => ({

  handleChangePassword: (id) => {
    dispatch(changePassword(id));
  },

  clearChangePasswordConfirmMessage: () => {
    dispatch(clearPasswordMessage());
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(StaffProfile);
