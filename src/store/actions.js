import * as Types from "./types";


export const initTrailerUrl = (url) => {
  return {
    type: Types.SET_TRAILER_URL,
    url
  }
}

export const removeTrailerUrl = () => {
  return {
    type: Types.REMOVE_TRAILER_URL,
  }
}

export const setMovies = (movies) => {
  return {
    type: Types.SET_MOVIES,
    movies
  }
}
