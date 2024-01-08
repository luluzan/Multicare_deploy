<template>
<h1>Otros recursos contra el acoso</h1>
  <div class="resources-view">
    <CardCarouselComponent :cards="studentCards" title="Estudiantes" />
    <CardCarouselComponent :cards="parentCards" title="Padres" />
    <CardCarouselComponent :cards="teacherCards" title="Docentes" />
  </div>
</template>

<script setup>
import CardCarouselComponent from "../components/CardCarouselComponent.vue"

const studentCards = [
  // Datos de tarjetas de estudiantes
  { image: 'src/imgs/otrosRecursos/students/img1.jpg', text: 'Recursos y actividades', link: 'https://www.educaciontrespuntocero.com/recursos/acoso-escolar-o-bullying/' },
  { image: 'src/imgs/otrosRecursos/students/img2.jpg', text: 'Libros y pelis', link: 'https://www.educaciontrespuntocero.com/recursos/recursos-acoso-escolar/' },
  { image: 'src/imgs/otrosRecursos/students/img1.jpg', text: 'Recursos y actividades', link: 'https://www.educaciontrespuntocero.com/recursos/acoso-escolar-o-bullying/' },
  
];

const parentCards = [
  // Datos de tarjetas de padres
  { image: 'src/imgs/otrosRecursos/parents/guia.png', text: 'Guía Acoso escolar para padres y madres', link: 'https://www.educa2.madrid.org/web/educamadrid/principal/files/990ac803-050a-465a-9890-a65ce9e91a0f/CEAPA_2013_GUIA%20PARA%20PADRES%20ACOSO%20ESCOLAR.pdf?t=1487685405762' },
  { image: 'src/imgs/otrosRecursos/parents/nojuego.png', text: 'Yo a eso no juego. Bullying y ciberbullying', link: 'https://www.educa2.madrid.org/web/educamadrid/principal/files/a6076d91-b641-4b02-8b7b-346013e272d7/GUIA_SAVE-THE-CHILDREN-Acoso.escolar_2016.pdf' },
  { image: 'src/imgs/otrosRecursos/parents/guia.png', text: 'Guía Acoso escolar para padres y madres', link: 'https://www.educa2.madrid.org/web/educamadrid/principal/files/990ac803-050a-465a-9890-a65ce9e91a0f/CEAPA_2013_GUIA%20PARA%20PADRES%20ACOSO%20ESCOLAR.pdf?t=1487685405762' },

];

const teacherCards = [
  // Datos de tarjetas de docentes
  { image: 'src/imgs/otrosRecursos/teachers/safe.png', text: 'Guía SOS Ciberacoso', link: 'https://todofp.es/dam/jcr:6d300be2-e997-4212-ab85-470d3f95cd5b/sosciberbullyingeducadoresinteco-pdf.pdf' },
  { image: 'src/imgs/otrosRecursos/teachers/img_boy.png', text: 'Actividades para prevenir el acoso', link: 'https://www.educaciontrespuntocero.com/recursos/recursos-acoso-escolar/' },
  { image: 'src/imgs/otrosRecursos/teachers/no16.png', text: 'Protocolo actuación', link: 'https://aepae.es/protocolo-de-actuacion' },
  
];
</script>


<style>
h2{
  color: var(--Contraste, #EEB420);
font-family: Poppins;
font-size: 1.25rem;
font-style: normal;
font-weight: 900;
line-height: normal;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
