import styled from 'styled-components';

/* Images */
import STRIPES from './assets/stripe.svg';
import SEARCH_ICON from './assets/search-icon.svg';

/* Styling utilities */
import * as Colours from '../../utilities/colours';
import * as Breakpoints from '../../utilities/breakpoints';

export const Background = styled.div`
  height: 13em;
  background: rgb(8,27,35);
  background: radial-gradient(circle, rgba(5,112,172,0.46) 0%, rgba(8,27,35,0) 100%);
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 3.125em;
    bottom: 0;
    left: 0;
    background: rgb(8,27,35);
    background: linear-gradient(0deg, rgba(8,27,35,1) 15%, rgba(8,27,35,0) 100%);
    position: absolute;
  }
`;

export const StripeBackground = styled.div`
  background: url(${STRIPES}) repeat-x top left;
  min-height: 12.5em;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: -1;
`;

export const TopHeaderCont = styled.div`
  max-width: ${Breakpoints.XL_MAX_WIDTH};
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 1em;
  box-sizing: border-box;
`;

export const TMDBLogo = styled.a`
  margin: 2.5em;
  display: inline-block;

  img {
    min-width: 4.125em;
  }
`;

export const SearchBoxCont = styled.div`

`;

export const SearchBox = styled.input`
  border: 0;
  border-radius: 1.5em;
  color: ${Colours.TMDB_GREEN};
  padding: 1em 1.5em;
  font-size: 0.875em;
  width: 100%;
  box-sizing: border-box;
  background: #fff url(${SEARCH_ICON}) no-repeat 98% 50%;
  box-shadow: 0 0 0.5em 0 rgba(0,0,0,0.75);

  ::placeholder {
    color: ${Colours.TMDB_GREEN};
  }

  :focus {
    border-radius: 1.5em;
    outline: 0;
    box-shadow: 0 0 0.5em 0 rgba(1,210,119,0.75);
  }
`

