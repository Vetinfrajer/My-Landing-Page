<template>
  <div>
    <Loader />
    <div v-if="!isloading">
      <div id="app">
        <Home />
      </div>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import Loader from './components/LoaderAnimation.vue';

export default {
  name: 'App',
  components: {
    Home,
    Loader
  },
  data(){
    return{
      isloading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isloading = false;
    }, 5000);
  },
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  text-align: center;
}
</style>
