import { GET_TATTOOGALLERY, ADD_TATTOOGALLERYITEM, UPDATE_TATTOOGALLERYITEM, DELETE_TATTOOGALLERYITEM} from "../actions/types";

const initialState = {
  tattooGalleryData: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TATTOOGALLERY:
      return {
        ...state,
        tattooGalleryData: action.payload,
      };
      case ADD_TATTOOGALLERYITEM:
        return {
          ...state,
          tattooGalleryData: [action.payload, ...state.tattooGalleryData]
        }
    case UPDATE_TATTOOGALLERYITEM:
      return {
        ...state,
        tattooGalleryData: state.tattooGalleryItems.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
      case DELETE_TATTOOGALLERYITEM:
        return {
          ...state,
          tattooGalleryData: state.tattooGalleryData.filter((image) => image._id !== action.payload)
        }
    default:
      return state;
  }
}
