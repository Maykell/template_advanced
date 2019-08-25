import { combineReducers } from 'redux';

import { exampleReducer as example } from './example';

const reducers = combineReducers({
  example,
});

export default reducers;
