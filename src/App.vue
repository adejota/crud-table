<template>
  <div id="app" class="h-screen w-screen p-4 flex items-center justify-center bg-full-black">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      darkMode: false,
    }
  },

  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode

      if (this.darkMode) {
        document.documentElement.classList.remove('dark')
      } else {
        document.documentElement.classList.add('dark')
      }
    },
  }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
