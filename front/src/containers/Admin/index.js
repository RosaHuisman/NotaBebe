import { connect } from 'react-redux';
import Admin from 'src/components/Admin';
import {
  getAllUsersAction,
} from 'src/store/actions';

import { allUser } from 'src/store/selectors/admin';

const mapStateToProps = (state) => ({
  loading: state.admin.loading,
  // userAPI: state.admin.userList,
  userAPI: allUser(state.admin.userList),
  searchValue: state.auth.searchValue,
  successMessage: state.auth.successMessage,

  user: state.auth,
});

const mapDispatchToProps = (dispatch) => ({

  getAllUsers: () => {
    dispatch(getAllUsersAction());
  },

  // onApiSubmit: () => {
  //   dispatch(searchUsersList());
  // },
  // onApiChange: () => {
  //   dispatch(logout());
  // },
  // loadMoreUsers: () => {
  //   dispatch(logout());
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
