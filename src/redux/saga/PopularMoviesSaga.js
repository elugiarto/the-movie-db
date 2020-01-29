import { put, takeEvery } from '@redux-saga/core/effects';

/* Actions */
import { fetchPopularMoviesSuccessAction, fetchPopularMoviesFailureAction } from '../actions/MovieListActions';

/* Constants */
import { FETCH_POPULAR_MOVIES } from '../../constants/actions';
import { POPULAR_MOVIES_TITLE } from '../../constants/pageTitle';
import { DEFAULT_ERROR_MESSAGE } from '../../constants/message';

/* Resources */
import { MovieList } from '../../resources/MovieResources';

function* fetchPopularMoviesAsync(action) {
  try {
    const movies = yield MovieList();
    yield put(fetchPopularMoviesSuccessAction(POPULAR_MOVIES_TITLE, movies));
  } catch (e) {
    yield put (fetchPopularMoviesFailureAction(DEFAULT_ERROR_MESSAGE));
  }
}

export default function* watchFetchPopularMoviesAsync() {
  yield takeEvery(FETCH_POPULAR_MOVIES, fetchPopularMoviesAsync);
}
