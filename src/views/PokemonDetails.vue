<template>
  <div>
    <div v-if="pokemon">My name is {{ pokemon.name }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemon: {},
    };
  },
  created() {
    const pokeId = this.$route.params.id;
    console.log(pokeId);
    if (pokeId) {
      this.pokemon = this.$store.getters['pokemons/getPokemon'](pokeId);
    }
  },
};
</script>

<style lang="scss" scoped></style>
