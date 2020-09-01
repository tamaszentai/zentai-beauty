import { GET_GALLERY, ADD_GALLERYITEM, UPDATE_GALLERYITEM, DELETE_GALLERYITEM} from "../actions/types";

const initialState = {
  galleryData: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_GALLERY:
      return {
        ...state,
        galleryData: action.payload,
      };
    case UPDATE_GALLERYITEM:
      return {
        ...state,
        galleryData: state.galleryItems.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    default:
      return state;
  }
}
