import { createStore, combineReducers } from 'redux';
import trailerUrl from "./reducers/trailerUrl";

const reducerCombine = combineReducers({
  trailerUrl
})

const store = createStore(reducerCombine);

export default store;