import {FETCH_POPULAR_MOVIES, FETCH_POPULAR_MOVIES_SUCCESS, FETCH_POPULAR_MOVIES_FAILURE} from '../../constants/actions';

const defaultState = {
  movies: [],
  loading: false,
  title: '',
  errorMsg: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES:
      return {
        ...state,
        loading: true
      };
    case FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        title: action.payload.title,
        loading: false,
        movies: action.payload.movies,
        errorMsg: ''
      };
    case FETCH_POPULAR_MOVIES_FAILURE:
      return {
        ...state,
        errorMsg: action.payload.errorMsg
      }
    default:
      return state;
  }
};

