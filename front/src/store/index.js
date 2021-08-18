import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';
import logMiddleware from './middlewares/logMiddleware';
import authMiddleware from './middlewares/authMiddleware';
import forgotMiddleware from './middlewares/forgotMiddleware';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(logMiddleware, authMiddleware, forgotMiddleware),
  ),
);

export default store;
