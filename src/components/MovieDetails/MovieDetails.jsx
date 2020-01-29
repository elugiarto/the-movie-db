import React from 'react';

/* Icons */
import BACK_ICON from './assets/back_icon.svg';

/* Styled Components */
import * as StyledComp from './MovieDetails.style';
import { TMDB_IMAGE_PATH } from '../../constants/paths';
import {
  XL_MAX_WIDTH,
  M_MAX_WIDTH,
  S_MAX_WIDTH, XS_MAX_WIDTH
} from '../../utilities/breakpoints';

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
      overview: '',
    };
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

  renderBackdrop() {
    if(this.state.backdrop_path !== null) {
      return (
        <picture>
          <source media={`(min-width: ${XL_MAX_WIDTH})`}
                  srcSet={`${TMDB_IMAGE_PATH}/original/${this.state.backdrop_path}`}/>
          <source media={`(min-width: ${M_MAX_WIDTH})`}
                  srcSet={`${TMDB_IMAGE_PATH}/w1280/${this.state.backdrop_path}`}/>
          <source media={`(min-width: ${S_MAX_WIDTH})`} srcSet={`${TMDB_IMAGE_PATH}/w780/${this.state.backdrop_path}`}/>
          <source media={`(min-width: ${XS_MAX_WIDTH})`}
                  srcSet={`${TMDB_IMAGE_PATH}/w300/${this.state.backdrop_path}`}/>
          <img
            src={`${TMDB_IMAGE_PATH}/w780/${this.state.backdrop_path}`}
            alt={`${this.state.title}`}
          />
        </picture>
      );
    } else {
      return (
        <h5>Image Unavailable</h5>
      );
    }
  }

  renderPoster() {
    if(this.state.poster_path !== null) {
      return (
        <picture>
          <source media={`(min-width: ${XS_MAX_WIDTH})`} srcSet={`${TMDB_IMAGE_PATH}/w185/${this.state.poster_path}`}/>
          <img
            src={`${TMDB_IMAGE_PATH}/w154/${this.state.poster_path}`}
            alt={`${this.state.title}`}
          />
        </picture>
      );
    } else {
      return (
        <StyledComp.NoPoster>
          <p>Image Unavailable</p>
        </StyledComp.NoPoster>
      );
    }
  }

  renderSpecs() {
    if (this.props.movie.errorMsg !== '') {
      return (
        <StyledComp.MovieDetailsCont style={{border: '0'}}>
          <p>{this.props.movie.errorMsg}</p>
        </StyledComp.MovieDetailsCont>
      );
    } else {
      return (
        <React.Fragment>
          <StyledComp.MovieDetailsCont>
            <StyledComp.MoviePosterCont>
              {this.renderPoster()}
            </StyledComp.MoviePosterCont>
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
          <p>{this.state.overview}</p>
          </StyledComp.MovieDescription>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <StyledComp.MovieBackdrop >
          {this.renderBackdrop()}
          <StyledComp.BackBtnCont>
            <StyledComp.BackBtn onClick={this.props.history.goBack}>
              <img src={BACK_ICON} alt="Back button" />
            </StyledComp.BackBtn>
          </StyledComp.BackBtnCont>
        </StyledComp.MovieBackdrop>

        {this.renderSpecs()}

      </React.Fragment>
    );
  }
}

export default MovieDetails;
