// import {
//   SUBMIT_LOGIN,
//   createLoginSuccessAction,
//   createLoginErrorAction,
//   CHECK_TOKEN,
// } from 'src/store/actions';

import {
  LOGIN, saveUser, CHECK_TOKEN, createLoginErrorAction,
} from 'src/store/actions';

import jwtDecode from 'jwt-decode';

import api from './utils/api';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      console.log('je suis dans le case LOGIN');

      const state = store.getState();
      // const { user: { email, password } } = store.getState();

      api({
        method: 'POST',
        url: '/login',
        data: {
          email: state.user.email,
          password: state.user.password,
        },
      })
        .then((response) => {
          // ici on vient stocker le token dans localStorage
          localStorage.setItem('MyToken', response.data.token);

          const myToken = response.data.token;
          const myTokenDecoded = jwtDecode(myToken);
          console.log('Voici mon token décodé', myTokenDecoded);

          // on en profite pour venir le stoker aussi dans l'instance d'axios
          // comme ça on l'aura à chaque requête !!
          api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;

          // ici on veut stocker dans le state les infos du user
          // donc on va faire un dispatch d'action
          // on passe par la fonction dispatch du store
          store.dispatch(saveUser(response.data));

          // store.dispatch(createLoginSuccessAction(data: response.data));
          // store.dispatch({ type: 'LOGIN_SUCCESS', data: response.data });
          console.log('DATA JWT', response.data);
        })
        .catch((error) => {
          store.dispatch(createLoginErrorAction());
          console.log('MON ERREUR createLoginErrorAction');
        });
      break;
    }
    // case CHECK_TOKEN: {
    //   // on récupère le token stocké dans le localStorage
    //   const token = localStorage.getItem('MyToken');

    //   // s'il existe on fait notre requête API pour vérifier sa validité
    //   if (token) {
    //     api.post('/checkToken', {
    //       // on oublie pas d'embarquer le token avec la requête
    //       headers: {
    //         authorization: `Bearer ${token}`,
    //       },
    //     })
    //       .then((response) => {
    //         // ici le token est bon, donc on peut le stocker dans l'insance
    //         api.defaults.headers.common.authorization = `Bearer ${token}`;

    //         // en cas de réponse on sauvegarde le user dans le state
    //         // avec la même action que pour le login
    //         const payload = { ...response.data };
    //         store.dispatch(saveUserLogin(payload));
    //       })
    //       .catch((error) => console.log(error));
    //   }
    //   break;
    // }
    default:
      next(action);
  }
};

export default authMiddleware;
