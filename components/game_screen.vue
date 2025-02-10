<template>
  <div class="game-screen">
    <!-- Content for the square goes here -->
    <div v-if="selectedOption === 'About'">
      <h3>About Me</h3>
      <p>Here's some information about me. I love coding and designing cool stuff!</p>
    </div>

    <div v-else-if="selectedOption === 'Experience'">
      <h3>Experience</h3>
      <p>I have experience in Vue.js, JavaScript, and web development.</p>
    </div>

    <div v-else-if="selectedOption === 'Projects'">
      <h3>Projects</h3>
      <p>Check out my projects on GitHub!</p>
    </div>

    <div v-else>
      <h3>Welcome!</h3>
      <p>Click on an option to learn more.</p>
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
};
</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
@import url("https://fonts.googleapis.com/css2?family=DotGothic16&display=swap");
.game-screen {
  font-family: "DotGothic16", serif;
  width: 30vw; 
  height: 30vw;
  background-color: #f0f0f0; 
  border: 2px solid #ccc; 
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  margin-bottom: 10%;
  margin-left: 10%;
  
  
}
</style>