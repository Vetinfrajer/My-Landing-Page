<template>
  <div class="hero-section">
    <div class="bubbles-bg">
      <span v-for="n in 12" :key="n" :style="bubbleStyle()"></span>
    </div>
    <div class="hero-bubble">
      <div class="hero-content">
        <h1 class="hero-title">Michal Vetiška</h1>
        <p class="hero-subtitle typing-animation">
          <span :class="['dynamic-text', { fade }]">{{ currentText }}</span>
        </p>
        <p class="current-job">Momentálně pracuji v Synot Tech jako aplikační developer</p>
        <div class="contact">
          <div class="logo-row">
            <a href="https://www.instagram.com/vetinfrajer/" target="_blank">
              <img src="../assets/instagram.png" alt="ig" class="logo ig-logo">
            </a>
            <a href="https://www.linkedin.com/in/michal-veti%C5%A1ka-7b05b5262/" target="_blank">
              <img src="../assets/linkedin2.png" alt="linkedin" class="logo linkedin-logo">
            </a>
            <a href="https://github.com/Vetinfrajer" target="_blank">
              <img src="../assets/github.png" alt="github" class="logo github-logo">
            </a>
          </div>
        </div>
      </div>
      <div class="hero-image">
        <img src="../assets/jafrajer.png" alt="jafrajer">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      texts: [
        "Web Developer & UI Enthusiast",
        "Vue.js & React Specialist",
        "Design Driven Coder",
        "Modern Frontend Architect",
        "Building Smooth Digital Experiences",
        "Prompt Engineer"
      ],
      currentText: "",
      textIndex: 0,
      charIndex: 0,
      typingSpeed: 60,
      deleteSpeed: 30,
      pauseTime: 1800,
      isDeleting: false,
      fade: false,
      typingTimeout: null,
      activeSection: 'about',
      showStickyNav: false,
    };
  },
  mounted() {
    this.startTyping();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    if (this.typingTimeout) clearTimeout(this.typingTimeout);
  },
  methods: {
    startTyping() {
      this.currentText = "";
      this.charIndex = 0;
      this.isDeleting = false;
      this.fade = false;
      this.typingEffect();
    },
    typingEffect() {
      const currentStr = this.texts[this.textIndex];
      if (this.isDeleting) {
        this.currentText = currentStr.substring(0, this.charIndex--);
      } else {
        this.currentText = currentStr.substring(0, this.charIndex++);
      }
      if (!this.isDeleting && this.charIndex === currentStr.length + 1) {
        this.typingTimeout = setTimeout(() => {
          this.fade = true;
          this.typingTimeout = setTimeout(() => {
            this.isDeleting = true;
            this.fade = false;
            this.typingEffect();
          }, 350);
        }, this.pauseTime);
        return;
      } else if (this.isDeleting && this.charIndex === 0) {
        this.fade = true;
        this.typingTimeout = setTimeout(() => {
          this.isDeleting = false;
          this.textIndex = (this.textIndex + 1) % this.texts.length;
          this.fade = false;
          this.typingEffect();
        }, 350);
        return;
      }
      const speed = this.isDeleting ? this.deleteSpeed : this.typingSpeed;
      this.typingTimeout = setTimeout(this.typingEffect, speed);
    },
    bubbleStyle() {
      const size = Math.random() * 60 + 40;
      const left = Math.random() * 100;
      const duration = Math.random() * 10 + 8;
      const delay = Math.random() * 8;
      return {
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      };
    },
    scrollToSection(section) {
      this.activeSection = section;
      let el = null;
      if (section === 'about') {
        el = document.querySelector('.about-page');
      } else if (section === 'projects') {
        el = document.querySelector('.project-links');
      }
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    handleScroll() {
      const about = document.querySelector('.about-page');
      const projects = document.querySelector('.project-links');
      const scrollY = window.scrollY || window.pageYOffset;
      if (projects && scrollY + 100 >= projects.offsetTop) {
        this.activeSection = 'projects';
      } else if (about && scrollY + 100 >= about.offsetTop) {
        this.activeSection = 'about';
      } else {
        this.activeSection = '';
      }
      // Sticky nav zobrazení
      const hero = document.querySelector('.hero-section');
      if (hero && scrollY > hero.offsetHeight - 80) {
        this.showStickyNav = true;
      } else {
        this.showStickyNav = false;
      }
    }
  }
};
</script>

<style scoped>
@media only screen and (max-width: 450px) {
  .hero-subtitle {
    font-size: 1rem !important;
  }

  .typing-animation {
    font-size: 1rem !important;
  }

  .hero-title {
    font-size: 2rem !important;
  }
}

