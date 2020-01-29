import {FETCH_MOVIE_DETAILS, FETCH_MOVIE_DETAILS_SUCCESS, FETCH_MOVIE_DETAILS_FAILURE} from '../../constants/actions';

const defaultState = {
  // MovieDetails
  details: null,
  loading: false,
  errorMsg: ''
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
        details: action.payload.details,
        errorMsg: ''
      };
    case FETCH_MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        errorMsg: action.payload.errorMsg
      }
    default:
      return state;
  }
};

