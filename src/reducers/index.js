import { combineReducers } from 'redux';
import carteReducer from './carteReducer';
import userReducer from './userReducer';
import {messageReducer} from './Tchatreducer';
const allReducers = combineReducers({
  card : carteReducer,
  users : userReducer,
  tchat : messageReducer,
});

export default allReducers;
