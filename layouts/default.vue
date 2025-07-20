// TODO: Set each color on dark mode and in light mode (ref: https://github.com/jurassicjs/nuxt3-dark-mode/blob/main/app.vue#L2)
<template>
  <div class="w-full h-full">
    <div class="w-full h-20vh flex flex-row items-center justify-between bg-green-light">
      <img class="logo" src="../assets/images/dev girl happy.png" />

      <div class="right_menu">
        <!-- Moon Icon (Visible in Light Mode) -->
        <!-- Loader (Visible in Dark Mode) -->
        <Icon
          v-if="isLightMode"
          name="pixelarticons:loader"
          :style="{ color: 'black', fontSize: '25px', marginRight: '5%' }"
          @click="toggleTheme"
        />
        <Icon
          v-else
          name="pixelarticons:moon"
          :style="{ color: 'black', fontSize: '25px', marginRight: '5%' }"
          @click="toggleTheme"
        />
        <Icon
          name="ei:navicon"
          :style="{
            color: 'black',
            fontSize: '30px',
            marginRight: '5%',
          }"
        />
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import {isLightMode} from "../assets/plugin/global"

export default defineComponent({
  setup() {

    const setColorTheme = (newTheme) => {
      useColorMode().preference = newTheme;
    };

    // Function to toggle between light and dark modes
    const toggleTheme = () => {
      isLightMode.value = !isLightMode.value;
      // Optionally, you can update the body class or other styles here
      if (isLightMode.value) {
        document.body.classList.remove("dark-mode");
        setColorTheme('dark')
      } else {
        document.body.classList.add("dark-mode");
        setColorTheme('light')
      }
    };

    return {
      isLightMode,
      toggleTheme,
    };
  },
});
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  margin: 0%;
  padding: 0%;
}

.header {
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #bff272;
}

.logo {
  padding: 8px;
  width: 5%;
  margin-left: 5%;
}

.right_menu {
  width: 8%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 5%;
}

/* Optional: Add dark mode styles */
.dark-mode {
  background-color: #333;
  color: white;
}
</style>