<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppHeader from './components/Header.vue'
  import AppFooter from './components/Footer.vue'

  export default {
    name: 'app',
    components: {
      'app-header': AppHeader,
      'app-footer': AppFooter
    }
  }
</script>

<style lang="scss">
  html {
    height: 100%;
    width: 100%;
  }
  body {
    margin: 0;

    height: 100%;
    width: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
  }
</style>
