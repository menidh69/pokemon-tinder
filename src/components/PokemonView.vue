<template>
  <div class="view">
    <div v-if="currentPokemon">
      <pokemon-simple-card :pokeData="currentPokemon" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PokemonSimpleCard from '@/components/PokemonSimpleCard.vue';

export default {
  props: {
    pokemonData: {
      type: Object,
      default: null,
      required: true,
    },
  },
  components: {
    PokemonSimpleCard,
  },

  created() {
    if (this.pokemonData.url) {
      this.getPokemonObject();
    }
  },
  methods: {
    ...mapActions('pokemons', ['getAllPokemonData']),
    getPokemonObject() {
      this.getAllPokemonData(this.pokemonData.url);
    },
  },
  computed: {
    ...mapGetters('pokemons', ['currentPokemon']),
  },
};
</script>

<style lang="scss" scoped>
.view {
  background-color: white;
  width: max-content;
  height: 300px;
  width: 280px;
  margin: 10px auto;
  color: black;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
