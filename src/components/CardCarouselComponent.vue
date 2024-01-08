<template>
  <div class="card-carousel">
    <h2>{{ title }}</h2>
    <div class="cards-wrapper">
      <div class="card" v-for="(card, index) in cards" :key="index">
        <a :href="card.link" target="_blank" rel="noopener noreferrer">
          <img :src="card.image" :alt="card.text">
          <p>{{ card.text }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  cards: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.card-carousel {
  margin-bottom: 3%;
}

h2 {
  margin:3% auto 1% auto;
  font-size: 1.5rem;
}

.cards-wrapper {
  display: flex;
  overflow-x: auto;
  padding: 10px 0;
  gap: 0; 
}

.card a {
  text-decoration: none;
  color: inherit;
}
.card {
  width: 300px;
  margin: 0 3%;
  text-align: center; 
  border: none;
  padding: 10px;
  flex: 0 0 auto;
}

.card img {
  width: 100%; 
  height: 300px; 
  object-fit: cover; 

}

.card a {
  text-decoration: none;
  color: inherit;
}

.card-text {
  margin-top: 10px; 
}

.cards-wrapper::-webkit-scrollbar {
  width: 5vh; 
  background-color: var(--color-amarillo); 
}

.cards-wrapper::-webkit-scrollbar-thumb {
  background-color: var(--color-verde);
  border-radius: 30px 25px;

}

/* firefox */
.cards-wrapper {
  scrollbar-width:thick;
  scrollbar-color: var(--color-amarillo) var(--color-verde);
}

/* Media queries para dispositivos móviles */
@media screen and (max-width: 768px) {
  .card-carousel {
    margin-bottom: 3%; /* Ajustamos el margen inferior */
  }

  h2 {
    font-size: 1.2rem; /* Reducimos el tamaño del título */
  }

  .cards-wrapper {
    scrollbar-width: none; 
    overflow-x: auto;
    -webkit-overflow-scrolling: touch; 
  }

  .card {
    width: 50%; /* Ancho del 80% para ocupar más espacio en la pantalla */
    margin: 0;
  }
   .card img {
    width: 50%; 
    height: auto;
    margin: auto;
   }
}
</style>
