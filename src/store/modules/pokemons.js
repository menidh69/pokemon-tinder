import axios from 'axios';

export default {
  namespaced: true,
  state() {
    return {
      pokemons: [],
      pokemonReference: null,
      currentPokemon: null,
    };
  },
  actions: {
    async getPokemonsFromAPI({ commit }) {
      const req = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'
      );
      commit('setPokemonsReference', req.data.results);
    },
    async getAllPokemonData({ commit }, url) {
      commit('emptyCurrentPokemon');
      const req = await axios.get(url);
      commit('addPokemonObject', req.data);
    },
  },
  getters: {
    allPokemonsReference(state) {
      return state.pokemonReference;
    },
    getAllPokemons(state) {
      return state.pokemons;
    },
    currentPokemon(state) {
      return state.currentPokemon;
    },
    getPokemon(state) {
      console.log(state.pokemons);
      return (id) =>
        state.pokemons.filter((p) => p.id.toString() === id.toString())[0];
    },
  },
  mutations: {
    setPokemonsReference(state, pokemons) {
      state.pokemonReference = pokemons;
    },
    addPokemonObject(state, pokemon) {
      console.log(pokemon);
      state.pokemons = [...state.pokemons, pokemon];
      state.currentPokemon = pokemon;
    },
    emptyCurrentPokemon(state) {
      state.currentPokemon = {};
    },
  },
};
