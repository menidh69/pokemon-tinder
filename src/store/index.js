import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import pokemonsModule from './modules/pokemons';
import usersPokemonsModule from './modules/usersPokemons';
import usersModule from './modules/users';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  modules: {
    pokemons: pokemonsModule,
    usersPokemons: usersPokemonsModule,
    users: usersModule,
  },
  state: {
    currentCard: 0,
  },
  mutations: {},
  actions: {},
  plugins: [vuexLocal.plugin],
});
