import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";

import Navbar from "../components/Navbar";
import PokemonTable from "../components/PokemonTable";

export const Profile = ({ pokemonData }) => {
  const { name, sprites } = pokemonData;
  console.log(pokemonData);
  return (
    <>
      <Navbar hideSearch />
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding={5}
          >
            <Typography variant="h4">{name}</Typography>
            <Box display="flex" width="70%">
              <Box
                component="img"
                src={sprites.front_default}
                width="100%"
                height="100%"
              />
              <PokemonTable pokemonData={pokemonData} />
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
};
