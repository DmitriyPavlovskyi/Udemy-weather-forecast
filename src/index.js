import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// If action have a promise as a payload after promise resolves, creating a new action and send to reducer
import ReduxPromise from 'redux-promise';
import reducers from './root/reducer';

import Root from './root/app';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Root />
  </Provider>
  , document.querySelector('.container'));
