<template>
  <div class="game-screen">
    <!-- Content for the square goes here -->
    <div v-if="selectedOption === 'About'">
      <h3>About Me</h3>
      <p>
        Here's some information about me. I love coding and designing cool
        stuff!
      </p>
    </div>

    <div v-else-if="selectedOption === 'Experience'">
      <h3>Experience</h3>
      <p>I have experience in Vue.js, JavaScript, and web development.</p>
    </div>

    <div v-else-if="selectedOption === 'Projects'">
      <h3>Projects</h3>
      <p>Check out my projects on GitHub!</p>
      <div w3-include-html="index.html"></div>
    </div>

    <div v-else>
      <h3>Welcome!</h3>
      <p>Click on an option to learn more.</p>
    </div>
    <div class="scene">
    <!-- <div class="pixel-girl"> -->
      <img class="pixel-girl" src="../assets/images/dev-girl.png" />
    <!-- </div> -->
  </div>
  </div>
</template>

<script>
export default {
  name: "GameScreen",
  props: {
    selectedOption: {
      type: String,
      default: null,
    },
  },

  methods: {
    
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
@import url("https://fonts.googleapis.com/css2?family=DotGothic16&display=swap");
.game-screen {
  font-family: "DotGothic16", serif;
  width: 40vw;
  height: 30vw;
  background-color: #f0f0f0;
  border: 2px solid #ccc;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 10%;
  margin-left: 10%;
  flex-direction: row;
  align-items: center;
}

/* .scene {
  width: 230px;
  height: 200px;
  background: url('../assets/images/cactus-of-mexico.png') 0 90% no-repeat;
  background-size: cover 500% 400%;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  transition: background-position 15s linear
}

.scene:hover {
  background-position: 150% 90%;
} */

.scene {
  position: absolute;
  width: 30vw;
  height: 60px; /* Adjust based on your character size */
}

.pixel-girl {
  height: 6vh;
  position: absolute;
  bottom: 0;
  left: 0;
  animation: move 12s linear infinite;
}

@keyframes move {
  0% {
    left: 0;
    transform: scaleX(1);
  }
  49% {
    transform: scaleX(1); /* Keep facing right until just before the turn */
  }
  50% {
    left: calc(100% - 50px); /* Reach the right edge */
    transform: scaleX(-1); /* Flip to face left */
  }
  100% {
    left: 0;
    transform: scaleX(-1); /* Keep facing left while moving back */
  }
}
</style>