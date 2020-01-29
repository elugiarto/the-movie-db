import { put, takeEvery } from '@redux-saga/core/effects';

/* Actions */
import { fetchMovieDetailsSuccessAction, fetchMovieDetailsFailureAction } from '../actions/MovieDetailsAction';

/* Constants */
import { FETCH_MOVIE_DETAILS } from '../../constants/actions';
import { DEFAULT_ERROR_MESSAGE } from '../../constants/message';

/* Resources */
import { IndividualMovie } from '../../resources/MovieResources';

function* fetchMovieDetailsAsync(action) {
  try {
    const details = yield IndividualMovie(action.payload.id);
    yield put(fetchMovieDetailsSuccessAction(details));
  } catch (e) {
    yield put (fetchMovieDetailsFailureAction(DEFAULT_ERROR_MESSAGE));
  }
}

export default function* watchFetchMovieDetailsAsync() {
  yield takeEvery(FETCH_MOVIE_DETAILS, fetchMovieDetailsAsync);
}
