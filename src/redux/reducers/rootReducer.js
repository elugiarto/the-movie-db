import { combineReducers } from 'redux';
import MovieList from './MoviesListReducer';
import Movie from './MovieDetailsReducer';

const reducers = {
  MovieList,
  Movie
};

export default combineReducers(reducers);
