import { connect } from 'react-redux';
import Admin from 'src/components/Admin';

import {
  getAllUsersAction,
  openModalDeleteUser,
  closeModalDeleteUser,
  deleteUser,
  AdminAddUser,
} from 'src/store/actions';

const mapStateToProps = (state) => ({
  // loading: state.admin.loading,
  // userAPI: state.admin.userList,
  // userAPI: state.admin.userList,
  // searchValue: state.auth.searchValue,
  // successMessage: state.auth.successMessage,
  // user: state.auth,

  loading: state.admin.loading,
  isSearchActive: state.admin.isSearchActive,
  foundUsers: state.admin.foundUsers,
  dataUserList: state.admin.dataUserList,
  // userAPI: state.admin.dataUserList,

  users: state.admin.users,
  error: state.admin.error,
  FormDeleteOpen: state.admin.FormDeleteOpen,
  userDeleteId: state.admin.userDeleteId,
  // deletedUserError: state.admin.deletedUserError,
});

const mapDispatchToProps = (dispatch) => ({

  getAllUsers: () => {
    dispatch(getAllUsersAction());
  },

  onClickOpenFormDeleteUser: (userDeleteId) => {
    console.log('OPEN après', userDeleteId);
    dispatch(openModalDeleteUser(userDeleteId));
  },

  onClickCloseFormDeleteUser: (userDeleteId) => {
    console.log('CLOSE après', userDeleteId);
    dispatch(closeModalDeleteUser(userDeleteId));
  },

  deleteUser: (userDeleteId) => {
    console.log('BLABLAAAAA après', userDeleteId);
    dispatch(deleteUser(userDeleteId));
  },
  
  handleAddUser: () => {
    dispatch(AdminAddUser());
  },
  // onApiChange: () => {
  //   dispatch(logout());
  // },
  // loadMoreUsers: () => {
  //   dispatch(logout());
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
