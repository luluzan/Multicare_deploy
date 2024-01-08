<template>
<h1 class="slogan">¡Bienvenid@ a Multicare! ¿Qué quieres hacer?</h1>
 <div class="cards">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="card"
    >
      <img
        loading="lazy"
        :src="item.src"
        :alt="item.text"
        class="imgIcon"
      />
      <p>{{ item.text }}</p>
    </div>
 </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
 { text: 'Denuncia', src: '/assets/dino.svg' },
 { text: 'Información', src: 'public/i.svg' },
 { text: 'Otros recursos', src: 'public/pile.svg' },
]);
</script>

<style scoped>
h1{
  color: var(--color-amarillo);
  font-size: 2rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
}
.cards {
  display: inline;
  flex-wrap: wrap;
  gap: 10px;
}

.card {
  border-radius: 15px;
  background-color: var(--color-verde);
  display: flex;
  align-self:center;
  margin-top: 46px;
  justify-content:space-around;
  gap: 0px;
  padding: 5vw 2vh;
  max-width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
}

.imgIcon {
 width: 100px;
 height: 100px;
 object-fit: cover;
 border-radius: 50%;
 margin-bottom: 20px;
}

p{
  font-family: 'Pixelify Sans';
  font-style: bold;
  font-weight: 400;
  font-size: 2.5rem; 
  text-transform: uppercase;
  align-self:center;
  align-items: center;
  /* flex-grow: 1; */
  white-space: nowrap;
  display: flex;
}

@media screen and (max-width: 768px) {
 
  .card {
    max-width: 80%; 
    margin: 5vw 5vh; 
  }

  p {
    font-size: 1.4rem; 
  }
}
</style>



