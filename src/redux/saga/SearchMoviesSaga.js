import { put, takeEvery } from '@redux-saga/core/effects';

/* Actions */
import { fetchPopularMoviesFailureAction, fetchPopularMoviesSuccessAction } from '../actions/MovieListActions';

/* Constants */
import { FETCH_SEARCHED_MOVIES } from '../../constants/actions';
import { POPULAR_MOVIES_TITLE, SEARCHED_MOVIES_TITLE } from '../../constants/pageTitle';

/* Resources */
import { SearchMovie, MovieList } from '../../resources/MovieResources';
import { DEFAULT_ERROR_MESSAGE } from '../../constants/message';

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
    yield put(fetchPopularMoviesSuccessAction('', []));
    yield put (fetchPopularMoviesFailureAction(DEFAULT_ERROR_MESSAGE));
  }
}

export default function* watchFetchSearchedMoviesAsync() {
  yield takeEvery(FETCH_SEARCHED_MOVIES, fetchSearchedMoviesAsync);
}
