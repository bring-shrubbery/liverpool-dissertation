import { applyMiddleware, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import logger from 'redux-logger';

import reducer from './reducers';

export default createStore(reducer, composeWithDevTools(applyMiddleware(logger)));