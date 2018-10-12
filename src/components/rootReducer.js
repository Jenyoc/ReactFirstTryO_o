import {combineReducers} from 'redux';

import sourcesReducer from './sourcesReducer';
import listReducer from './listReducer';

const rootReducer= combineReducers({
    list: listReducer,
    sources:sourcesReducer
  });

export default rootReducer;