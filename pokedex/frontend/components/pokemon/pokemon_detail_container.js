import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import selectAllPokemon from '../../reducers/selectors';
import {requestOnePokemon} from '../../actions/pokemon_actions';


const mapStateToProps = (state, ownProps) => {
  // piece of state that container subscribes to
  const pokemon = state.entities.pokemon[ownProps.match.params.pokemonId]; //

  return {
    pokemon: pokemon
  };
};

const mapDispatchToProps = dispatch => {
  return {requestOnePokemon: (id) => dispatch(requestOnePokemon(id))};

  // dispatch requestAllPokemon action.
};



export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
