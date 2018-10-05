import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';
import { HashRouter, Route } from 'react-router-dom';


import {fetchAllPokemon, fetchOnePokemon} from './util/api_util';
import {receiveAllPokemon, requestAllPokemon, receiveOnePokemon, requestOnePokemon} from './actions/pokemon_actions';
// import rootReducer from './reducers/root_reducer';

// import selectAllPokemon from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.requestAllPokemon = requestAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.selectAllPokemon = selectAllPokemon;
  window.fetchOnePokemon = fetchOnePokemon;
  window.receiveOnePokemon = receiveOnePokemon;
  window.requestOnePokemon = requestOnePokemon;

  ReactDOM.render(<Root store={store}/>, rootEl);
});

// ReactDOM.render(<h1>Pokedex</h1>, rootEl);
