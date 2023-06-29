//Função para retornar os tipos dos pokemons
export const typeHandle = (types) => {
  if (types[1]) {
    return types[0].type.name + " | " + types[1].type.name;
  }
  return types[0].type.name;
};
