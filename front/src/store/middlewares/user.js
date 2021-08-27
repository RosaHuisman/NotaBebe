import {
  CHANGE_INFOS,
  CHANGE_PASSWORD,
  saveInfosUser,
  savePasswordUser,
  changeInfosError,
  changePasswordError,
  saveUsersParents,
  FETCH_USERS_PARENTS,
  saveNewPasswordParent,
} from 'src/store/actions';
import axios from 'axios';

import api from './utils/api';

const user = (store) => (next) => (action) => {
  // une fois qu'on aura les infos, on va les stocker dans le state => dispatcher une action
  switch (action.type) {
    case FETCH_USERS_PARENTS: {
      //console.log('je suis dans le cas FETCH USERS PARENTS')
      const fetchData = async () => {
        try {
          const response = await api.get('/profile/admin/parents');
          //console.log('reponse du fetch : ', response.data)
          const actionsaveUsersParents = saveUsersParents(response.data);
          store.dispatch(actionsaveUsersParents);
        }
        catch (error) {
          console.log('il y a eu une erreur', error);
        }
      };

      fetchData();
      break;
    }
    // case CHANGE_INFOS: {
    //   //console.log('je suis dans le cas CHANGE_INFOS')
    //   const state = store.getState();

    //   const options = {
    //     method: 'GET',
    //     url: 'http://notabebe-back.herokuapp.com/profile/admin/parents',
    //     headers: {
    //       // on donne le token dans le header Authorization
    //       // attention a l'espace après Bearer
    //       Authorization: `Bearer ${state.user.token}`,
    //     },
    //   };

    //   axios(options).then((response) => {
    //     console.log(response.data);
    //     const actionsaveUsersParents = saveUsersParents(response.data);
    //     store.dispatch(actionsaveUsersParents);
    //   })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    //   next(action);
    //   break;
    // }
    case CHANGE_INFOS: {
      console.log('je suis dans le cas CHANGE_INFOS')
      const state = store.getState();
      const id = action.id;
      console.log(id)


      axios.patch(`http://notabebe-back.herokuapp.com/profile/parent/${id}`, {
        address: state.user.address,
        postcode: state.user.postcode,
        city: state.user.city,
        phone_number: state.user.phone_number,
      })
        .then((response) => {
          console.log("reponse de la BDD update parent infos", response.data)
          const actionSaveInfosUser = saveInfosUser(response.data);
          store.dispatch(actionSaveInfosUser);
        })
        .catch((error) => {
          // console.log('une erreur s\'est produite')
          // store.dispatch(changeInfosError());
        });
      break;
    }
    case CHANGE_PASSWORD: {
       console.log('je suis dans le cas CHANGE_PASSWORD')
      const state = store.getState();
      const id = action.id;

      console.log(state.user.oldpassword)
      //console.log(state.user)

      axios.patch(`http://notabebe-back.herokuapp.com/profile/parent/${id}/password`, {
        oldPassword: state.user.oldpassword,
        id: action.id,
      })
        .then((response) => {
          console.log(response.data)
          const actionsChangePasswordParent = saveNewPasswordParent(response.data);
          store.dispatch(actionsChangePasswordParent);
        })
        .catch((error) => {
          console.log('il y a eu une erreur dans le save password parent', error);
          // store.dispatch(changeInfosError());
        });
      break;
    }
    
  
    default:
      next(action);
  }
};

export default user;
