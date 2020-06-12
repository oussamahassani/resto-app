import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import allReducers from './reducers';
import {messageMiddleware} from './actions/actionchat'

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk , messageMiddleware))
);

export default store;
