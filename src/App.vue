<script>
import LandingPage from './views/LandingPage.vue';
import Navbar from './components/Navbar.vue';
export default {
  components: {LandingPage, Navbar}
}
</script>

<template>
  <div class="app">
    <Navbar class="app__nav" />
    <LandingPage />
  </div>
</template>

<style scoped lang="scss">
// touch device
@media only screen and (max-width: 992px) {
  .app__nav {
    position: sticky;
    top: 0;
  }
}
</style>
