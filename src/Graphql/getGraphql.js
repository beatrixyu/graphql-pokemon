import gql from 'graphql-tag';

//use prettier to make the query better and fetch the url from https://graphql-pokemon.now.sh/
export const GET_POKEMONS = gql`
    query pokemons($first: Int!) {
        pokemons(first: $first) {
                id
    name
    image
    height {
      minimum
      maximum
    }
    weight {
      minimum
      maximum
    }
    attacks {
      special {
        name
        damage
      }
    }


        }   
    }
`;