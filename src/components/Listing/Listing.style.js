import styled from 'styled-components';

import * as Breakpoints from '../../utilities/breakpoints';

export const ListingCont = styled.div`
  max-width: ${Breakpoints.XL_MAX_WIDTH};
  margin: 0 auto;
  padding: 1em;
  box-sizing: border-box;

  h2 {
    font-size: 1.25em;
  }
`;

export const ListingInnerCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 -1em;
`;
