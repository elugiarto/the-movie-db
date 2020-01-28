import {
  FETCH_SEARCHED_MOVIES,
  FETCH_SEARCHED_MOVIES_FAILURE
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

export const fetchPopularMoviesFailureAction = () => {
  return {
    type: FETCH_POPULAR_MOVIES_FAILURE,
    payload: {

    }
  }
}
