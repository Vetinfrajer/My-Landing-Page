<template>
  <div class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">Michal Vetiška</h1>
      <p class="hero-subtitle typing-animation">
        Junior <span class="dynamic-text">{{ currentText }}</span>
      </p>
    </div>
    <div class="hero-image">
      <img src="../assets/jafrajer.png" alt="jafrajer">
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      texts: [
        "Frontend Developer & Designer",
        "C++ & C# Programmer",
        "JavaScript and PHP Enjoyer",
        "Python Enthusiast"
      ],
      currentText: "",
      textIndex: 0,
      charIndex: 0,
      typingSpeed: 100,
      deleteSpeed: 50,
      pauseTime: 2000,
      isDeleting: false,
    };
  },
  mounted() {
    this.typingEffect();
  },
  methods: {
    typingEffect() {
      const currentStr = this.texts[this.textIndex];

      if (this.isDeleting) {
        this.currentText = currentStr.substring(0, this.charIndex--);
      } else {
        this.currentText = currentStr.substring(0, this.charIndex++);
      }

      if (!this.isDeleting && this.charIndex === currentStr.length) {
        setTimeout(() => (this.isDeleting = true), this.pauseTime);
      }

      if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.textIndex = (this.textIndex + 1) % this.texts.length;
      }

      const speed = this.isDeleting ? this.deleteSpeed : this.typingSpeed;
      setTimeout(this.typingEffect, speed);
    }
  }
};
</script>

<style scoped>
.hero-section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
  background-color: #1a1a1a;
  color: white;
  padding: 20px;
  background-size: cover;
  background-position: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  z-index: 1;
  padding: 0 20px;
}

.hero-title {
  font-size: 4rem;
  font-weight: bold;
  color: #f0f0f0;
  margin-bottom: 0.5rem;
}

.typing-animation .dynamic-text {
  border-right: 2px solid #d4af37;
  color: #d4af37;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .hero-section {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    text-align: center;
  }

  .hero-content {
    padding: 20px;
  }

  .hero-title {
    font-size: 3rem;
  }

  .typing-animation {
    font-size: 1.5rem;
  }

  .hero-image {
    order: -1; /* Move image to the top on small screens */
    margin-top: 20px;
  }
}
</style>