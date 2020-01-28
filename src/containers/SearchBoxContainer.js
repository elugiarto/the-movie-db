import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

/* Actions */
import {fetchSearchedMoviesAction } from '../redux/actions/SearchMovieActions';

/* Components */
import SearchBox from '../components/SearchBox/SearchBox';

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchSearchedMovies: fetchSearchedMoviesAction,
    },
    dispatch
  );
};

export default withRouter(
  connect(null, mapDispatchToProps)(SearchBox)
);
