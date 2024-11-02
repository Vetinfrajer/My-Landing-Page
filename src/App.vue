<template>
  <div>
    <Loader />
    <div v-if="!isloading">
      <div id="app">
        <Home />
        <AboutMe />
        <ProjectLinks />
      </div>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import Loader from './components/LoaderAnimation.vue';
import AboutMe from './components/AboutMe.vue';
import ProjectLinks from './components/ProjectLinks.vue';

export default {
  name: 'App',
  components: {
    Home,
    Loader,
    ProjectLinks,
    AboutMe
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
