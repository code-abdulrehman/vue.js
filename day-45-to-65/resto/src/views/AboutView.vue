<template>
  <div class="about">
    <AboutPage/>
  </div>
</template>
<script setup>
import AboutPage from '@/Pages/AboutPage.vue';


</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
