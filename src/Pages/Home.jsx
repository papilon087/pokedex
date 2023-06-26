import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import { Container, Grid } from "@mui/material";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  //Função para confumir a API dos Pokemons
  const getPokemons = () => {
    var endPoints = [];
    for (var i = 1; i < 50; i++) {
      endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(endPoints.map((endPoint) => axios.get(endPoint)))
      .then((res) => setPokemons(res));
  };

  //Função para filtrar pokemons pelo comparativo das letras dos nomes
  const pokemonFilter = (name) => {
    var filteredPokemons = [];
    //Validando para mostrar todos os pokemons
    if (name === "") {
      getPokemons();
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }
    setPokemons(filteredPokemons);
  };

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />
      <Container maxWidth="false">
        <Grid container spacing={3}>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={2} key={key}>
              <PokemonCard
                name={pokemon.data.name}
                image={pokemon.data.sprites.front_default}
                types={pokemon.data.types}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
