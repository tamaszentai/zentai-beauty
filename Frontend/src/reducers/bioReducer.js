import { GET_BIO, UPDATE_BIO } from "../actions/types";

const initialState = {
  bio: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BIO:
      return {
        ...state,
        bio: action.payload,
      };
    case UPDATE_BIO:
      return {
        ...state,
        bio: state.bio.map((bio) =>
          bio._id === action.payload._id ? action.payload : bio
        ),
      };
    default:
      return state;
  }
}
