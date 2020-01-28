import React from 'react';

/* Icons */
import BACK_ICON from './assets/back_icon.svg';

/* Styled Components */
import * as StyledComp from './MovieDetails.style';
import { TMDB_IMAGE_PATH } from '../../constants/paths';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: '',
      release_date: '',
      poster_path: '',
      backdrop_path: '',
      user_score: 0,
      runtime: '',
      overview: ''
    }
  }

  componentDidMount() {
    this.props.fetchMovieDetails(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.movie.details !== this.props.movie.details) {
      this.setStateWithLoadedProps();
    }
  }

  setStateWithLoadedProps() {
    const thisMovie = this.props.movie.details;
    this.setState({
      id: thisMovie.id,
      title: thisMovie.title,
      release_date: thisMovie.release_date,
      poster_path: thisMovie.poster_path,
      backdrop_path: thisMovie.backdrop_path,
      user_score: thisMovie.user_score,
      runtime: thisMovie.runtime,
      overview: thisMovie.overview
    });
  }

  render() {
    const bullet = '&bull;';
    return (
      <React.Fragment>
        <StyledComp.MovieBackdrop bgImage={`${TMDB_IMAGE_PATH}/w1280/${this.state.backdrop_path}`}>
          <StyledComp.BackBtnCont>
            <StyledComp.BackBtn onClick={this.props.history.goBack}>
              <img src={BACK_ICON} alt="Back button" />
            </StyledComp.BackBtn>
          </StyledComp.BackBtnCont>
        </StyledComp.MovieBackdrop>

        <StyledComp.MovieDetailsCont>
          <StyledComp.MoviePoster
            src={`${TMDB_IMAGE_PATH}/w154/${this.state.poster_path}`}
            alt={`${this.state.title} poster`}
          />
          <StyledComp.MovieDetails>
            <h1>{this.state.title}</h1>
            <p>
              {this.state.release_date}
              <StyledComp.DetailsConnector>&bull;</StyledComp.DetailsConnector>
              {this.state.user_score}% User Score <br /> {this.state.runtime}
            </p>
          </StyledComp.MovieDetails>
        </StyledComp.MovieDetailsCont>
        <StyledComp.MovieDescription>
          <h2>Overview</h2>
          <p>
            {this.state.overview}
          </p>
        </StyledComp.MovieDescription>
      </React.Fragment>
    );
  }
}

export default MovieDetails;
