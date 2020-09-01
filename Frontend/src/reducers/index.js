import { combineReducers } from 'redux';
import bioReducer from './bioReducer';
import galleryReducer from './galleryReducer';

export default combineReducers({
  biography: bioReducer,
  gallery: galleryReducer
});