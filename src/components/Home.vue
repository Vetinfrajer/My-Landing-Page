<template>
  <div class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">Michal Vetiška</h1>
      <p class="hero-subtitle typing-animation">
        Junior <span class="dynamic-text">{{ currentText }}</span>
      </p>
      <div class="contact">
        <div class="logo-row">
          <a href="https://www.instagram.com/vetinfrajer/" target="_blank">
            <img src="../assets/instagram.png" alt="ig" class="logo">
          </a>
          <a href="https://www.linkedin.com/in/michal-veti%C5%A1ka-7b05b5262/" target="_blank">
            <img src="../assets/linkedin2.png" alt="linkedin" class="logo">
          </a>
          <a href="https://github.com/Vetinfrajer" target="_blank">
            <img src="../assets/github.png" alt="github" class="logo">
          </a>
        </div>
      </div>
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
@media only screen and (max-width: 429) {
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


.logo-row {
  display: flex;
  justify-content: flex-start;
  /* Adjusts spacing between logos */
  align-items: center;
  /* Align logos vertically */
}

.logo {
  max-width: 50px;
  /* Adjust size of logos */
  margin: 0 5px;
  /* Adds space around logos */
}

.ig-logo {
  width: 50px;
  height: 50px;
}

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

.hero-subtitle {
  font-size: 2rem;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  z-index: 1;
  padding: 0 30px;
  /* Increase padding for more space around text */
}

.hero-title {
  font-size: 6rem;
  /* Increase font size */
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
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
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
  border-radius: 10px;
}

.hero-image img {
  max-width: 120%;
  /* Increase max-width */
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
    font-size: 4rem;
    /* Adjust font size for small screens */
  }

  .typing-animation {
    font-size: 2rem;
    /* Increase font size for small screens */
  }

  .hero-image {
    order: -1;
    /* Move image to the top on small screens */
    margin-top: 20px;
  }
}
</style>