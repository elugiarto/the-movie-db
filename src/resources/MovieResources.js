import axios from 'axios';

/* Constants */
import { TMDB_API_PATH } from '../constants/paths';
import { jumboTMDBAPIKey } from '../constants/apiKey';

/* Entities */
import MovieBasic from '../entities/MovieBasic';
import MovieDetails from '../entities/MovieDetails';

// Resource to get popular movies listing
export const MovieList = async () => {
  const { data } = await axios.get(
    `${TMDB_API_PATH}/movie/popular?api_key=${jumboTMDBAPIKey()}`
  );
  const movies = data.results.map(result => {
    return transformMovieBasic(result);
  });

  return movies;
};

// Resource to get individual movie details
export const IndividualMovie = async movieId => {
  const { data } = await axios.get(
    `${TMDB_API_PATH}/movie/${movieId}?api_key=${jumboTMDBAPIKey()}`
  );
  return transformMovieDetails(data);
};

// Resource to search movie
export const SearchMovie = async query => {
  const {data} = await axios.get(`${TMDB_API_PATH}/search/movie?query=${query}&api_key=${jumboTMDBAPIKey()}`);

  const movies = data.results.map(result => {
    return transformMovieBasic(result);
  });

  return movies;
}

const transformMovieBasic = movie => {
  const { id, title, release_date, poster_path, vote_average } = movie;

  return new MovieBasic({ id, title, release_date, poster_path, vote_average });
};

const transformMovieDetails = details => {
  const {
    id,
    title,
    release_date,
    poster_path,
    backdrop_path,
    vote_average,
    runtime, overview
  } = details;

  return new MovieDetails({
    id,
    title,
    release_date,
    poster_path,
    backdrop_path,
    vote_average,
    runtime, overview
  });
};
