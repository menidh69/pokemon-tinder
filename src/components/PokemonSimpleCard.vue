<template>
  <div v-if="pokeData" class="view">
    <h2>My name is {{ pokeData.name }}</h2>

    <img
      v-show="!imgLoading"
      :src="pokeData.sprites.front_default"
      @load="setLoadingFalse"
      height="250px"
      width="250px"
    />
  </div>
</template>

<script>
export default {
  props: {
    pokeData: {
      type: Object,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      imgLoading: true,
    };
  },

  methods: {
    setLoadingFalse() {
      this.imgLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.view {
  background-color: white;
  width: max-content;
  height: 300px;
  width: 280px;
  margin: 10px auto;
  color: black;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
