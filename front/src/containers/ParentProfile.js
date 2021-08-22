import { connect } from 'react-redux';
import ParentProfile from 'src/components/ParentProfile';
import { openChangeInfos, changeInfos, toggleChangePassword, closeFormAction, changePassword, saveParent, fetchUsersParents } from 'src/store/actions';

import { findChildren } from 'src/store/selectors/children';

import { findUser } from 'src/store/selectors/user';

const mapStateToProps = (state, ownProps) => {

  console.log('LIST', state.user.list)

  const props = {

    firstname: state.user.firstname,
    lastname: state.user.lastname,
    address: state.user.address,
    postcode: state.user.postcode,
    city: state.user.city,
    phone_number: state.user.phone_number,
    email: state.user.email,
    isOpenInfos: state.user.isOpenInfos,
    isOpenPassword: state.user.isOpenPassword,
    oldpassword: state.user.oldpassword,
    newpassword: state.user.newpassword,
    confirmpassword: state.user.confirmpassword,
    value: state[ownProps.name],
    hasInfosError: state.user.changeInfosError,
    hasPasswordError: state.user.changePasswordError,
    user: findUser(state.user.list, ownProps.match.params.id),
    //child: findChildren(state.children.list, ownProps.id),
  }
    return props
};

const mapDispatchToProps = (dispatch) => ({

  // loadUsersParents: () => {
  //   dispatch(fetchUsersParents())
  // },

  loadUsersParents: () => {
    dispatch(fetchUsersParents())
  },




  openUserInfos: () => {
  dispatch(openChangeInfos());
}, 

handleChangeInfos: () => {
  dispatch(changeInfos());
},

togglerChangePassword: () => {
  dispatch(toggleChangePassword())
},

closeForm: () => {
  dispatch(closeFormAction())
},

handleChangePassword: () => {
  dispatch(changePassword())
},



  
});

export default connect(mapStateToProps, mapDispatchToProps)(ParentProfile);
