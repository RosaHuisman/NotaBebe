import axios from 'axios';

import {
  SUBMIT_EMAIL,
} from 'src/store/actions';

const forgotMiddleware = (store) => (next) => (action) => {
  if (action.type === SUBMIT_EMAIL) {
    const state = store.getState();

    const config = {
      method: 'post',
      url: 'http://localhost:3001/post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email: state.userlogin.email,
      },
    };

    axios(config)
      .then((response) => {
        console.log('RESPONSE', response.data.pseudo);
      })
      .catch((error) => {
        console.log('ERROR', error);
      });
  }
  else {
    next(action);
  }
};

export default forgotMiddleware;
