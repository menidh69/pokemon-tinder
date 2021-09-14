<template>
  <div>
    <h2>Login</h2>
    <Error :message="error" />

    <LoginForm @onError="setError" />
    <!-- <GoogleLogin /> -->
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
// import GoogleLogin from '@/components/GoogleLogin.vue';
import Error from '@/components/Error.vue';

export default {
  name: 'LogIn',
  components: {
    LoginForm,
    // GoogleLogin,
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
