import React from "react"
import { useQuery } from "@apollo/react-hooks"

import { GET_POKEMONS } from '../Graphql/getGraphql';
import { Pokemon } from "../Components/pokemon"

export default function PokemonContainer() {

    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { first: 10 },
    });

    return (
        <div className="pokemonContainer">
            {
                pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)
            }
        </div>
    )
}






