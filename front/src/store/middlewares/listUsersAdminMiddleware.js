import {
  GET_ALL_USERS,
  getAllUsersSuccessAction,
  USER_LIST_LOADING,
  getAllUsersErrorAction,
} from 'src/store/actions';

import axios from 'axios';
import api from './utils/api';

const listUsersAdminMiddleware = (store) => (next) => (action) => {
  // une fois qu'on aura les infos, on va les stocker dans le state => dispatcher une action
  switch (action.type) {
    // case GET_ALL_USERS: {
    //   console.log('je suis dans le cas GET_ALL_USERS');
    //   api({
    //     method: 'GET',
    //     url: '/profile/admin/allusers',
    //   })
    //     .then((response) => {
    //       store.dispatch(getAllUsersSuccessAction(response.data));
    //     });
    //   next(action);
    //   break;
    // }
    case USER_LIST_LOADING: {
      console.log('je suis dans le cas GET_ALL_USERS');
      // api({
      //   method: 'GET',
      //   url: '/profile/admin/allusers',
      // })
      //   .then((json) => {
      //     const myUserList = json;
      //     store.dispatch(getAllUsersSuccessAction(myUserList));
      //   })
      //   .catch((err) => {
      //     console.log('ERREUR DANS LE MIDDLEXARE ADMIN');
      //     store.dispatch(getAllUsersErrorAction(err));
      //   });

      // const fetchData = async () => {
      //   try {
      //     const response = await api.get('/profile/admin/allusers');
      //     const SOLSOL = response.json();
      //     console.log('fsefgedgidghqi', SOLSOL);

      //     store.dispatch(getAllUsersSuccessAction(SOLSOL));
      //   }
      //   catch (error) {
      //     console.log('il y a eu une erreur', error);
      //   }
      // };

      // fetchData();

      fetch('http://notabebe-back.herokuapp.com/profile/admin/allusers')
        .then((response) => response.json())
        .then((data) => console.log(data));
      break;
    }
    default:
      next(action);
  }
};

export default listUsersAdminMiddleware;
