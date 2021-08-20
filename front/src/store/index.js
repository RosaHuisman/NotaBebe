<<<<<<< HEAD
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';
import logMiddleware from './middlewares/logMiddleware';
import authMiddleware from './middlewares/authMiddleware';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(logMiddleware, authMiddleware),
  ),
);

=======
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';
import logMiddleware from './middlewares/logMiddleware';
import authMiddleware from './middlewares/authMiddleware';
import user from './middlewares/user'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(logMiddleware, authMiddleware, user),
);

const store = createStore(reducer, enhancers);


>>>>>>> origin/features-parentProfil
export default store;
