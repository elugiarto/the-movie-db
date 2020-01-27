import React from 'react';

/* Components */
import IndividualMovie from '../IndividualMovie/IndividualMovie';

/* Styled components */
import * as StyledComp from './Listing.style';

class Listing extends React.Component {
  renderMovieList() {
    return (
      <React.Fragment>
        <IndividualMovie />
        <IndividualMovie />
        <IndividualMovie />
        <IndividualMovie />
        <IndividualMovie />
        <IndividualMovie />
        <IndividualMovie />
        <IndividualMovie />
      </React.Fragment>
    );
  }

  render() {
    return (
      <StyledComp.ListingCont>
        <h2>Popular Movies</h2>
        <StyledComp.ListingInnerCont>
          {this.renderMovieList()}
        </StyledComp.ListingInnerCont>
      </StyledComp.ListingCont>
    );
  }
}

export default Listing;
