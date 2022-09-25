<script setup>
import LandingPage from './views/LandingPage.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar class="nav" />
  <LandingPage />
</template>

<style scoped lang="scss">
// touch device
@media only screen and (max-width: 992px) {
  .nav {
    position: sticky;
    top: 0;
  }
}
</style>
