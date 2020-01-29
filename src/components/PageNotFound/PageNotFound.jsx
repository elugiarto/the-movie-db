import React from 'react';

/* Components */
import Header from '../Header/Header';

class PageNotFound extends React.Component {
  render() {
    return (
      <Header>
        <h1>404</h1>
        <p>Page not found</p>
      </Header>
    );
  };
};

export default PageNotFound;
