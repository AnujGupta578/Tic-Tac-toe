import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import AppComponent from './HelloContainer';
import { createStore } from 'redux';
import { enthusiasm } from './reducers';
import { Provider } from 'react-redux';
import { StoreState } from './types';
import { EnthusiasmAction } from './actions';
import { SquareValue, Suggestions } from './constants'

const store = createStore<StoreState, EnthusiasmAction, {}, {}>(enthusiasm, {
  defaultValue: 'X',
  history: [],
  square: SquareValue,
  suggestionsList: Suggestions

});

ReactDOM.render(
  <Provider store={store} >
    <AppComponent />
  </Provider>,
  document.getElementById('root') as HTMLElement
);