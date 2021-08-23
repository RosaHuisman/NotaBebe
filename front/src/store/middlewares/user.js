import {
  CHANGE_INFOS,
  CHANGE_PASSWORD,
  saveInfosUser,
  savePasswordUser,
  changeInfosError,
  changePasswordError,
  saveUsersParents,
  FETCH_USERS_PARENTS,
} from 'src/store/actions';
import axios from 'axios';

import api from './utils/api';

const user = (store) => (next) => (action) => {
  // une fois qu'on aura les infos, on va les stocker dans le state => dispatcher une action
  switch (action.type) {
    case FETCH_USERS_PARENTS: {
      // console.log('je suis dans le cas FETCH USERS PARENTS')
      // const fetchData = async () => {
      //   try {
      //     const response = await api.get('/profile/admin/parents');
      //     console.log('reponse du fetch : ', response.data);
      //     const actionsaveUsersParents = saveUsersParents(response.data);
      //     store.dispatch(actionsaveUsersParents);
      //   }
      //   catch (error) {
      //     console.log('il y a eu une erreur', error);
      //   }
      // };

      // fetchData();
      // break;
      const state = store.getState();

      const options = {
        method: 'GET',
        url: 'http://notabebe-back.herokuapp.com/profile/admin/parents',
        headers: {
          // on donne le token dans le header Authorization
          // attention a l'espace après Bearer
          Authorization: `Bearer ${state.user.token}`,
        },
      };

      axios(options).then((response) => {
        console.log(response.data);
        const actionsaveUsersParents = saveUsersParents(response.data);
        store.dispatch(actionsaveUsersParents);
      })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    }
    case CHANGE_INFOS: {
      // console.log('je suis dans le cas CHANGE_INFOS')
      const state = store.getState();

      axios.patch('http://localhost:3001/profile/parent/:id', {
        address: state.user.address,
        postcode: state.user.postcode,
        city: state.user.city,
        phone_number: state.user.phone_number,
      })
        .then((response) => {
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
      console.log('je suis dans le cas CHANGE_PASSWORD');
      const state = store.getState();

      axios.patch('http://localhost:3001/profile/parent/:id', {
        password: state.user.password,
      })
        .then((response) => {
          // console.log('la response du serveur', response.data)
          const actionSaveInfosUser = savePasswordUser(response.data);
          store.dispatch(actionSaveInfosUser);
        })
        .catch((error) => {
          console.log('une erreur s\'est produite');
          // store.dispatch(changePasswordError());
        });
      break;
    }
    default:
      next(action);
  }
};

export default user;
