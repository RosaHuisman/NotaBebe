import axios from 'axios';

const adminRouteMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'GET_HOMEPAGE': {
      // je récupère l'état afin de pouvoir en extraire le token
      const state = store.getState();

      const options = {
        method: 'GET',
        url: 'http://localhost:3001/homepage',
        headers: {
          // on donne le token dans le header Authorization
          // attention a l'espace après Bearer
          Authorization: `Bearer ${state.user.token}`,
        },
      };

      axios(options).then((response) => {
        console.log(response.data);
        // on  vient de récupérer nos favoris
        // stockons les dans le state
        store.dispatch({ type: 'GET_HOMEPAGE_SUCCESS' });
      }).catch((error) => {
        console.error(error);
      });
      break;
    }
    default:
      next(action);
  }
};

export default adminRouteMiddleware;
