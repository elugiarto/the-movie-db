import React from 'react';

/* Images */
import TMDB_LOGO from './assets/TMDB-logo.svg';

/* Styled Components */
import * as StyledComp from './SearchBox.style';

class SearchBox extends React.Component {

  render() {
    return (
      <StyledComp.Background>
        <StyledComp.StripeBackground />
        <StyledComp.TopHeaderCont>
          <StyledComp.TMDBLogo>
            <img src={TMDB_LOGO} alt='The Movie DB' />
          </StyledComp.TMDBLogo>
          <StyledComp.SearchBoxCont>
            <StyledComp.SearchBox type='text' placeholder='Search' />
          </StyledComp.SearchBoxCont>
        </StyledComp.TopHeaderCont>
      </StyledComp.Background>
    );
  }
}

export default SearchBox;
