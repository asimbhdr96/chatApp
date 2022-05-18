import {createStore , applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { combineReducers } from 'redux';
import {reducer as firebase} from 'react-redux-firebase'
import ChannelReducer from './channels'

const reducer = combineReducers({
  firebase,
  channels : ChannelReducer,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer,middleware)



export default store;
