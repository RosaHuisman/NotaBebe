import { combineReducers } from 'redux';

import loginReducer from './login';
import userReducer from './user';
//import childReducer from './child';
import childrenReducer from './children';



const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
  //child: childReducer,
  children: childrenReducer,
});

export default rootReducer;
