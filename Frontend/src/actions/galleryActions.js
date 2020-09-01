import {
  GET_GALLERY,
  ADD_GALLERYITEM,
  UPDATE_GALLERYITEM,
  DELETE_GALLERYITEM,
} from "./types";
import axios from "axios";

export const getGallery = () => (dispatch) => {
  axios
    .get("http://localhost:5000/api/gallery")
    .then((res) => res.data)
    .then((gallery) =>
      dispatch({
        type: GET_GALLERY,
        payload: gallery
      })
    );
};
