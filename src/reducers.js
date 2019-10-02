import { combineReducers } from 'redux';
import homeReducer from './app/home/duck';
import vocabularyReducer from './app/vocabulary/duck';

const rootReducer = combineReducers({
  home: homeReducer,
  vocabulary: vocabularyReducer
});

export default rootReducer;