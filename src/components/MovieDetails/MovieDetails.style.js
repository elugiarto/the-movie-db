import styled from 'styled-components';
import * as Breakpoints from '../../utilities/breakpoints';
import * as Colours from '../../utilities/colours';

export const MovieBackdrop = styled.div`
  background: url(${(props) => (props.bgImage ? props.bgImage : "")}) no-repeat center center;
  background-size: cover;
  height: 55vw;
`;

export const BackBtnCont = styled.div`
  max-width: ${Breakpoints.XL_MAX_WIDTH};
  padding: 1em;
  margin: 0 auto;
`;

export const BackBtn = styled.button.attrs({
  'aria-label': 'Back',
})`
  border: 0;
  background: transparent;
  cursor: pointer;
  order-radius: 50%;
  padding: 1em 1.15em;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0.5em 0 rgba(0, 0, 0 ,0.75)
  }
`;

export const MovieDetailsCont = styled.div`
  max-width: ${Breakpoints.XL_MAX_WIDTH};
  margin: -5em auto 2em;
  display: flex;
  border-bottom: solid 1px ${Colours.TMDB_STROKE_COLOR};
  padding: 0 1em 2em;
`;

export const MoviePoster = styled.img`
  border-radius: 0.5em;
  box-shadow: 0 0 0.75em 0 rgba(0, 0, 0 ,0.75);
  margin-right: 1em;
`;

export const MovieDetails = styled.div`
  padding-top: 5em;

  h1 {
    font-size: 1.75em;
  }

  p {
    font-size: 0.75em;
    line-height: 2em;
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
