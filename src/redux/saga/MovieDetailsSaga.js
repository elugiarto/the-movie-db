import { put, takeEvery } from '@redux-saga/core/effects';

/* Actions */
import { fetchMovieDetailsSuccessAction } from '../actions/MovieDetailsAction';

/* Constants */
import { FETCH_MOVIE_DETAILS } from '../../constants/actions';

/* Resources */
import { IndividualMovie } from '../../resources/MovieResources';

function* fetchMovieDetailsAsync(action) {
  try {
    const details = yield IndividualMovie(action.payload.id);
    yield put(fetchMovieDetailsSuccessAction(details));
  } catch (e) {
    // TODO: Implement error handling
  }
}

export default function* watchFetchMovieDetailsAsync() {
  yield takeEvery(FETCH_MOVIE_DETAILS, fetchMovieDetailsAsync);
}
