<template>
  <div class="about-page">
    <div class="container">
      <h2 class="about-title">O mně</h2>

      <div class="row">
        <!-- První čtverec vlevo -->
        <div class="col-lg-6 col-md-12 mb-4">
          <div class="about-box about-box-left">
            <div class="col">
              <div class="row">
                <h2>Vzdělání</h2>
              </div>
              <div class="row">
                <p class="about-text">Střední průmyslová škola Třebíč</p>
                <p class="about-text">Informační Technologie</p>
                <p class="about-text">Zakončeno maturitou</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Druhý čtverec vpravo -->
        <div class="col-lg-6 col-md-12 mb-4">
          <div class="about-box about-box-right">
            <div class="col">
              <div class="row">
                <h2>Praxe</h2>
              </div>
              <div class="row">
                <p class="about-text">Navisys s.r.o.</p>
                <div class="row">
                  <p class="about-text">pozice Product Developer</p>
                </div>
                <div class="row">
                  <p class="about-text">6 měsíců</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Třetí čtverec vlevo -->
        <div class="col-lg-6 col-md-12 mb-4">
          <div class="about-box about-box-left">
            <div class="col">
              <div class="row">
                <h2>Znalosti</h2>
              </div>
              <div class="row">
                <p class="about-text">Python</p>
              </div>
              <div class="row">
                <p class="about-text">C++ & C#</p>
              </div>
              <div class="row">
                <p class="about-text">PHP (Laravel, Nette)</p>
              </div>
              <div class="row">
                <p class="about-text">JavaScript (Vue, React, Angular)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Čtvrtý čtverec vpravo -->
        <div class="col-lg-6 col-md-12 mb-4">
          <div class="about-box about-box-right">
            <div class="col">
              <div class="row">
                <h2>Dovednosti</h2>
              </div>
              <div class="row">
                <p class="about-text">Komunikace</p>
              </div>
              <div class="row">
                <p class="about-text">Analytické myšlení</p>
              </div>
              <div class="row">
                <p class="about-text">Týmová práce</p>
              </div>
              <div class="row">
                <p class="about-text">Řešení problémů</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>
.about-page {
  padding: 50px 20px;
  background-color: #000;
  color: #fff;
  text-align: center;
}

.about-title {
  color: #d4af37;
  font-size: 2.5em;
  margin-bottom: 40px;
}

.about-box {
  width: 100%;
  max-width: 800px;
  height: 300px;
  background-color: #1a1a1a;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-box-left {
  margin-left: auto;
}

.about-box-right {
  margin-right: auto;
}

.about-box:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 20px #d4af37;
}

/* Oranžový ohraničující efekt kolem čtverce */
.about-box::before {
  content: "";
  position: absolute;
  top: -4px;
  left: -4px;
  width: calc(100% + 8px);
  height: calc(100% + 8px);
  border: 2px solid transparent;
  border-radius: 4px;
  transition: border-color 0.3s ease;
}

.about-box:hover::before {
  border-color: #d4af37;
  animation: border-spin 2s linear infinite;
}

/* Text svítí oranžově */
.about-text {
  color: #fff;
  font-size: 1.2em;
  text-align: center;
  transition: color 0.3s ease;
}

.about-box:hover .about-text {
  color: #d4af37;
  animation: text-glow 1.5s infinite alternate;
}

/* Animace svítivého textu */
@keyframes text-glow {
  0% {
    color: #d4af37;
  }
  100% {
    color: #d4af37;
  }
}

/* Responsive styling */
@media (max-width: 992px) {
  .about-title {
    font-size: 2em;
  }
  .about-box {
    height: auto;
    padding: 20px;
  }
}

@media (max-width: 768px) {
  .about-title {
    font-size: 1.8em;
  }
  .about-text {
    font-size: 1em;
  }
}
</style>