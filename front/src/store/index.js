import { createStore, applyMiddleware, compose } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';
// import reducer from './reducer';
import logMiddleware from './middlewares/logMiddleware';
// import userServicesMiddleware from './middlewares/userServicesMiddleware';
import authMiddleware from './middlewares/authMiddleware';
import forgotMiddleware from './middlewares/forgotMiddleware';
import listUsersAdminMiddleware from './middlewares/listUsersAdminMiddleware';
import user from './middlewares/user';
import recap from './middlewares/recap';
import comment from './middlewares/comment';
import children from './middlewares/children';
import staff from './middlewares/staff';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(

  applyMiddleware(logMiddleware, authMiddleware, forgotMiddleware, user, recap, comment, children, staff, listUsersAdminMiddleware),

);
const persistConfig = {
  key: 'root',
  storage: storage,
};
const pReducer = persistReducer(persistConfig, rootReducer);

/* const middleware = applyMiddleware(logMiddleware, authMiddleware, forgotMiddleware, user, recap, comment, children, staff, listUsersAdminMiddleware); */

let store = createStore(pReducer, enhancers);

let persistor = persistStore(store);

//const store = createStore(reducer, enhancers);

export default { store, persistor };
