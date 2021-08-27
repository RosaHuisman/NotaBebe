import {
  SEND_RECAP,
} from 'src/store/actions';

import axios from 'axios';
import api from './utils/api';

const user = (store) => (next) => (action) => {
  // une fois qu'on aura les infos, on va les stocker dans le state => dispatcher une action
  switch (action.type) {
    
   
    case SEND_RECAP: {
      // console.log('je suis dans le cas CHANGE_INFOS')
      const state = store.getState();

      axios.patch('http://localhost:3001/profile/parent/:id', {
        address: state.user.address,
        postcode: state.user.postcode,
        city: state.user.city,
        phone_number: state.user.phone_number,
      })
        .then((response) => {
          const actionSaveRecap = saveRecap(response.data);
          store.dispatch(actionSaveRecap);
        })
        .catch((error) => {
          // console.log('une erreur s\'est produite')
          // store.dispatch(changeInfosError());
        });
      break;
    }
    
    default:
      next(action);
  }
};

export default user;
