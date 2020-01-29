import {
  FETCH_SEARCHED_MOVIES
} from '../../constants/actions';

export const fetchSearchedMoviesAction = (query) => {
  // CHECK if Query is empty: query === ''
  return {
    type: FETCH_SEARCHED_MOVIES,
    payload: {
      query
    }
  }
}
