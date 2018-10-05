import merge from 'lodash/merge';
import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ONE_POKEMON:
      // debugger;
      // return merge({}, state, action.payload);
      return merge({}, state, action.payload.items);



    default:
      return state;
  }
};

export default itemsReducer;
