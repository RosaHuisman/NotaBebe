import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';
import logMiddleware from './middlewares/logMiddleware';
import authMiddleware from './middlewares/authMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(logMiddleware, authMiddleware),
);

const store = createStore(reducer, enhancers);


export default store;
