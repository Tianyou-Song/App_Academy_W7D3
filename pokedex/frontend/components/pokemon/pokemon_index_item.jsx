import React from 'react';
import { Link } from 'react-router-dom';

// {
//   key: poke.id,
//   poke
// }

const PokemonIndexItem = ({poke}) => {

  return (
    <li>
      <Link to='/pokemon/:pokemonId'>
        {poke.name}
        <br />
        <img src={poke.image_url} />
        <br />
      </Link>
    </li>
  )
};

export default PokemonIndexItem;
