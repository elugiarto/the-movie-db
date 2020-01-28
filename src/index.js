import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/reducers/rootReducer';
import { createBrowserHistory } from 'history';

/* Components */
import RootContainer from './containers/RootContainer/RootContainer';

/* Reset CSS */
import './layout/reset.css';

/* Sagas */
import PopularMoviesSaga from './redux/saga/PopularMoviesSaga';
import MovieDetailsSaga from './redux/saga/MovieDetailsSaga';
import SearchMoviesSaga from './redux/saga/SearchMoviesSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(PopularMoviesSaga);
sagaMiddleware.run(MovieDetailsSaga);
sagaMiddleware.run(SearchMoviesSaga);

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <RootContainer />
    </Router>
  </Provider>,
  document.getElementById('root')
);
