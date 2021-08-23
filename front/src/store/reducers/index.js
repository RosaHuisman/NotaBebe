import { combineReducers } from 'redux';

import loginReducer from './login';
// import authReducer from './auth';
import userReducer from './user';
// import childReducer from './child';
import childrenReducer from './children';

const rootReducer = combineReducers({
  login: loginReducer,
  // auth: authReducer,
  user: userReducer,
  // child: childReducer,
  children: childrenReducer,

});

export default rootReducer;
