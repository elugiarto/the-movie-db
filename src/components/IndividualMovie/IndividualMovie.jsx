import React from 'react';

/* Styled components */
import * as StyledComp from './IndividualMovie.style';

class IndividualMovie extends React.Component {
  render() {
    return (
      <StyledComp.IndividualMovieCont>
        <StyledComp.MovieLink href='#'>
          <img src="https://image.tmdb.org/t/p/w154//or06FN3Dka5tukK1e9sl16pB3iy.jpg" />
        </StyledComp.MovieLink>
        <StyledComp.UserRating ratingCategory="high">80%</StyledComp.UserRating>
        <StyledComp.MovieLink href='#'>
          <h4>Movie Title</h4>
        </StyledComp.MovieLink>
        <p>December 2019</p>
      </StyledComp.IndividualMovieCont>
    );
  }
}

export default IndividualMovie;
