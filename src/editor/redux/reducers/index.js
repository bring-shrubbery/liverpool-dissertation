import { combineReducers } from 'redux';

import library from './libraryReducer.js';
import composer from './composerReducer.js';

export default combineReducers({
    library,
    composer
})