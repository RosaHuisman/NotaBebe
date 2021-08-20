import {
  CHANGE_INFOS, CHANGE_PASSWORD, saveInfosUser, savePasswordUser, changeInfosError, changePasswordError,
} from 'src/store/actions';
import axios from 'axios';

const user = (store) => (next) => (action) => {
  // console.log('MW auth', action);
  // une fois qu'on aura les infos, on va les stocker dans le state => dispatcher une action
  switch (action.type) {
    case CHANGE_INFOS: {
      console.log('je suis dans le cas CHANGE_INFOS');
      const state = store.getState();

      axios.patch('http://localhost:3001/profile/parent/:id', {
        address: state.user.address,
        postcode: state.user.postcode,
        city: state.user.city,
        phone_number: state.user.phone_number,
      })
        .then((response) => {
          const actionSaveInfosUser = saveInfosUser(response.data);
          store.dispatch(actionSaveInfosUser);
        })
        .catch((error) => {
          console.log('une erreur s\'est produite');
          // store.dispatch(changeInfosError());
        });
      break;
    }
    case CHANGE_PASSWORD: {
      console.log('je suis dans le cas CHANGE_PASSWORD');
      const state = store.getState();

      axios.patch('http://localhost:3001/profile/parent/:id', {
        password: state.user.password,
      })
        .then((response) => {
          const actionSaveInfosUser = savePasswordUser(response.data);
          store.dispatch(actionSaveInfosUser);
        })
        .catch((error) => {
          console.log('une erreur s\'est produite');
          // store.dispatch(changePasswordError());
        });
      break;
    }
    default:
      next(action);
  }
};

export default user;
