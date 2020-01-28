import React from 'react';

/* Images */
import TMDB_LOGO from './assets/TMDB-logo.svg';

/* Styled Components */
import * as StyledComp from './SearchBox.style';

/* Utilities */
import Delayed from '../../utilities/delay';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedTerm: '',
    };
    this.search = new Delayed({ waitDuration: 500 })
  }

  searchOnChange(e) {
    this.setState({
      searchedTerm: e.target.value,
    });

    this.search.delay().then(() => {
      this.props.fetchSearchedMovies(encodeURIComponent(this.state.searchedTerm));
    });
  }

  render() {
    return (
      <StyledComp.Background>
        <StyledComp.StripeBackground />

        <StyledComp.TopHeaderCont>
          <StyledComp.TMDBLogo>
            <img src={TMDB_LOGO} alt="The Movie DB" />
          </StyledComp.TMDBLogo>

          <StyledComp.SearchBoxCont>
            <StyledComp.SearchBox
              onChange={e => this.searchOnChange(e)}
              type="text"
              placeholder="Search"
              value={this.state.searchedTerm}
            />
          </StyledComp.SearchBoxCont>
        </StyledComp.TopHeaderCont>
      </StyledComp.Background>
    );
  }
}

export default SearchBox;
