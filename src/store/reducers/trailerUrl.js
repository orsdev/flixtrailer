import * as Types from "../types";

const initialState = {
  url: "",
  isSetUrl: false
}

const trailerUrl = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_TRAILER_URL:
      return {
        ...state,
        url: action.url,
        isSetUrl: true
      }
    case Types.REMOVE_TRAILER_URL:
      return {
        ...state,
        url: "",
        isSetUrl: false
      }
    default:
      return state;
  }
}

export default trailerUrl;