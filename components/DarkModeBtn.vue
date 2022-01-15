<template>
  <div>
    <i
      v-if="!this.darkMode"
      style="font-size:35px; color:var(--color-primary-hover);"
      class="fas fa-moon btn"
      @click="setDarkMode"
    ></i>
    <i
      v-else
      style="font-size:35px; color:var(--color-primary-hover);"
      class="fas fa-sun btn"
      @click="setLightMode"
    ></i>
  </div>
</template>

<script>
export default {
  components: {},
  mounted() {
    this.setDarkMode();
  },
  data() {
    return {
      darkMode: false,
      colorMode: "dark"
      //colorMode: ["system", "light", "dark"]
    };
  },
  methods: {
    setDarkMode() {
      this.darkMode = true;
      this.colorMode = "dark";
      this.$colorMode.preference = this.colorMode;
    },
    setLightMode() {
      this.darkMode = false;
      this.colorMode = "light";
      this.$colorMode.preference = this.colorMode;
    }
  }
};
</script>
