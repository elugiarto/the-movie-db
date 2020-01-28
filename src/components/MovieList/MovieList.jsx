import React from 'react';

/* Components */
import SearchBoxContainer from '../../containers/SearchBoxContainer';
import ListingContainer from '../../containers/ListingContainer';

class MovieList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SearchBoxContainer />
        <ListingContainer />
      </React.Fragment>
    );
  }
}

export default MovieList;
