import axios from 'axios';
import {
  SUBMIT_LOGIN,
  createLoginSuccessAction,
  createLoginErrorAction,
} from 'src/store/actions';
import { LOGIN, saveUser, CHECK_TOKEN } from '../actions';
import api from './utils/api';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const state = store.getState();
      // version total destructuring
      // const { user: { email, password } } = store.getState();

      api({
        method: 'POST',
        url: '/login',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email: state.userlogin.email,
          password: state.userlogin.password,
        },
      })
        .then((response) => {
          // ici on vient stocker le token dans localStorage
          localStorage.setItem('token', response.data.token);

          // on en profite pour venir le stoker aussi dans l'instance d'axios
          // comme ça on l'aura à chaque requête !!
          api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;

          // ici on veut stocker dans le state les infos du user
          // donc on va faire un dispatch d'action
          // on passe par la fonction dispatch du store
          store.dispatch(createLoginSuccessAction(response.data));

          // store.dispatch(createLoginSuccessAction(data: response.data));
          // store.dispatch({ type: 'LOGIN_SUCCESS', data: response.data });
          console.log('DATA JWT', response.data);
        })
        .catch((error) => {
          store.dispatch(createLoginErrorAction());
        });
      break;
    }
    case CHECK_TOKEN: {
      // on récupère le token stocké dans le localStorage
      const token = localStorage.getItem('token');

      // s'il existe on fait notre requête API pour vérifier sa validité
      if (token) {
        api.get('/checkToken', {
          // on oublie pas d'embarquer le token avec la requête
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            // ici le token est bon, donc on peut le stocker dans l'insance
            api.defaults.headers.common.authorization = `Bearer ${token}`;

            // en cas de réponse on sauvegarde le user dans le state
            // avec la même action que pour le login
            const payload = { ...response.data };
            store.dispatch(createLoginSuccessAction(payload));
          })
          .catch((error) => console.log(error));
      }
      break;
    }
    default:
      next(action);
  }
};

export default authMiddleware;
