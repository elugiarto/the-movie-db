import {
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_FAILURE
} from '../../constants/actions';

export const fetchMovieDetailsAction = (id) => {
  return {
    type: FETCH_MOVIE_DETAILS,
    payload: {
      id
    }
  }
}

export const fetchMovieDetailsSuccessAction = (details) => {
  return {
    type: FETCH_MOVIE_DETAILS_SUCCESS,
    payload: {
      details
    }
  }
}

export const fetchMovieDetailsFailureAction = (errorMsg) => {
  return {
    type: FETCH_MOVIE_DETAILS_FAILURE,
    payload: {
      errorMsg
    }
  }
}
