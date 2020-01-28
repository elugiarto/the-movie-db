import { put, takeEvery } from '@redux-saga/core/effects';

/* Actions */
import { fetchPopularMoviesSuccessAction } from '../actions/MovieListActions';

/* Constants */
import { FETCH_POPULAR_MOVIES } from '../../constants/actions';
import { POPULAR_MOVIES_TITLE } from '../../constants/pageTitle';

/* Resources */
import { MovieList } from '../../resources/MovieResources';

function* fetchPopularMoviesAsync(action) {
  try {
    const movies = yield MovieList();
    yield put(fetchPopularMoviesSuccessAction(POPULAR_MOVIES_TITLE, movies));
  } catch (e) {
    // TODO: Implement error handling
  }
}

export default function* watchFetchPopularMoviesAsync() {
  yield takeEvery(FETCH_POPULAR_MOVIES, fetchPopularMoviesAsync);
}
