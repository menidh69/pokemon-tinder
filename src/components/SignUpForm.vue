<template>
  <div>
    <form novalidate @submit.prevent="onSave">
      <div id="signUpForm">
        <div>
          <h2>Become a pokemon trainer</h2>
          <div class="input-pair">
            <label class="textInput-label" for="name">Name</label>
            <input
              class="text-input"
              type="text"
              v-model="v$.name.$model"
              id="nameInput"
            />
            <p class="yellow-dark1" v-if="v$.name.$error">
              {{ v$.name.$errors[0].$message }}
            </p>
          </div>
          <div class="input-pair">
            <label class="textInput-label" for="email">Email</label>
            <input
              class="text-input"
              type="text"
              v-model="v$.email.$model"
              id="emailInput"
            />
            <p class="yellow-dark1" v-if="v$.email.$error">
              {{ v$.email.$errors[0].$message }}
            </p>
          </div>
          <div class="input-pair">
            <label class="textInput-label" for="password">Password</label>
            <input
              class="text-input"
              type="password"
              v-model="v$.password.$model"
              id="passwordInput"
            />
            <p class="yellow-dark1" v-if="v$.password.$error">
              {{ v$.password.$errors[0].$message }}
            </p>
          </div>
          <div class="input-pair">
            <label class="textInput-label" for="repeatPassword"
              >repeatPassword</label
            >
            <input
              class="text-input"
              type="password"
              v-model="v$.repeatPassword.$model"
              id="repeatPasswordInput"
            />
            <p class="yellow-dark1" v-if="v$.repeatPassword.$error">
              {{ v$.repeatPassword.$errors[0].$message }}
            </p>
          </div>
        </div>
        <div>
          <h2>Select your favorite pokemon types (only 2)</h2>
          <p v-if="v$.categories.$error" class="yellow-dark1">
            {{ v$.categories.$errors[0].$message }}
          </p>
          <div class="pokemon-types">
            <div v-for="type in types" :key="type.name" class="input-pair">
              <input
                type="checkbox"
                class="checkbox-input"
                :id="type.name"
                :value="type.name"
                v-model="v$.categories.$model"
              />
              <label :for="type.name">{{ type.name }}</label>
            </div>
          </div>
          <br />
        </div>
      </div>
      <w-button
        id="loginButton"
        type="submit"
        xl
        color="black"
        bg-color="yellow-dark1"
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
import { required, email, minLength, maxLength } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
import PokemonTypes from '@/utils/pokemonTypes.json';

export default {
  name: 'SignUpForm',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      categories: [],
      types: PokemonTypes,
    };
  },
  setup: () => ({ v$: useVuelidate() }),
  validations() {
    return {
      name: { required },
      email: { required, email },
      categories: {
        minLengthValue: minLength(2),
        maxLengthValue: maxLength(2),
      },
      password: { required },
      repeatPassword: { required },
    };
  },
  methods: {
    ...mapMutations('users', ['logIn']),
    async onSave() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
      this.logIn({ name: this.name, email: this.email });
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
  padding: 20px;
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
  width: 150px;
}

.error {
  color: red;
  font-weight: bold;
}
.checkbox-input {
  accent-color: yellow;
}

.input-pair {
  margin: 10px 0;
  justify-content: flex-start;
  text-align: left;
}

.pokemon-types {
  margin: 20px 0;
  display: grid;
  grid-template-columns: [first] 45% [second] 45%;
  grid-gap: 0 50px;
  grid-template-rows: auto;
}

#signUpForm {
  display: grid;
  grid-template-columns: [first] 45% [second] 45%;
  grid-gap: 50px;
  grid-template-rows: [first] auto;
}
</style>
