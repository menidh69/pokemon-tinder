<template>
  <div>
    <pokemon-table :pokemons="rejectedPokemons" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PokemonTable from '../components/PokemonTable.vue';

export default {
  name: 'Rejected',
  components: {
    PokemonTable,
  },
  computed: {
    ...mapGetters('usersPokemons', ['rejectedPokemons']),
  },
};
</script>

<style lang="scss" scoped></style>
