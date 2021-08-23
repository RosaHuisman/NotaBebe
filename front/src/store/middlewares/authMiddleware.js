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
      method: 'POST',
      url: 'http://localhost:3001/login',
      headers: {
        // 'Content-Type': 'application/json',
      },
      data: {
        // email: state.userlogin.email,
        // password: state.userlogin.password,
        email: state.login.email,
        password: state.login.password,
      },
    };

    axios(config)
      .then((response) => {
        // store.dispatch(createLoginSuccessAction(data: response.data));
        store.dispatch({ type: 'LOGIN_SUCCESS', data: response.data });
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
