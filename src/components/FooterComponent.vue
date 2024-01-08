<script setup>
  const links = [
    'Home',
    'Form',
    'Info',
    'Resources',
    'Contacto',
  ];
</script>

<template>
  <v-footer class="footerStyle">
    <v-row>   
      <v-col>
        &copy;  <strong>LuLuzan</strong> - {{ new Date().getFullYear() }}
      </v-col>
    </v-row>
    <br>
    <v-row class="secondRow">
      <router-link
        v-for="link in links"
        :key="link"
        :to="`/${link.toLowerCase()}`"
        variant="text"
        class="footerLink"
              >
        {{ link }}
      </router-link>
    </v-row>
    <v-row class="thirdRow">
      <RouterLink class="footerLink" to="/">Aviso Legal</RouterLink> | 
      <RouterLink class="footerLink" to="/">Privacidad</RouterLink> | 
      <RouterLink class="footerLink" to="/">Cookies</RouterLink>
    </v-row> 
 </v-footer>
</template>

<style scoped>
.footerStyle {
  background-color: var(--color-amarillo);
  bottom: 0; 
  width: 100vw;
  text-align: center;
  padding: 1rem;
  line-height:2.4;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  }
  .secondRow {
    gap: 5rem;
  }
  .footerLink {
    text-decoration: none;
    margin: 0 8px;
    color: black;
  }
</style>
