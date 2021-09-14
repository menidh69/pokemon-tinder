<template>
  <div>
    <pokemon-table :pokemons="superLikedPokemons" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PokemonTable from '../components/PokemonTable.vue';

export default {
  name: 'SuperLiked',
  components: {
    PokemonTable,
  },
  computed: {
    ...mapGetters('usersPokemons', ['superLikedPokemons']),
  },
};
</script>

<style lang="scss" scoped></style>
