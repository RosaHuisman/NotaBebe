import { combineReducers } from 'redux';

import recapReducer from './recap';


const rootReducer = combineReducers({
  recap: recapReducer,

});

export default rootReducer;
