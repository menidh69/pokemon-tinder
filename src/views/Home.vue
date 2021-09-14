<template>
  <div class="home">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
      alt="pokemon"
      width="200px"
      class="my10"
    />
    <h2>Welcome to Pokemon Tinder!</h2>
    <Tinder />
  </div>
</template>

<script>
// @ is an alias to /src
import Tinder from '@/components/Tinder.vue';

export default {
  name: 'Home',
  components: {
    Tinder,
  },
};
</script>
