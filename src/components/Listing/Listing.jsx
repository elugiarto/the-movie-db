import React from 'react';

/* Components */
import IndividualMovie from '../IndividualMovie/IndividualMovie';

/* Styled components */
import * as StyledComp from './Listing.style';

class Listing extends React.Component {
  componentDidMount() {
    this.props.fetchPopularMovies();
  }

  renderMovieList() {
    if (this.props.movieList.errorMsg !== '') {
      return (
        <StyledComp.ErrorMsg>
          {this.props.movieList.errorMsg}
        </StyledComp.ErrorMsg>
      );
    }

    if (this.props.movieList.movies.length > 0) {
      return this.props.movieList.movies.map(movie => (
        <IndividualMovie key={movie.id} movie={movie} />
      ));
    }
  }

  render() {
    return (
      <StyledComp.ListingCont>
        <h2>{this.props.movieList.title}</h2>
        <StyledComp.ListingInnerCont>
          {this.renderMovieList()}
        </StyledComp.ListingInnerCont>
      </StyledComp.ListingCont>
    );
  }
}

export default Listing;
