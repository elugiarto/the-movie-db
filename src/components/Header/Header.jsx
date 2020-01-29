import React from 'react';

/* Images */
import TMDB_LOGO from './assets/TMDB-logo.svg';

/* Styled Components */
import * as StyledComp from './Header.style';

class Header extends React.Component {
  render() {
    return (
      <StyledComp.Background>
        <StyledComp.StripeBackground />

        <StyledComp.TopHeaderCont>
          <StyledComp.TMDBLogo>
            <img src={TMDB_LOGO} alt="The Movie DB" />
          </StyledComp.TMDBLogo>

          {this.props.children}
        </StyledComp.TopHeaderCont>
      </StyledComp.Background>
    );
  }
}

export default Header;
