<template>
    <div class="project-links">
      <div class="container">
        <h2 class="text-center mb-4">Moje Projekty</h2>
        <div class="projects-row">
          <!-- Rezervační systém -->
          <div class="project">
            <div class="project-image" @mouseover="hoveredProject = 'reservation'" @mouseleave="hoveredProject = null"></div>
            <h3 :class="['project-title', { 'hovered': hoveredProject === 'reservation' }]">Rezervační systém</h3>
            <p :class="['project-description', { 'shine-text': hoveredProject === 'reservation' }]">
              Work in progress
            </p>
          </div>
  
          <!-- Chatovací aplikace -->
          <div class="project clickable" @click="openChatApp" @mouseover="hoveredProject = 'chat'" @mouseleave="hoveredProject = null">
            <div class="project-image">
              <img src="@/assets/chatovaciappka.png" alt="Náhled Chatovací aplikace" style="width:100%;height:100%;object-fit:cover;border-radius:14px;" />
            </div>
            <h3 :class="['project-title', { 'hovered': hoveredProject === 'chat' }]">Chatovací aplikace</h3>
            <p :class="['project-description', { 'shine-text': hoveredProject === 'chat' }]">
              Klikněte pro zobrazení
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
  </template>
  
  <script>
  export default {
    name: "ProjectLinks",
    data() {
      return {
        hoveredProject: null,
      };
    },
    methods: {
      openChatApp() {
        window.open('https://6866fc231ae9dc36f8190f7b--vetinschatapp.netlify.app/', '_blank');
      },
    },
  };
  </script>
  
  <style scoped>
  .project-links {
    padding: 50px 20px;
    background: transparent;
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .projects-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    gap: 48px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .project {
    background: rgba(255,255,255,0.15);
    box-shadow: 0 8px 32px 0 #5ecbff;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 24px;
    border: 1.5px solid #5ecbff;
    padding: 30px 24px 20px 24px;
    transition: transform 0.4s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s;
    position: relative;
    min-width: 260px;
    max-width: 320px;
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  
  .project:hover {
    transform: scale(1.06) translateY(-8px);
    box-shadow: 0 0 48px #5ecbff, 0 8px 32px 0 #5ecbff;
  }
  
  .project.clickable {
    cursor: pointer;
  }
  
  .project.clickable:hover {
    transform: scale(1.06) translateY(-8px);
    box-shadow: 0 0 48px #5ecbff, 0 8px 32px 0 #5ecbff;
  }
  
  .project-image {
    width: 180px;
    height: 180px;
    background: rgba(255,255,255,0.10);
    box-shadow: 0 4px 16px 0 #5ecbff;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 18px;
    margin-bottom: 24px;
  }
  
  .project-title {
    font-size: 1.3em;
    color: #fff;
    margin: 10px 0 4px 0;
    transition: color 0.3s, text-shadow 0.3s;
    text-shadow: 0 2px 8px #5ecbff;
    position: relative;
    display: inline-block;
  }
  
  .project-title::after {
    content: '';
    display: block;
    width: 60%;
    height: 4px;
    background: linear-gradient(90deg, #5ecbff, #7b6cf6, #a18cd1);
    border-radius: 2px;
    margin: 0.2em auto 0 auto;
    opacity: 0.7;
  }
  
  .project-title.hovered {
    color: #5ecbff;
    animation: pulse 1s infinite alternate;
    text-shadow: 0 0 16px #5ecbff;
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
    color: #fff;
    font-size: 1em;
    padding: 0 10px;
    margin-top: 8px;
    opacity: 0.8;
  }
  
  .project-description.shine-text {
    background: linear-gradient(90deg, #fff, #5ecbff, #fff);
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
  
  h2 {
    color: #5ecbff;
    font-size: 2.2em;
    text-shadow: 0 2px 16px #5ecbff;
    position: relative;
    display: inline-block;
  }
  
  h2::after {
    content: '';
    display: block;
    width: 60%;
    height: 4px;
    background: linear-gradient(90deg, #5ecbff, #2575fc, #6a11cb);
    border-radius: 2px;
    margin: 0.2em auto 0 auto;
    opacity: 0.7;
  }
  
  @media (max-width: 1100px) {
    .projects-row {
      flex-direction: column;
      gap: 32px;
      align-items: center;
    }
    .project {
      min-width: 220px;
      max-width: 400px;
    }
  }
  </style>