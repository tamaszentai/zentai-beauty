import {
  GET_TATTOOGALLERY,
  ADD_TATTOOGALLERYITEM,
  UPDATE_TATTOOGALLERYITEM,
  DELETE_TATTOOGALLERYITEM,
} from "./types";
import axios from "axios";

export const getTattooGallery = () => (dispatch) => {
  axios
    .get("http://localhost:5000/api/tattoogallery")
    .then((res) => res.data)
    .then((tattoogallery) =>
      dispatch({
        type: GET_TATTOOGALLERY,
        payload: tattoogallery,
      })
    );
};

export const addTattooGalleryItem = (fileData) => (dispatch) => {
  axios.post("http://localhost:5000/api/tattoogallery", fileData)
  .then((res) =>
    dispatch({
      type: ADD_TATTOOGALLERYITEM,
      payload: res.data,
    })
  );
};

export const deleteTattooGalleryItem = (id) => (dispatch) => {
  axios.delete("http://localhost:5000/api/tattoogallery/" + id)
  .then((res) =>
    dispatch({
      type: DELETE_TATTOOGALLERYITEM,
      payload: id,
    })
  );
};
