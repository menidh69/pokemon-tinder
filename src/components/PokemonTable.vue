<template>
  <div>
    <div v-if="pokemons">
      <div class="pokemon-table">
        <div v-for="pokemon in pokemons" :key="pokemon.name">
          <router-link :to="`/pokemons/${pokemon.name}`" custom>
            <pokemon-simple-card :pokeData="pokemon" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonSimpleCard from '@/components/PokemonSimpleCard.vue';

export default {
  components: {
    PokemonSimpleCard,
  },
  props: {
    pokemons: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.pokemon-table {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
