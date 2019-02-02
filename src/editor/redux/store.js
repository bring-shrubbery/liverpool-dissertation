import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';

import reducer from './reducers';

const saveToLocalStorage = store => next => action => {
    let result = next(action);

    let storage = window.localStorage;

    storage.setItem("redux_latest_store", JSON.stringify(store.getState()));
    
    return result;
}

const middleware = applyMiddleware(logger, saveToLocalStorage);

export default createStore(reducer, middleware);