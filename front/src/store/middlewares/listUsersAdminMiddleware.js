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
  FETCH_ALL_USERS,
  saveAllUsers
} from 'src/store/actions';

import axios from 'axios';
import api from './utils/api';

const listUsersAdminMiddleware = (store) => (next) => (action) => {
  // une fois qu'on aura les infos, on va les stocker dans le state => dispatcher une action
  switch (action.type) {
    case FETCH_ALL_USERS: {
         const fetchData = async () => {
          try {
            const response = await api.get('/profile/admin/allusers');
            const actionsaveAllUsers = saveAllUsers(response.data);
            store.dispatch(actionsaveAllUsers);
          }
          catch (error) {
            console.error('il y a eu une erreur', error);
          }
        };
  
        fetchData();
        break;
    }
    case DELETE_USER: {


      const userDeleted = action.payload;

      api.delete(`/profile/admin/manageprofile/${userDeleted}`)
        .then((response) => {
          store.dispatch(deleteUserSuccess(response.data));
        })
        .catch((error) => {

          const errorPayload = {};
          errorPayload.message = error.response.data.message;
          errorPayload.status = error.response.status;

          store.dispatch(deleteUserError(errorPayload));
        });
      break;
    }
    case ADMIN_ADD_USER: {

      const state = store.getState();
      
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
          role_id: +state.user.roleId,
        },
      })
        .then((response) => {
          store.dispatch(adminAddUserSuccess(response.data));
        })
        .catch((error) => {

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
