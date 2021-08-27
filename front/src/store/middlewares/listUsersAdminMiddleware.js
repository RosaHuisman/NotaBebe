import {
  GET_ALL_USERS,
  getAllUsersSuccessAction,
} from 'src/store/actions';

import api from './utils/api';
import axios from 'axios';

const listUsersAdminMiddleware = (store) => (next) => (action) => {
  // une fois qu'on aura les infos, on va les stocker dans le state => dispatcher une action
  switch (action.type) {
    case GET_ALL_USERS: {
      console.log('je suis dans le cas GET_ALL_USERS');
      api({
        method: 'GET',
        url: '/profile/admin/allusers',
      })
        .then((response) => {
          store.dispatch(getAllUsersSuccessAction(response.data));
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default listUsersAdminMiddleware;
