import React from 'react';

/* Components */
import SearchBox from '../SearchBox/SearchBox';
import Listing from '../Listing/Listing';

class MovieList extends React.Component {
  render () {
    return (
      <React.Fragment>
        <SearchBox />
        <Listing />
      </React.Fragment>
    );
  }
};

export default MovieList;
