import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:

      return merge({}, state, action.pokemon); // TA <- how does optional argument work.
      // const newState = merge({}, state);
      // return merge(newState, action.pokemon)
      // return newState;

    case RECEIVE_ONE_POKEMON:
      // debugger;
      // return merge({}, state, action.payload);
      return merge({}, state, {[action.payload.pokemon.id]: action.payload.pokemon});

    default:
      return state;
  }
};

export default pokemonReducer ;
