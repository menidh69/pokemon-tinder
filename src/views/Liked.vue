<template>
  <div>
    <pokemon-table :pokemons="likedPokemons" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PokemonTable from '../components/PokemonTable.vue';

export default {
  name: 'Liked',
  components: {
    PokemonTable,
  },
  computed: {
    ...mapGetters('usersPokemons', ['likedPokemons']),
  },
};
</script>

<style lang="scss" scoped></style>
