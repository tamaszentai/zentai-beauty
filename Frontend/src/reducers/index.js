import { combineReducers } from 'redux';
import bioReducer from './bioReducer';
import galleryReducer from './galleryReducer';
import tattooGalleryReducer from './tattooGalleryReducer';

export default combineReducers({
  biography: bioReducer,
  gallery: galleryReducer,
  tattooGallery: tattooGalleryReducer
});