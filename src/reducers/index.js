import { combineReducers } from 'redux';
import carteReducer from './carteReducer';
import userReducer from './userReducer';
const allReducers = combineReducers({
  card : carteReducer,
  users : userReducer
});

export default allReducers;
