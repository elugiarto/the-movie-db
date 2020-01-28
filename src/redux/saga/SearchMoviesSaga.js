import { put, takeEvery } from '@redux-saga/core/effects';

/* Actions */
import { fetchPopularMoviesSuccessAction } from '../actions/MovieListActions';

/* Constants */
import { FETCH_SEARCHED_MOVIES } from '../../constants/actions';
import { POPULAR_MOVIES_TITLE, SEARCHED_MOVIES_TITLE } from '../../constants/pageTitle';

/* Resources */
import { SearchMovie, MovieList } from '../../resources/MovieResources';

function* fetchSearchedMoviesAsync(action) {
  try {
    let movies = null;
    let title = '';

    if (action.payload.query === '') {
      movies = yield MovieList();
      title = POPULAR_MOVIES_TITLE;
    } else {
      movies = yield SearchMovie(action.payload.query);
      title = SEARCHED_MOVIES_TITLE;
    }
    yield put(fetchPopularMoviesSuccessAction(title, movies));

  } catch (e) {
    // TODO: Implement error handling
  }
}

export default function* watchFetchSearchedMoviesAsync() {
  yield takeEvery(FETCH_SEARCHED_MOVIES, fetchSearchedMoviesAsync);
}
