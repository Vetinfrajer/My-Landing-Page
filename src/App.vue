<template>
  <div class="snap-container">
    <div class="animated-bg"></div>
    <Loader />
    <transition name="sticky-nav-fade">
      <StickyNav v-if="!isloading" :activeSection="activeSection" @scrollToSection="scrollToSection" position="bottom" />
    </transition>
    <div v-if="!isloading">
      <section id="home" class="snap-section">
        <div id="app">
          <Home />
        </div>
      </section>
      <section id="about" class="snap-section">
        <AboutMe />
      </section>
      <section id="projects" class="snap-section">
        <ProjectLinks />
      </section>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import Loader from './components/LoaderAnimation.vue';
import AboutMe from './components/AboutMe.vue';
import ProjectLinks from './components/ProjectLinks.vue';
import StickyNav from './components/StickyNav.vue';

export default {
  name: 'App',
  components: {
    Home,
    Loader,
    ProjectLinks,
    AboutMe,
    StickyNav
  },
  data(){
    return{
      isloading: true,
      activeSection: 'home',
    };
  },
  mounted() {
    setTimeout(() => {
      this.isloading = false;
    }, 5000);
    window.addEventListener('scroll', this.handleActiveSectionOnScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleActiveSectionOnScroll);
  },
  methods: {
    scrollToSection(section) {
      this.activeSection = section;
      let el = null;
      if (section === 'about') {
        el = document.querySelector('#about');
      } else if (section === 'projects') {
        el = document.querySelector('#projects');
      } else if (section === 'home') {
        el = document.querySelector('#home');
      }
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    handleActiveSectionOnScroll() {
      const sectionIds = ['home', 'about', 'projects'];
      let closestSection = 'home';
      let minDistance = Infinity;
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (rect.top <= window.innerHeight / 2 && distance < minDistance) {
            minDistance = distance;
            closestSection = id;
          }
        }
      });
      this.activeSection = closestSection;
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

body {
  font-family: 'Montserrat', Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: transparent;
  overscroll-behavior-y: none;
}

.animated-bg {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(270deg, #232526, #414345, #7b6cf6, #a18cd1, #232526);
  background-size: 200% 200%;
  animation: gradientMove 16s ease-in-out infinite;
  overflow: hidden;
}
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

#app {
  text-align: center;
  position: relative;
}

h2, h1, .about-title, .project-title {
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 2.5em;
  position: relative;
  display: inline-block;
  margin-bottom: 0.5em;
}

h2::after, h1::after, .about-title::after, .project-title::after {
  content: '';
  display: block;
  width: 60%;
  height: 4px;
  background: linear-gradient(90deg, #5ecbff, #7b6cf6, #a18cd1);
  border-radius: 2px;
  margin: 0.2em auto 0 auto;
  opacity: 0.7;
}

.snap-container {
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}
.snap-section {
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.sticky-nav-fade-enter-active, .sticky-nav-fade-leave-active {
  transition: opacity 0.5s cubic-bezier(.25,.8,.25,1), transform 0.5s cubic-bezier(.25,.8,.25,1);
}
.sticky-nav-fade-enter-from, .sticky-nav-fade-leave-to {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
}
.sticky-nav-fade-enter-to, .sticky-nav-fade-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
