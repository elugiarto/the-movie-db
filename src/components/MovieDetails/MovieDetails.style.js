import styled from 'styled-components';
import * as Breakpoints from '../../utilities/breakpoints';
import * as Colours from '../../utilities/colours';

export const MovieBackdrop = styled.div`
  height: 55vw;
  overflow: hidden;
  position: relative;
  min-height: 10rem;
  background: rgba(0,0,0,0.5);

  @media screen and (min-width: ${Breakpoints.M_MAX_WIDTH}) {
    height: 35vw;
  }

  picture {
    position: absolute;
    top: 0;
    z-index: 0;
    width: 100%;

    img {
      width: 100%;
    }
  }

  h5 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${Colours.TMDB_GREEN};
    margin: 0;
  }
`;

export const BackBtnCont = styled.div`
  max-width: ${Breakpoints.XL_MAX_WIDTH};
  padding: 1em;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const BackBtn = styled.button.attrs({
  'aria-label': 'Back',
})`
  border: 0;
  background: transparent;
  cursor: pointer;
  border-radius: 50%;
  padding: 1em 1.15em;
  transition: all 0.1s ease;

  &:hover {
    background: ${Colours.TMDB_GREEN};
    box-shadow: 0 0 0.5em 0 rgba(0, 0, 0 ,0.75);
  }

`;

export const MovieDetailsCont = styled.div`
  max-width: ${Breakpoints.XL_MAX_WIDTH};
  margin: -5em auto 2em;
  display: flex;
  border-bottom: solid 1px ${Colours.TMDB_STROKE_COLOR};
  padding: 0 1em 2em;
  position: relative;
  flex-direction: column;

  @media screen and (min-width: ${Breakpoints.XS_MAX_WIDTH}) {
    flex-direction: row;
  }
`;

export const MoviePosterCont = styled.div`
  display: flex;
  justify-content: center;

  picture {
    img {
      border-radius: 0.5em;
      box-shadow: 0 0 0.75em 0 rgba(0, 0, 0 ,0.75);
      margin-right: 1em;
    }
  }
`;

export const MovieDetails = styled.div`
  @media screen and (min-width: ${Breakpoints.XS_MAX_WIDTH}) {
    padding-top: 5em;
  }

  h1 {
    font-size: 1.75em;
  }

  p {
    font-size: 0.75em;
    line-height: 2em;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
  }
`;

export const DetailsConnector = styled.span`
  margin: 0 0.5em;
`;

export const MovieDescription = styled.div`
  max-width: ${Breakpoints.XL_MAX_WIDTH};
  margin: 0 auto;
  padding: 0 1em;

  h2 {
    font-size: 1.25em;
  }

  p {
    color: ${Colours.TMDB_TEXT};
  }
`;

export const NoPoster = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  min-width: 154px;
  margin-right: 1rem;
  border-radius: 0.5em;

  p {
    font-size: 0.875em;
    color: ${Colours.TMDB_GREEN};
  }
`;

