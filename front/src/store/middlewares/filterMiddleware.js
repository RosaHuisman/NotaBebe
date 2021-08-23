import axios from 'axios';

import data from 'src/data/recap';

import {
  FILTER_RECAP
} from 'src/store/actions';

const filterMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_RECAP:
      // je recois une action GET_RECIPES....
      // je vais donc déclencher une requête HTTP sur l'endpoint /recipes
      axios.get('http://notabebe-back.herokuapp.com/profile/staff/allrecaps')
        .then((response) => {
          store.dispatch(createGetRecapSuccessAction(response.data));
          console.log('BLABLA', response.data);
        });
      // on nexte l'action pour qu'elle arrive dans le reducer
      // dans le reducer, on réagira a GET_RECIPES
      // pour mettre isLoading a true
      next(action);
      break;
    default:
      next(action);
  }
};

export default filterMiddleware;
