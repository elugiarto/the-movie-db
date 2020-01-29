import React from 'react';

/* Constants */
import { PATH_MOVIE_DETAILS, TMDB_IMAGE_PATH } from '../../constants/paths';

/* Styled components */
import * as StyledComp from './IndividualMovie.style';

class IndividualMovie extends React.Component {

  /**
   * Return rating category. high, mid or low
   * @param userScore
   * @returns {string}
   */
  getRatingCategory(userScore) {
    const ratingDevision = 100 / 3;

    if (userScore <= ratingDevision) {
      return 'low';
    }

    if (userScore > ratingDevision && userScore <= (ratingDevision * 2)) {
      return 'mid';
    }

    if (userScore > (ratingDevision * 2)) {
      return 'high';
    }
  }
  renderPoster() {
    if (this.props.movie.poster_path === null) {
      return <StyledComp.ImageUnavailable>Image unavailable</StyledComp.ImageUnavailable>
    }

    return (
      <img
        src={`${TMDB_IMAGE_PATH}/w154/${this.props.movie.poster_path}`}
        alt={`${this.props.movie.title} poster`}
      />
    );
  }
  render() {
    return (
      <StyledComp.IndividualMovieCont>
        <StyledComp.MovieLink
          to={`${PATH_MOVIE_DETAILS}/${this.props.movie.id}`}
        >
          {this.renderPoster()}
        </StyledComp.MovieLink>
        <StyledComp.UserRating ratingCategory={this.getRatingCategory(this.props.movie.user_score)}>
          {this.props.movie.user_score}%
        </StyledComp.UserRating>
        <StyledComp.MovieLink
          to={`${PATH_MOVIE_DETAILS}/${this.props.movie.id}`}
        >
          <h4>{this.props.movie.title}</h4>
        </StyledComp.MovieLink>
        <p>{this.props.movie.release_date}</p>
      </StyledComp.IndividualMovieCont>
    );
  }
}

export default IndividualMovie;
