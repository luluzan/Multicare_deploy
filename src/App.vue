<script setup>
import { RouterView } from 'vue-router'
import NavBarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import WhatsappComponent from './components/WhatsappComponent.vue';
</script>

<template>
  <NavBarComponent />
  <main>
    <RouterView />
  </main>
  <WhatsappComponent />
  <FooterComponent />  
</template>

<style scoped>

</style>
