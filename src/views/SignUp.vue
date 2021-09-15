<template>
  <div>
    <h1 class="mb8">Signup as a pokemon trainer!</h1>
    <Error :message="error" />

    <sign-up-form @onError="setError" />
    <!-- <GoogleLogin /> -->
  </div>
</template>

<script>
import SignUpForm from '@/components/SignUpForm.vue';
// import GoogleLogin from '@/components/GoogleLogin.vue';
import Error from '@/components/Error.vue';

export default {
  name: 'SignUp',
  components: {
    SignUpForm,
    Error,
  },
  data() {
    return {
      error: '',
    };
  },
  methods: {
    setError() {
      this.error = 'muy mal';
    },
  },
};
</script>

<style lang="scss" scoped></style>
