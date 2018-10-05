import React from 'react';
import * as APIUtil from '../../util/api_util';

class PokemonDetail extends React.Component {

  componentDidMount() {
    debugger;
    this.props.requestOnePokemon(this.props.match.params.pokemonId);
  }

  render() {
    debugger
    if (this.props.pokemon) {
      return (
        <div>
          {this.props.pokemon.name}
        </div>
      )
    } else {
      return (
        <div>
          Loading
        </div>
      );
    }
  }
}

export default PokemonDetail;
