<template>
  <nav :class="['main-nav', 'sticky-nav', position === 'bottom' ? 'sticky-nav-bottom' : 'sticky-nav-left']">
    <button :class="['nav-btn', { active: activeSection === 'home' } ]" @click="$emit('scrollToSection', 'home')">Home</button>
    <button :class="['nav-btn', { active: activeSection === 'about' } ]" @click="$emit('scrollToSection', 'about')">O mně</button>
    <button :class="['nav-btn', { active: activeSection === 'projects' } ]" @click="$emit('scrollToSection', 'projects')">Moje projekty</button>
  </nav>
</template>

<script>
export default {
  name: 'StickyNav',
  props: {
    activeSection: {
      type: String,
      required: true
    },
    position: {
      type: String,
      default: 'left'
    }
  }
};
</script>

<style scoped>
.sticky-nav {
  background: rgba(255,255,255,0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.27), 0 0 32px #5ecbff;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 32px;
  border: 1.5px solid #5ecbff;
  min-width: 120px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 24px 18px;
}
.sticky-nav-left {
  position: fixed;
  top: 50%;
  left: 32px;
  transform: translateY(-50%);
}
.sticky-nav-bottom {
  position: fixed;
  left: 50%;
  bottom: 24px;
  top: auto;
  transform: translateX(-50%);
  flex-direction: row;
  gap: 24px;
  padding: 18px 32px;
}
.nav-btn {
  background: rgba(255,255,255,0.12);
  color: #fff;
  border: none;
  outline: none;
  font-size: 1.1em;
  font-family: inherit;
  padding: 12px 24px;
  border-radius: 18px;
  margin: 0;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
  transition: background 0.3s, color 0.3s, transform 0.25s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s, filter 0.3s;
  position: relative;
  overflow: hidden;
}
.nav-btn.active, .nav-btn:focus {
  background: linear-gradient(90deg, #5ecbff, #7b6cf6, #a18cd1);
  color: #fff;
  font-weight: bold;
  box-shadow: 0 0 32px #5ecbff, 0 2px 12px rgba(0,0,0,0.18);
  transform: scale(1.10) translateY(-2px);
  filter: drop-shadow(0 0 16px #5ecbff) drop-shadow(0 0 32px #6a11cb);
}
</style> 