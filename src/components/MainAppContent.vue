<template>
  <div>
    <div v-if="allPokemonsReference">
      <div>
        <transition mode="out-in" :name="pokeTransition">
          <pokemon-view
            :pokemon="currentPokemon"
            :key="allPokemonsReference[current].name"
            :pokemonData="allPokemonsReference[current]"
          />
        </transition>

        <div class="buttons-container">
          <button @click="reject">Reject</button>
          <button @click="superlike">Superlike</button>
          <button @click="like">like</button>
        </div>
      </div>
      <!-- <div>
        <pre>{{ currentPokemon }}</pre>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import PokemonView from './PokemonView.vue';

export default {
  name: 'MainAppContent',
  components: {
    PokemonView,
  },
  data() {
    return {
      pokeTransition: 'pokelike',
    };
  },

  methods: {
    ...mapActions('pokemons', ['getAllPokemonData']),
    ...mapMutations('usersPokemons', [
      'addToLiked',
      'addToSuperLiked',
      'addToRejected',
    ]),
    nextPokemon() {
      this.$store.state.currentCard += 1;
      console.log('next');
    },
    like() {
      this.addToLiked(this.currentPokemon);
      this.nextPokemon();
      this.pokeTransition = 'pokelike';
      this.$emit('like');
    },
    reject() {
      this.addToRejected(this.currentPokemon);
      this.pokeTransition = 'pokereject';
      this.nextPokemon();
    },
    superlike() {
      this.addToSuperLiked(this.currentPokemon);
      this.nextPokemon();
      this.pokeTransition = 'pokelike';
      this.$emit('like');
    },
  },
  computed: {
    ...mapGetters('pokemons', ['allPokemonsReference', 'currentPokemon']),
    current() {
      return this.$store.state.currentCard;
    },
  },
};
</script>

<style lang="scss" scoped>
.pokelike-enter-from {
  opacity: 0;
}
.pokelike-enter-to,
.pokelike-leave-from {
  opacity: 1;
}
.pokelike-enter-active,
.pokelike-leave-active {
  transition: all 0.5s ease;
}
.pokelike-leave-to {
  transform: translateX(200px);
  opacity: 0;
}

.pokereject-enter-from {
  opacity: 0;
}
.pokereject-enter-to,
.pokereject-leave-from {
  opacity: 1;
}
.pokereject-enter-active,
.pokereject-leave-active {
  transition: all 0.5s ease;
}
.pokereject-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}
</style>
