import { GET_BIO, UPDATE_BIO } from "./types";
import axios from "axios";

export const getBio = () => (dispatch) => {
  axios
    .get("http://localhost:5000/api/bio")
    .then((res) => res.data)
    .then(bio =>
      dispatch({
        type: GET_BIO,
        payload: bio
      })
    );
};

export const updateBio = (bio) => (dispatch) => {
  axios.patch("http://localhost:5000/api/bio/5f242ecbc8c0e00aa2650206", {bio})
  .then((res) => res.data)
  .then(bio => 
    dispatch({
    type: UPDATE_BIO,
    payload: bio
  }));
};