.hero-section {
  min-height: 100vh;
  width: 100vw;
  position: relative;
  color: white;
  padding: 0;
  background: transparent;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bubbles-bg {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  z-index: 0;
  pointer-events: none;
}
.bubbles-bg span {
  position: absolute;
  bottom: -100px;
  background: rgba(255,255,255,0.18);
  box-shadow: 0 4px 32px 0 rgba(31, 38, 135, 0.17);
  border-radius: 50%;
  filter: blur(1.5px);
  animation: bubbleUp linear infinite;
}
@keyframes bubbleUp {
  0% { transform: translateY(0) scale(1); opacity: 0.7; }
  80% { opacity: 0.5; }
  100% { transform: translateY(-110vh) scale(1.2); opacity: 0; }
}
.hero-bubble {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  width: 90vw;
  max-width: 1100px;
  min-height: 520px;
  background: rgba(255,255,255,0.13);
  box-shadow: 0 8px 48px 0 #5ecbff;
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-radius: 48px;
  border: 1.5px solid #5ecbff;
  margin: 60px auto 0 auto;
  position: relative;
  z-index: 2;
  transition: box-shadow 0.4s cubic-bezier(.25,.8,.25,1);
}
.hero-content {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  z-index: 2;
  padding: 48px 36px 36px 48px;
}
.hero-title {
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 24px #5ecbff, 0 2px 16px rgba(0,0,0,0.2);
}
.hero-subtitle {
  font-size: 1.6rem;
  color: #5ecbff;
  text-shadow: 0 2px 8px #5ecbff, 0 2px 8px rgba(0,0,0,0.1);
}
.typing-animation {
  position: relative;
  display: inline-block;
  min-height: 2.2em;
}
.typing-animation .dynamic-text {
  border-right: 2px solid #5ecbff;
  color: #5ecbff;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
  transition: opacity 0.35s cubic-bezier(.25,.8,.25,1), filter 0.35s cubic-bezier(.25,.8,.25,1);
}
.typing-animation .dynamic-text.fade {
  opacity: 0;
  filter: blur(4px);
}
.logo-row {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
}
.logo {
  max-width: 54px;
  margin: 0 14px;
  transition: transform 0.3s, box-shadow 0.3s, filter 0.3s;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.18);
  filter: drop-shadow(0 0 8px #5ecbff);
  animation: logoPulse 2.5s infinite alternate;
}
.logo:hover {
  transform: scale(1.18) rotate(-8deg);
  box-shadow: 0 4px 24px #5ecbff;
  filter: drop-shadow(0 0 16px #5ecbff);
}
@keyframes logoPulse {
  0% { filter: drop-shadow(0 0 8px #5ecbff); }
  100% { filter: drop-shadow(0 0 18px #fff); }
}
.hero-image {
  flex: 1 1 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 0 48px 48px 0;
  background: rgba(255,255,255,0.10);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.17);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 2;
  min-width: 320px;
}
.hero-image img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 0 48px 48px 0;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.5);
}
@media (max-width: 1100px) {
  .hero-bubble {
    flex-direction: column;
    align-items: center;
    min-height: 0;
    padding: 0;
  }
  .hero-content {
    padding: 36px 24px 24px 24px;
    text-align: center;
  }
  .hero-image {
    border-radius: 0 0 48px 48px;
    min-width: 0;
    margin-bottom: 24px;
  }
  .hero-image img {
    border-radius: 0 0 48px 48px;
  }
}
@media (max-width: 768px) {
  .hero-section {
    min-height: 100vh;
    align-items: flex-start;
  }
  .hero-bubble {
    width: 98vw;
    max-width: 100vw;
    border-radius: 32px;
    margin: 24px auto 0 auto;
  }
  .hero-content {
    padding: 24px 10px 10px 10px;
  }
  .hero-title {
    font-size: 2.2rem;
  }
  .hero-image {
    border-radius: 0 0 32px 32px;
  }
  .hero-image img {
    border-radius: 0 0 32px 32px;
  }
}
.main-nav {
  display: flex;
  justify-content: flex-start;
  gap: 24px;
  margin: 36px 0 0 0;
  z-index: 3;
  transition: all 0.4s cubic-bezier(.25,.8,.25,1);
}
.sticky-nav {
  position: fixed;
  top: 50%;
  left: 32px;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.27), 0 0 32px #5ecbff;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 32px;
  border: 1.5px solid #5ecbff;
  padding: 12px 48px;
  min-width: 340px;
  justify-content: center;
  align-items: center;
  animation: stickyPop 0.6s cubic-bezier(.25,.8,.25,1);
  box-sizing: border-box;
  z-index: 1000;
  flex-direction: column;
  gap: 18px;
}
.sticky-nav-bottom {
  top: 50% !important;
  left: 32px !important;
  bottom: auto !important;
  transform: translateY(-50%) !important;
}
@keyframes stickyPop {
  0% { opacity: 0; transform: translateX(-50%) scale(0.8) translateY(40px); }
  100% { opacity: 1; transform: translateX(-50%) scale(1) translateY(0); }
}
.nav-btn {
  background: rgba(255,255,255,0.12);
  color: #fff;
  border: none;
  outline: none;
  font-size: 1.2em;
  font-family: inherit;
  padding: 12px 32px;
  border-radius: 18px;
  margin: 0;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
  transition: background 0.3s, color 0.3s, transform 0.25s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s, filter 0.3s;
  position: relative;
  overflow: hidden;
}
.nav-btn.active, .nav-btn:focus {
  background: linear-gradient(90deg, #5ecbff, #2575fc, #6a11cb);
  color: #fff;
  font-weight: bold;
  box-shadow: 0 0 32px #5ecbff, 0 2px 12px rgba(0,0,0,0.18);
  transform: scale(1.10) translateY(-2px);
  filter: drop-shadow(0 0 16px #5ecbff) drop-shadow(0 0 32px #6a11cb);
}
.nav-btn::after {
  content: '';
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0;
  height: 0;
  background: rgba(255,255,255,0.25);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.4s cubic-bezier(.25,.8,.25,1), height 0.4s cubic-bezier(.25,.8,.25,1), opacity 0.4s;
  opacity: 0;
  pointer-events: none;
  z-index: 1;
}
.nav-btn:active::after {
  width: 180%;
  height: 400%;
  opacity: 0.2;
  transition: 0s;
}
.nav-fade-enter-active, .nav-fade-leave-active {
  transition: opacity 0.4s cubic-bezier(.25,.8,.25,1);
}
.nav-fade-enter-from, .nav-fade-leave-to {
  opacity: 0;
}
.current-job {
  color: #fff;
  font-size: 1.1rem;
  margin: 12px 0 18px 0;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-shadow: 0 0 12px #fff, 0 0 24px #23252644;
}
</style>