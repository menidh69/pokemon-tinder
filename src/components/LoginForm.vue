<template>
  <div>
    <form novalidate @submit.prevent="onSave">
      <div class="input-pair">
        <label class="textInput-label" for="emailInput">Email</label>
        <input
          class="text-input"
          type="text"
          v-model="v$.email.$model"
          id="emailInput"
        />
        <p class="error" v-if="v$.email.$error">
          {{ v$.email.$errors[0].$message }}
        </p>
      </div>
      <div class="input-pair">
        <label class="textInput-label" for="passwordInput">Password</label>
        <input
          class="text-input"
          type="password"
          v-model="v$.password.$model"
          id="passwordInput"
        />
        <p class="error" v-if="v$.password.$error">
          {{ v$.password.$errors[0].$message }}
        </p>
      </div>

      <w-button id="loginButton" type="submit" xl bg-color="red-light1"
        >Submit</w-button
      >
    </form>
    <!-- <div>
      <pre>{{ v$ }}</pre>
    </div> -->
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import { required, email } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  setup: () => ({ v$: useVuelidate() }),
  validations() {
    return {
      email: { required, email },
      password: { required },
    };
  },
  methods: {
    ...mapMutations('users', ['logIn']),
    async onSave() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
      this.logIn({ name: 'Ash Ketchum', email: this.email });
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
.textInput-label {
  display: block;
  margin: 2px 0;
}
.text-input {
  width: 100%;
  height: 35px;
  border-radius: 10px;
  border: none;
}
button {
  border-radius: 10px;
  width: 100%;
}

.error {
  color: red;
  font-weight: bold;
}

.input-pair {
  margin: 10px 0;
  justify-content: flex-start;
  text-align: left;
}
</style>
