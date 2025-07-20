<script>
import { defineComponent } from "@vue/composition-api";
import "~/assets/css/main.css";
import { isLightMode } from "../assets/plugin/global";
import GameScreen from "../components/game_screen";

// Define options for the list
const options = [
  { icon: "game-icons:cactus", label: "About" },
  { icon: "game-icons:cactus", label: "Experience" },
  { icon: "game-icons:cactus", label: "Projects" },
];

export default defineComponent({
  components: {
    GameScreen,
  },

  setup() {
    return {
      lightMode: isLightMode,
    };
  },
  data() {
    return {
      options,
      selectedOption: null,
    };
  },

  methods: {
    selectOption(option) {
      this.selectedOption = option; // Update the selected option
    },
  },
});
</script>

<template>
  <div class="h-full bg-[#ffffff] dark:bg-[#0D0D0D]">
    <div class="main">
      <!-- Text Container -->
      <div class="text_container">
        <!-- Page Title -->
        <div class="page_title">
          <h2
            class="dark:text-green-light animate__animated animate__flash animate__delay-0.5s padding:2"
          >
            Isabella Silas
          </h2>
        </div>

        <!-- Options List -->
        <div
          class="options_list dark:text-green-light animate__animated animate__flash animate__delay-0.5s"
        >
          <div
            v-for="(option, index) in options"
            :key="index"
            class="option_item"
            @click="selectOption(option.label)"
          >
            <Icon
              :name="option.icon"
            />
            <h3 class="option_item_label" :style="{cursor: 'pointer'}">{{ option.label }}</h3>
          </div>
        </div>
      </div>

      <!-- Display Section -->
      <div class="display">
        <!-- TODO: Add display component -->
        <GameScreen :selectedOption="selectedOption"/>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
@import url("https://fonts.googleapis.com/css2?family=DotGothic16&display=swap");

h2 {
  font-family: "Press Start 2P", serif;
  font-size: 120%;
}

.text_container {
  width: 30%;
  height: 25vh;
  flex-direction: column;
  align-items: left;
  justify-content: space-evenly;
  padding: 2%;
  margin-left: 13vw;
  margin-top: 25vh;
}

.options_list {
  width: 100%;
}

.option_item {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "DotGothic16", serif;
  margin: 5%;
}

.option_item_label {
  margin-left: 10%;
}

.main {
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: row;
  align-items: left;
}

.display {
  /* background: aqua; */
  width: 40vw;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>