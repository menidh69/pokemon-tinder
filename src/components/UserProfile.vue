<template>
  <div class="two-columns my8">
    <div v-if="userData">
      <h1 class="text-center">Trainer Information</h1>
      <div class="my4">
        <h3>Name</h3>
        <p>{{ userData.name }}</p>
      </div>
      <div class="my4">
        <h3>Email</h3>
        <p>{{ userData.email }}</p>
      </div>
    </div>
    <div>
      <h1 class="text-center">Pokemon prefrences</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'userProfile',
  computed: {
    ...mapGetters('users', ['userData']),
  },
};
</script>

<style lang="scss" scoped>
.two-columns {
  padding: 20px 100px;
  display: grid;
  grid-template-columns: 45% 45%;
  grid-template-rows: auto;
  grid-gap: 0 50px;
  text-align: left;
}
</style>
