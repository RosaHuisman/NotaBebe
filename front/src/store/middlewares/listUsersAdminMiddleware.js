import {
  GET_ALL_USERS,
  getAllUsersSuccessAction,
  USER_LIST_LOADING,
  getAllUsersErrorAction,
  DELETE_USER,
  deleteUserSuccess,
  deleteUserError,
  ADMIN_ADD_USER,
  adminAddUserSuccess,
  adminAddUserError,
} from 'src/store/actions';

import axios from 'axios';
import api from './utils/api';

const listUsersAdminMiddleware = (store) => (next) => (action) => {
  // une fois qu'on aura les infos, on va les stocker dans le state => dispatcher une action
  switch (action.type) {
    case USER_LIST_LOADING: {
      // api({
      //   method: 'GET',
      //   url: '/profile/admin/allusers',
      // })
      //   .then((json) => {
      //     const myUserList = json;
      //     store.dispatch(getAllUsersSuccessAction(myUserList));
      //   })
      //   .catch((err) => {
      //     store.dispatch(getAllUsersErrorAction(err));
      //   });

      // const fetchData = async () => {
      //   try {
      //     const response = await api.get('/profile/admin/allusers');
      //     const SOLSOL = response.json();

      //     store.dispatch(getAllUsersSuccessAction(SOLSOL));
      //   }
      //   catch (error) {
      //     console.log('il y a eu une erreur', error);
      //   }
      // };

      // fetchData();

      fetch('https://notabebe-back.herokuapp.com/profile/admin/allusers')
        .then((response) => response.json())
        .then((data) => console.log(data));
      break;
    }
    case DELETE_USER: {

      const LALALA = action.payload;

      api.delete(`/profile/admin/manageprofile/${LALALA}`)
        .then((response) => {
          store.dispatch(deleteUserSuccess(response.data));
        })
        .catch((error) => {
          console.log('une erreur s\'est produite');

          const errorPayload = {};
          errorPayload.message = error.response.data.message;
          errorPayload.status = error.response.status;

          store.dispatch(deleteUserError(errorPayload));
        });
      break;
    }
    case ADMIN_ADD_USER: {

      const state = store.getState();
      const LALALA = action.payload;
      console.log('fezfzieufhzeuif', {
        last_name: state.user.last_name,
        first_name: state.user.first_name,
        email: state.user.email,
        phone_number: state.user.phone_number,
        address: state.user.address,
        postcode: state.user.postcode,
        city: state.user.city,
        password: state.user.password,
        role_id: +state.user.role_id,
      });
      api({
        method: 'POST',
        url: '/profile/admin/manageprofile',
        data: {
          last_name: state.user.last_name,
          first_name: state.user.first_name,
          email: state.user.email,
          phone_number: state.user.phone_number,
          address: state.user.address,
          postcode: state.user.postcode,
          city: state.user.city,
          password: state.user.password,
          role_id: +state.user.role_id,
        },
      })
        .then((response) => {
          console.log('je suis dans adminAddUserSuccess');
          store.dispatch(adminAddUserSuccess(response.data));
        })
        .catch((error) => {
          console.log('ERREUR je suis dans adminAddUserError');

          const errorPayload = {};
          errorPayload.message = error.response.data.message;
          errorPayload.status = error.response.status;
          store.dispatch(adminAddUserError(errorPayload));
        });
      break;
    }
    default:
      next(action);
  }
};

export default listUsersAdminMiddleware;
