<template>
  <div class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">Welcome to My Page</h1>
      <p class="hero-subtitle typing-animation">Professional Web Developer & Designer</p>
    </div>
    <div class="hero-image">
      <img src="../assets/jafrajer.png" alt="jafrajer">
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: 'HeroSection',
  };
  </script><style scoped>
.hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #1a1a1a;
  color: white;
  height: 100vh;
  padding: 20px;
  background-size: cover;
  background-position: center;
}

.hero-content {
  z-index: 1;
  max-width: 80%;
}

.hero-title {
  font-size: 4rem;
  font-weight: bold;
  color: #f0f0f0;
  margin-bottom: 0.5rem;
}

/* Typing and deleting animation */
.typing-animation {
  font-size: 1.5rem;
  color: #d4af37;
  margin-bottom: 2rem;
  border-right: 2px solid rgba(255, 255, 255, 0.75); /* Simulate cursor */
  white-space: nowrap;
  overflow: hidden;
  animation: typing 4s steps(40, end), 
             pause 4s, 
             deleting 3s steps(40, end);
  animation-delay: 0s, 4s, 8s; /* Delay between each phase */
  animation-iteration-count: infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%; /* Expand to the full text */
  }
}

@keyframes deleting {
  from {
    width: 100%;
  }
  to {
    width: 0; /* Shrink text back to 0 */
  }
}

@keyframes blink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: rgba(255, 255, 255, 0.75); /* Blinking effect for the cursor */
  }
}

.hero-image {
  margin-top: 20px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image img {
  max-width: 60%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
}

/* Responsive adjustments */
@media (min-width: 768px) {
  .hero-section {
    flex-direction: row;
    text-align: left;
  }

  .hero-content {
    flex: 1;
    padding-right: 40px;
  }

  .hero-title {
    font-size: 5rem;
  }

  .typing-animation {
    font-size: 1.75rem;
  }

  .hero-image {
    flex: 1;
    margin-top: 0;
  }

  .hero-image img {
    max-width: 90%;
  }
}
</style>