import {
  FETCH_POPULAR_MOVIES,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_FAILURE,
} from '../../constants/actions';

export const fetchPopularMoviesAction = () => {
  return {
    type: FETCH_POPULAR_MOVIES,
    payload: {}
  }
}

export const fetchPopularMoviesSuccessAction = (title, movies) => {
  return {
    type: FETCH_POPULAR_MOVIES_SUCCESS,
    payload: {
      title,
      movies
    }
  }
}

export const fetchPopularMoviesFailureAction = (errorMsg) => {
  return {
    type: FETCH_POPULAR_MOVIES_FAILURE,
    payload: {
      errorMsg
    }
  }
}
