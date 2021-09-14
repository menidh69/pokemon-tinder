<template>
  <div>
    <form novalidate @submit.prevent="onSave">
      <label for="name">Name</label>
      <input type="text" v-model="userData.name" id="nameInput" />

      <label for="email">Email</label>
      <input type="text" v-model="userData.email" id="emailInput" />

      <input id="loginButton" type="submit" />
    </form>
    <div>
      <pre>{{ userData }}</pre>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import { required, email } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';

export default {
  data() {
    return {
      userData: { name: '', email: '' },
    };
  },
  setup: () => ({ v$: useVuelidate() }),
  validations() {
    return {
      userData: {
        name: { required },
        email: { required, email },
      },
    };
  },
  methods: {
    ...mapMutations('users', ['logIn']),
    onSave() {
      this.logIn(this.userData);
      console.log('saving');
      this.$router.push('/');
      // this.$emit('onError');
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 0 auto;
}
.input-pair {
  margin: 10px 0;
}
</style>
