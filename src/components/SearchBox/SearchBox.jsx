import React from 'react';

/* Components */
import Header from '../Header/Header';

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
      <Header>
        <div>
            <StyledComp.SearchBox
              onChange={e => this.searchOnChange(e)}
              type="text"
              placeholder="Search"
              value={this.state.searchedTerm}
            />
          </div>
      </Header>
    );
  }
}

export default SearchBox;
