<template>
  <w-app>
    <div id="app">
      <Header />
      <div class="content-container">
        <router-view />
      </div>
    </div>
  </w-app>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
$primary: #0075be;
$secondary: #ffcc00;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: $primary;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: [first] 100px [content] calc(100vh - 100px);
  height: 100vh;
}

.content-container {
  padding: 20px 0;
  img {
    background-color: transparent;
  }
}

.flex {
  display: flex;
}
.flex-row {
  flex-direction: row;
}
.align-center {
  align-items: center;
}
</style>
