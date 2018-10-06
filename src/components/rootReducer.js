import {combineReducers} from 'redux';

import elementsReducer from './elementsReducer';
import listReducer from './listReducer';

const rootReducer= combineReducers({
    list: listReducer,
    elements:elementsReducer
  });

export default rootReducer;