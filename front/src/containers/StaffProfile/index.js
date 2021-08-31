import { connect } from 'react-redux';
import StaffProfile from 'src/components/StaffProfile';
import { fetchUsersStaff } from 'src/store/actions';

import { findUser } from 'src/store/selectors/user';


const mapStateToProps = (state, ownProps) => ({
  staff: findUser(state.user.list, ownProps.match.params.id),
  loading: state.user.loading,
});

const mapDispatchToProps = (dispatch) => ({
  
  loadUsersStaff: () => {
    dispatch(fetchUsersStaff());
  },


});

export default connect(mapStateToProps, mapDispatchToProps)(StaffProfile);
