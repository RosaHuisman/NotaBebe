import { combineReducers } from 'redux';

import authReducer from './authentification';
import userReducer from './user';
// import childReducer from './child';
import childrenReducer from './children';
import recapReducer from './recap';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  // child: childReducer,
  children: childrenReducer,
  recap: recapReducer,
});

export default rootReducer;
