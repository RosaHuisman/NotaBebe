import {
  LOGIN,
  saveUser,
  createLoginErrorAction,
  LOGOUT,
} from 'src/store/actions/authActions';

// import {
//   LOGIN, saveUser, CHECK_TOKEN, createLoginErrorAction,
// } from 'src/store/actions';

import jwtDecode from 'jwt-decode';

import axios from 'axios';

import api from './utils/api';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();

      api({
        method: 'POST',
        url: '/login',
        data: {
          email: state.user.email,
          password: state.user.password,
          // email: state.auth.email,
          // password: state.auth.password,
        },
      })
        .then((response) => {
          // ici on vient stocker le token dans localStorage
          localStorage.setItem('MyToken', response.data.token);
          // const userData = response.data.token;

          const myToken = response.data.token;
          const myTokenDecoded = jwtDecode(myToken);
          console.log('Voici mon token décodé', myTokenDecoded);

          // on en profite pour venir le stoker aussi dans l'instance d'axios
          // comme ça on l'aura à chaque requête !!
          api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;

          // ici on veut stocker dans le state les infos du user
          // donc on va faire un dispatch d'action
          // on passe par la fonction dispatch du store
          store.dispatch(saveUser(myTokenDecoded));
          console.log('DATA JWT', response.data);
        })
        .catch((error) => {
          store.dispatch(createLoginErrorAction());
          console.log('MON ERREUR createLoginErrorAction');
        });
      break;
    }
    default:
      next(action);
  }
};

export default authMiddleware;
