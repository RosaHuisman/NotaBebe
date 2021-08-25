import { combineReducers } from 'redux';

import loginReducer from './userlogin';
// import authReducer from './_auth';
import userReducer from './user';
// import childReducer from './child';
import childrenReducer from './children';

const rootReducer = combineReducers({
  userlogin: loginReducer,
  // auth: authReducer,
  user: userReducer,
  // child: childReducer,
  children: childrenReducer,
import recapReducer from './recap';


const rootReducer = combineReducers({
  recap: recapReducer,

});

export default rootReducer;
