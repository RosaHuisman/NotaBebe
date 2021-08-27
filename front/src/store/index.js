import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';
// import reducer from './reducer';
import logMiddleware from './middlewares/logMiddleware';
// import userServicesMiddleware from './middlewares/userServicesMiddleware';

import authMiddleware from './middlewares/authMiddleware';
import forgotMiddleware from './middlewares/forgotMiddleware';
import listUsersAdminMiddleware from './middlewares/listUsersAdminMiddleware';

import user from './middlewares/user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(logMiddleware, authMiddleware, forgotMiddleware, user, listUsersAdminMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
