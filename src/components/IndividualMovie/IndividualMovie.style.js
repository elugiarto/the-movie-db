import styled from 'styled-components';
import * as Colours from '../../utilities/colours';
import { Link } from 'react-router-dom';

export const IndividualMovieCont = styled.div`
  position: relative;
  margin: 1em;
  flex: 0 0 17%;

  &:nth-child(first) {
    margin-left: 0;
  }

  p {
    font-size: 0.75em;
    margin: 0;
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;

  img {
    border-radius: 0.5em;
  }

  &:hover img {
    opacity: 0.9;
  }

  h4 {
    font-size: 0.875em;
    font-weight: 400;
    margin: 0;
  }
`;

export const UserRating = styled.span`
  position: absolute;
  top: 0.5em;
  left: 0.5em;
  width: 3.5em;
  color: #fff;
  border-radius: 1em;
  font-weight: 700;
  font-size: 0.75em;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => {
    if (props.ratingCategory) {
      switch (props.ratingCategory) {
        case 'low':
          return `${Colours.TMDB_LOW_RATING}`;
        case 'mid':
          return `${Colours.TMDB_MID_RATING}`;
        default:
          return `${Colours.TMDB_GREEN}`;
      }
    }
  }};
`;

export const ImageUnavailable = styled.div`
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  width: 154px;
  height: 231px;
  align-items: center;
  justify-content: center;
  border-radius: 0.5em;
  color: ${Colours.TMDB_GREEN}
`;
