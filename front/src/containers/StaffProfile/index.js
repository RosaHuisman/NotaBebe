import { connect } from 'react-redux';
import StaffProfile from 'src/components/StaffProfile';
import { fetchUsersStaff } from 'src/store/actions';

import { changePassword } from 'src/store/actions/staff'

import { findUser } from 'src/store/selectors/user';


const mapStateToProps = (state, ownProps) => ({
  staff: findUser(state.user.list, ownProps.match.params.id),
  //staff: state.auth,
  loading: state.user.loading,
  hasPasswordError: state.staff.changePasswordError,

});

const mapDispatchToProps = (dispatch) => ({
  
  loadUsersStaff: () => {
    dispatch(fetchUsersStaff());
  },

  handleChangePassword: (id) => {
    dispatch(changePassword(id));
  },


});

export default connect(mapStateToProps, mapDispatchToProps)(StaffProfile);
