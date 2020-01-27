import React from 'react';

/* Icons */
import BACK_ICON from './assets/back_icon.svg';

/* Styled Components */
import * as StyledComp from './MovieDetails.style';

class MovieDetails extends React.Component {
  render() {
    const bullet = '&bull;';
    return (
      <React.Fragment>
        <StyledComp.MovieBackdrop bgImage="https://image.tmdb.org/t/p/w1280/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg">
          <StyledComp.BackBtnCont>
            <StyledComp.BackBtn>
              <img src={BACK_ICON} alt="Back button" />
            </StyledComp.BackBtn>
          </StyledComp.BackBtnCont>
        </StyledComp.MovieBackdrop>

        <StyledComp.MovieDetailsCont>
          <StyledComp.MoviePoster
            src="https://image.tmdb.org/t/p/w154//or06FN3Dka5tukK1e9sl16pB3iy.jpg"
            alt="Movie Title"
          />
          <StyledComp.MovieDetails>
            <h1>Movie Title</h1>
            <p>
              2018
              <StyledComp.DetailsConnector>&bull;</StyledComp.DetailsConnector>
              82% User Score <br /> 2h 15min
            </p>
          </StyledComp.MovieDetails>
        </StyledComp.MovieDetailsCont>
        <StyledComp.MovieDescription>
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            bibendum libero orci, nec elementum turpis porttitor at. Mauris
            placerat quam ut tellus tincidunt interdum. Quisque nunc leo,
            porttitor vitae dictum eu, finibus eu orci. Vestibulum rutrum vel
            nibh et malesuada. In mi ipsum, suscipit ac metus sed, tristique
            tristique metus. Proin quis ex mauris. Donec nisi purus, auctor
            vitae magna ac, vestibulum faucibus risus. Pellentesque ac sapien
            vel urna bibendum luctus a vel orci.{' '}
          </p>
        </StyledComp.MovieDescription>
      </React.Fragment>
    );
  }
}

export default MovieDetails;
