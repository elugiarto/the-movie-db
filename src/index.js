import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './redux/reducers/rootReducer';
import { createBrowserHistory } from 'history';

/* Components */
import RootContainer from './containers/RootContainer/RootContainer';

/* Reset CSS */
import './layout/reset.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, {}, sagaMiddleware);

// sagaMiddleware.run(postsSaga);

const history = createBrowserHistory();

ReactDOM.render(
  //<Provider store={store}>
  <BrowserRouter>
    <RootContainer />
  </BrowserRouter>,
  //</Provider>,
  document.getElementById('root')
);
