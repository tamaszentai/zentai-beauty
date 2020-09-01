import { combineReducers } from 'redux';
import bioReducer from './bioReducer';

export default combineReducers({
  biography: bioReducer
});