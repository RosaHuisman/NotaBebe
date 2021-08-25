import {
  FETCH_USER_LOGGED,
  saveUserLogged,
} from 'src/store/actions/userload';
import { FETCH_USER_DATA, saveUserData } from 'src/store/actions/userlogin';
import api from './utils/api';

const userLogged = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER_LOGGED: {
      const fetchUserLogged = async () => {
        try {
          const response = await api.post('/login');
          // à partir de là on a notre réponse et on va pouvoir stocker les données
          // sinon on aura une erreur et on passera dans le "catch"
          // on va donc créer une action qui sera traiter dans le reducer
          // pour modifier la valeur de recipes.list
          store.dispatch(saveUserLogged(response.data));
        }
        catch (error) {
          console.log(error);
        }
      };
      fetchUserLogged();
      break;
    }
    case FETCH_USER_DATA: {
      // plus la peine d'intégrer le token, il l'est déjà depuis le login ou le checkToken

      // en même temps que la requête je dois fournir le token
      // qui est stocké dans le state
      // const state = store.getState();
      // state.user.token
      // const { user: { token } } = store.getState();
      // const { token } = store.getState().user;

      // on va passer le token dans un header Authorization
      // avec la requête GET
      // attention à bien mettre "Bearer" avant le token, séparé d'un espace
      api.get('/favorites', {
        // headers: {
        //   authorization: `Bearer ${token}`,
        // },
      })
        .then((response) => {
          store.dispatch(saveUserData(response.data));
        })
        .catch((error) => console.log(error));
      break;
    }
    default:
      next(action);
  }
};

export default userLogged;
