import styled from 'styled-components';

/* Images */
import SEARCH_ICON from './assets/search-icon.svg';

/* Styling utilities */
import * as Colours from '../../utilities/colours';

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

