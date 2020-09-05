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
        payload: gallery,
      })
    );
};

export const addGalleryItem = (fileData) => (dispatch) => {
  axios.post("http://localhost:5000/api/gallery", fileData)
  .then((res) =>
    dispatch({
      type: ADD_GALLERYITEM,
      payload: res.data,
    })
  );
};

export const deleteGalleryItem = (id) => (dispatch) => {
  axios.delete("http://localhost:5000/api/gallery/" + id)
  .then((res) =>
    dispatch({
      type: DELETE_GALLERYITEM,
      payload: id,
    })
  );
};
