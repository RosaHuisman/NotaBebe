import { connect } from 'react-redux';
import ParentProfile from 'src/components/ParentProfile';
import {
  openChangeInfos,
  changeInfos,
  toggleChangePassword,
  closeFormAction,
  changePassword,
  saveParent,
  fetchUsersParents,
  fetchParentById
} from 'src/store/actions';

import { checkToken } from 'src/store/actions/authActions';



import { findUser, findChildrenOfParent } from 'src/store/selectors/user';

const mapStateToProps = (state, ownProps) => ({
  oldpassword: state.user.oldpassword,
  isOpenInfos: state.user.isOpenInfos,
  isOpenPassword: state.user.isOpenPassword,
  newpassword: state.user.newpassword,
  confirmpassword: state.user.confirmpassword,
  value: state[ownProps.name],
  changeInfos: state.user.changeInfos,
  hasInfosError: state.user.changeInfosError,
  hasPasswordError: state.user.changePasswordError,
  //user: findUser(state.user.list, ownProps.match.params.parent_id),
  children: findChildrenOfParent(state.user.list, ownProps.match.params.parent_id),
  loading: state.auth.loading,
  // on récupère l'id du parent qui s'est connecté, il s'est enregistré dans le state grace au token
  parentId: state.auth.userId,
  // une fois le parent enregistré dans le state, on fait passer ses données au composant: (les données du parent sont sous la forme d'un tableau d'objets, un objet par enfant du parent, dans ces objets on retrouve les infos du parent à chaque fois, redondant mais c'est ce qu'on recoit du back)
  parent: state.auth.parent
});


const mapDispatchToProps = (dispatch) => ({

  loadUsersParents: () => {
    dispatch(fetchUsersParents());
  },

  openUserInfos: () => {
    dispatch(openChangeInfos());
  },

  handleChangeInfos: (id) => {
    dispatch(changeInfos(id));
  },

  togglerChangePassword: () => {
    dispatch(toggleChangePassword());
  },

  closeForm: () => {
    dispatch(closeFormAction());
  },

  handleChangePassword: (id) => {
    dispatch(changePassword(id));
  },

  // fonction pour récupérer les données d'un parent selon son ID de la BDD
  /* loadParent: (id) => {
    dispatch(fetchParentById(id))
  } */

  checkIsLogged: () => {
    dispatch(checkToken());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(ParentProfile);
