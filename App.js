import React from 'react';
import { AppRegistry,AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';
import AppReducer from './src/reducers';
import { AppNavigator, middleware } from './src/navigators/AppNavigator';

// add logger below to view redux Action,State Log after thunk.
const store = createStore(AppReducer, applyMiddleware(middleware,thunk, logger));
//const store = null;
export default class App extends React.Component {

  constructor() {
    super();
    console.reportErrorsAsExceptions = false;
  }
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}