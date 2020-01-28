import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

/* Actions */
import { fetchPopularMoviesAction } from '../redux/actions/MovieListActions';

/* Components */
import Listing from '../components/Listing/Listing';

const mapStateToProps = state => {
  return {
    movieList: state.MovieList,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchPopularMovies: fetchPopularMoviesAction,
    },
    dispatch
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Listing)
);
