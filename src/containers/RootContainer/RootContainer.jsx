import * as React from "react";
import { Route, Switch } from 'react-router-dom';

/* Constants */
import {PATH_MOVIE_DETAILS} from '../../constants/paths';

/* Components */
import MovieList from '../../components/MovieList/MovieList';
import PageNotFound from '../../components/PageNotFound/PageNotFound';

/* Containers */
import MovieDetailsContainer from '../MovieDetailsContainer';

/* Styled Components */
import * as StyledComp from './RootContainer.style';

class RootContainer extends React.Component {
  render() {
    return (
      <StyledComp.AppContainer>
        <Switch>
          <Route exact path={`${PATH_MOVIE_DETAILS}/:id`} component={MovieDetailsContainer} />
          <Route exact path={'/'} component={MovieList} />
          <Route component={PageNotFound} />
        </Switch>
      </StyledComp.AppContainer>
    );
  }
}

export default RootContainer;
