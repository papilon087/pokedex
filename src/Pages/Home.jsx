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

  const getPokemons = () => {
    var endPoints = [];
    for (var i = 1; i < 50; i++) {
      endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    var response = axios
      .all(endPoints.map((endPoint) => axios.get(endPoint)))
      .then((res) => setPokemons(res));
    return response;
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="false">
        <Grid container>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={3} key={key}>
              <PokemonCard name={pokemon.data.name} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
