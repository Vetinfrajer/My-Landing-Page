<template>
    <div class="project-links">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <h2 class="text-center mb-4">Moje Projekty</h2>
  
            <!-- Rezervační systém -->
            <div class="project">
              <div class="project-image" @mouseover="hoveredProject = 'reservation'" @mouseleave="hoveredProject = null"></div>
              <h3 :class="['project-title', { 'hovered': hoveredProject === 'reservation' }]">Rezervační systém</h3>
              <p :class="['project-description', { 'shine-text': hoveredProject === 'reservation' }]">
                Work in progress
              </p>
            </div>
  
            <!-- Chatovací aplikace -->
            <div class="project">
              <div class="project-image" @mouseover="hoveredProject = 'chat'" @mouseleave="hoveredProject = null"></div>
              <h3 :class="['project-title', { 'hovered': hoveredProject === 'chat' }]">Chatovací aplikace</h3>
              <p :class="['project-description', { 'shine-text': hoveredProject === 'chat' }]">
                Work in progress
              </p>
            </div>
  
            <!-- Hra Flappy Bird -->
            <div class="project">
              <div class="project-image" @mouseover="hoveredProject = 'flappy'" @mouseleave="hoveredProject = null"></div>
              <h3 :class="['project-title', { 'hovered': hoveredProject === 'flappy' }]">Hra Flappy Bird</h3>
              <p :class="['project-description', { 'shine-text': hoveredProject === 'flappy' }]">
                Work in progress
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProjectLinks",
    data() {
      return {
        hoveredProject: null,
      };
    },
  };
  </script>
  
  <style scoped>
  .project-links {
    padding: 50px 20px;
    background-color: #000;
    color: #fff;
    text-align: center;
  }
  
  .project {
    margin-bottom: 40px;
  }
  
  .project-image {
    width: 200px;
    height: 200px;
    background-color: #444;
    position: relative;
    margin: 0 auto 20px;
    transition: transform 0.3s ease;
  }
  
  .project-image::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-radius: 2px;
    transition: border-color 0.3s ease, transform 0.3s ease;
  }
  
  .project-image:hover {
    transform: scale(1.05);
  }
  
  .project-image:hover::before {
    border-color: #d4af37;
    transform: scale(1.05);
  }
  
  .project-title {
    font-size: 1.5em;
    color: #fff;
    margin: 10px 0;
    transition: color 0.3s ease;
  }
  
  /* Animace změny barvy a pulzace */
  .project-title.hovered {
    color: #d4af37;
    animation: pulse 1s infinite alternate;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
  
  .project-description {
    color: #ccc;
    font-size: 1em;
    padding: 0 15px;
    position: relative;
    overflow: hidden;
  }
  
  /* Efekt lesknutí textu */
  .project-description.shine-text {
    background: linear-gradient(90deg, #ccc, #d4af37, #ccc);
    background-size: 200%;
    -webkit-background-clip: text;
    color: transparent;
    animation: shine-text 3s infinite;
  }
  
  @keyframes shine-text {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
  h2{
    color: #d4af37;
  }
  </style>