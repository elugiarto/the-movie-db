import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

/* Actions */
import {fetchMovieDetailsAction, fetchMovieDetailsSuccessAction} from '../redux/actions/MovieDetailsAction';

/* Components */
import MovieDetails from '../components/MovieDetails/MovieDetails';

const mapStateToProps = state => {
  return {
    movie: state.Movie,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchMovieDetails: fetchMovieDetailsAction,
      fetchMovieDetailsSuccess: fetchMovieDetailsSuccessAction
    },
    dispatch
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
);
