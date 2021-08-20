import { combineReducers } from 'redux';

import loginReducer from './login';
import userReducer from './user';
import childReducer from './child';


const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
  child: childReducer,
});

export default rootReducer;
