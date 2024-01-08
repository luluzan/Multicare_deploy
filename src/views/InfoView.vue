<script setup>

const infoCards = [
  { src: '/imgs/info/noToBullying.jpg', text: 'Consejos frente al bullying' },
  { src: '/imgs/info/actAgainstBullying.jpg', text: 'Actúa contra el bullying' },
  ]

const iframes = [
  {src: "https://www.youtube.com/embed/xJ3B-zHMtok?si=HS2yd4YCAOpiIS3y", text: 'Lipdub: se buscan valientes'},
  { src: "https://www.youtube.com/embed/-vht-YhPt04?si=E7buZ77KJSigjzA4", text: 'EL DESPERTAR": un corto sobre el acoso escolar' }
  ]

</script>
<template>
  <div>
    <h1>Información</h1>
    <div class="card-container">
      <div v-for="(card, index) in infoCards" :key="index" class="card">
        <img :src="card.src" alt="Info Image" class="card-image">
        <p class="card-text">{{ card.text }}</p>
      </div>
    </div>
   <div class="iframe-container">
      <div v-for="(iframe, index) in iframes" :key="index" class="iframe-wrapper">
        <iframe :src="iframe.src" class="iframe" frameborder="0"></iframe>
        <p class="iframe-text">{{ iframe.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 50%; 
  padding: 10px;
  box-sizing: border-box;
}

.card-image {
  width: 100%; 
  height: auto; 
}

.card-text {
  text-align: center; 
}
.iframe-container {
  display: flex;
  flex-direction: column;
  align-items: center; 
}

.iframe-wrapper {
  width: 80%; 
  margin-bottom: 20px; 
  box-sizing: border-box;
}

.iframe {
  width: 90%; 
  height: 400px; 
}

.iframe-text {
  text-align: center; 
}
</style>
