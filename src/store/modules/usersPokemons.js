export default {
  namespaced: true,
  state() {
    return {
      likedPokemons: [],
      rejectedPokemons: [],
      superLikedPokemons: [],
    };
  },
  actions: {},
  getters: {
    likedPokemons(state) {
      return state.likedPokemons;
    },
    rejectedPokemons(state) {
      return state.rejectedPokemons;
    },
    superLikedPokemons(state) {
      return state.superLikedPokemons;
    },
  },
  mutations: {
    addToLiked(state, pokemon) {
      state.likedPokemons = [...state.likedPokemons, pokemon];
    },
    addToRejected(state, pokemon) {
      state.rejectedPokemons = [...state.rejectedPokemons, pokemon];
    },
    addToSuperLiked(state, pokemon) {
      state.superLikedPokemons = [...state.superLikedPokemons, pokemon];
    },
  },
};
