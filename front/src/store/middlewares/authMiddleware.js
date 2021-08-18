import axios from 'axios';

import {
  SUBMIT_LOGIN,
  createLoginSuccessAction,
  createLoginErrorAction,
} from 'src/store/actions';

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === SUBMIT_LOGIN) {
    const state = store.getState();

    const config = {
      method: 'post',
      url: 'http://localhost:3001/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email: state.userlogin.email,
        password: state.userlogin.password,
      },
    };

    axios(config)
      .then((response) => {
        store.dispatch(createLoginSuccessAction(response.data.pseudo));
        console.log('DATA JWT', response.data);
      })
      .catch((error) => {
        store.dispatch(createLoginErrorAction());
      });
  }
  else {
    next(action);
  }
};

export default authMiddleware;
