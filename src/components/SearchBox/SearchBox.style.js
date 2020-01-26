import styled from 'styled-components';

/* Images */
import STRIPES from './assets/stripe.svg';
import SEARCH_ICON from './assets/search-icon.svg';

export const Background = styled.div`
  height: 250px;
  background: rgb(8,27,35);
  background: radial-gradient(circle, rgba(5,112,172,0.46) 0%, rgba(8,27,35,0) 100%);
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 50px;
    bottom: 0;
    left: 0;
    background: rgb(8,27,35);
    background: linear-gradient(0deg, rgba(8,27,35,1) 15%, rgba(8,27,35,0) 100%);
    position: absolute;
  }
`;

export const StripeBackground = styled.div`
  background: url(${STRIPES}) repeat-x top left;
  min-height: 200px;
  position: absolute;
  left: 0;
  top: 0px;
  width: 100%;
  z-index: -1;
`;

export const TopHeaderCont = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const TMDBLogo = styled.a`
  margin: 60px 0 40px;
  display: inline-block;

  img {
    width: 66px;
  }
`;

export const SearchBoxCont = styled.div`
`;

export const SearchBox = styled.input`
  border: 0;
  border-radius: 25px;
  color: #01D277;
  padding: 14px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  background: #fff url(${SEARCH_ICON}) no-repeat 98% 50%;

  ::placeholder {
    color: #01D277;
  }
`

