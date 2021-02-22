import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks"

import PokemonContainer from "./PokemonContainer/pokemonContainer"

import './App.css';


// the Apollo cache is set up automatically

export default function App() {

  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/',
  });
  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonContainer />
      </main>
    </ApolloProvider>
  );
}


