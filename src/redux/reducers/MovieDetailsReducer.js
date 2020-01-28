import {FETCH_MOVIE_DETAILS, FETCH_MOVIE_DETAILS_SUCCESS, FETCH_MOVIE_DETAILS_FAILURE} from '../../constants/actions';

const defaultState = {
  // MovieDetails
  details: null,
  loading: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS:
      return {
        ...state,
        loading: true
      };
    case FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        details: action.payload.details
      };
    default:
      return state;
  }
};

