<template>
  <div>
    <div id="nav">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png"
        alt=""
        width="35px"
      />
      <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/about" class="about">About</router-link> |
        <router-link to="/liked">Liked</router-link> |
        <router-link to="/rejected">Rejected</router-link> |
        <router-link to="/super-liked">SuperLiked</router-link>
      </div>
      <div>
        <router-link to="/login" class="login" v-if="!isLoggedIn"
          >Log In</router-link
        >
        <div v-if="userData">
          <router-link to="/#" class="flex flex-row align-center">
            <img
              :src="userData.profileImg"
              width="35px"
              alt=""
              class="profileImg"
            />
            {{ userData.name }}
          </router-link>
          <button @click="logout" class="logout">LogOut</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  methods: {
    logout() {
      this.$store.commit('users/logOut');
      this.$router.push('/login');
    },
  },
  computed: {
    ...mapGetters('users', ['isLoggedIn', 'userData']),
  },
};
</script>

<style lang="scss" scoped>
$primary: #0075be;
$secondary: #ffcc00;

#nav {
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: $secondary;
    }
  }
}
.profileImg {
  border-radius: 17.5px;
  margin: 0 10px;
}
</style>
