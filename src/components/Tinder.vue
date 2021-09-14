<template>
  <div class="main">
    <w-notification
      v-show="showNotification"
      button="true"
      round
      bg-color="secondary"
      shadow
      transition="bounce"
    >
      You have a match!
    </w-notification>
    <MainAppContent @like="like" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import MainAppContent from './MainAppContent.vue';

export default {
  name: 'Tinder',
  data() {
    return {
      showNotification: false,
    };
  },
  components: {
    MainAppContent,
  },
  methods: {
    ...mapActions('pokemons', ['getPokemonsFromAPI']),
    like() {
      setTimeout(() => {
        console.log('notif');
        this.showNotification = true;
        setTimeout(() => {
          this.showNotification = false;
        }, 4000);
      }, 2000);
    },
  },
  created() {
    this.getPokemonsFromAPI();
  },
};
</script>

<style lang="scss" scoped></style>
