
<script setup>
import { ref } from 'vue';
//error en servidor
//import { enviarFormularioPorEmail } from '../../servidor/nodemailer.js'; 
//const enviarFormularioPorEmail = require('../../servidor/nodemailer.js');


const date = ref('');
const victimName = ref('');
const agressorName = ref('');
const witnesses = ref('');
const location = ref('');
const details = ref('');
const comments = ref('');
const privacyPolicyAccepted = ref(false);
const isFormSubmitted = ref(false);
const showOverlay = ref(false);


const submitForm = async () => {
  if (!privacyPolicyAccepted.value) {
    alert('Debes aceptar la política de protección de datos personales para enviar el formulario');
    return;
     } 
 const formData = {
    date: date.value,
    victimName: victimName.value,
    agressorName: agressorName.value,
    witnesses: witnesses.value,
    location: location.value,
    details: details.value,
    comments: comments.value
 };

//  try {
//     await enviarFormularioPorEmail(formData);

//     isFormSubmitted.value = true;
//     showOverlay.value = true; 
//   } catch (error) {
//     console.error('Error al enviar el formulario:', error);
//   }
// };
try {
    await fetch('URL_DEL_SERVIDOR', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    isFormSubmitted.value = true;
    showOverlay.value = true; 
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
  }
};

const resetForm = () => {
 date.value = '';
 victimName.value = '';
 agressorName.value = '';
 witnesses.value = '';
 location.value = '';
 details.value = '';
 comments.value = '';
 privacyPolicyAccepted.value = false;
 isFormSubmitted.value = false;
showOverlay.value = true; 

};

const closeOverlay = () => {
  showOverlay.value = false;
};
</script>

<template>
<h1> Explica la situación</h1>
<!-- <form action="http://localhost:5173/enviar-formulario" method="POST" class="form-container" @submit.prevent="submitForm"> -->
   <form class="form-container" @submit.prevent="submitForm">

  <div class="sameRow-container">
    <label for="date">Fecha:</label>
    <input type="date" id="date" v-model="date" 
    required>
  </div> 
    <label for="victimName">Nombre de la víctima:</label>
    <input type="text" id="victimName" v-model="victimName" required>
    
    <label for="agressorName">Nombre del/los agresores:</label>
    <input type="text" id="agressorName" v-model="agressorName" required>
    
    <label for="location">Ubicación:</label>
    <input type="text" id="location" v-model="location" required>
    
    <label for="witnesses">Testigos:</label>
    <input type="text" id="witnesses" v-model="witnesses" required>
    
    <label for="details">¿Qué ha pasado?</label>
    <textarea id="details" placeholder="Describe aquí la situación" v-model="details" rows="4" cols="50"></textarea>
    
    <label for="comments">¿Quieres que te contactemos?</label>
    <textarea id="comments" placeholder="Dejanos tus datos y el medio de contacto que prefieras" v-model="comments" rows="4" cols="50"></textarea>
    
<div class="sameRow-container">
  <input type="checkbox" id="privacyPolicy" v-model="privacyPolicyAccepted" @change="validatePrivacyPolicy" required>
  <label :class="{'red-text': !privacyPolicyAccepted}" for="privacyPolicy">Acepto la política de protección de datos personales</label>
</div>
<span v-if="!privacyPolicyAccepted && isFormSubmitted" class="red-text">Hay que validar el checkbox</span>
 <div class="btns">
  <button type="reset" @click="resetForm">Borrar</button>
  <button type="submit">Enviar</button>
</div>
 <div v-if="showOverlay" class="overlay">
    <div class="overlay-content">
      <p v-if="isFormSubmitted">¡Formulario enviado!</p>
      <p v-else>Borrado exitoso</p>
      <button @click="closeOverlay">Cerrar</button>
    </div>
 </div>
</form>

</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
}
.form-container{
  margin-top: 6%;
  border-radius: 0.3125rem;
  border: 1.5px solid #6BA8E2;
  background: #F6EFDC;
  padding: 3rem;
}


.sameRow-container {
  display: flex;
  align-items: center;
   width: 100%;
}
.sameRow-container input,
.sameRow-container textarea {
  flex: 1; 
  height: 2.125rem; 
  border-radius: 0.25rem;
  border-bottom: 1.5px solid #60A38B;
  border-top: none;
  border-left: none;
  border-right: none;
  background: rgba(250, 243, 243, 0.75);
  box-sizing: border-box; 
  margin-bottom: 10px; 
}

label {
  margin-top: 3%;
  margin-right: 5px;
}
input{
  width: 17.0625rem;
  height: 2.125rem;
  border-radius: 0.25rem;
  border-bottom: 1.5px solid #60A38B;
  border-top: none;   
  border-right: none; 
  border-left: none; 
  background: rgba(250, 243, 243, 0.75);
}
textarea{
  border-radius: 0.25rem;
  border: 1.5px solid #60A38B;
  }

input:focus,
textarea:focus {
  outline:2px solid #6BA8E2;
}

textarea,
input[type="text"],
input[type="date"],
input[type="checkbox"] {
  width: 100%;
}

.btns {
  display: flex;
  justify-content: center !important; 
  gap: 10px; 
  margin-top: 20px; 
  }

button[type="reset"],
button[type="submit"]{
  border-radius: 0.625rem;
  border: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #FFF;
  font-family: Squada One;
  font-size: 1.25rem;
}

button[type="reset"]{
  background-color: #e89a9a;
  width: 8rem;
  height: 2.5rem;
}

button[type="submit"]{
  background-color: var(--color-verde);
  width: 13rem;
  height: 2.5rem;
  text-transform: uppercase;
}

@media (hover: hover) {
  button[type="reset"]:hover,
  button[type="submit"]:hover {
    background-color: #fabada;
    color:black;
  }
}
@media (hover: none) {
  button[type="reset"]:active,
  button[type="submit"]:active {
    background-color: #fabada;
    color: black;
   
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 999; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-content {
  
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  text-align: center;
}

 @media screen and (max-width: 768px) {
    .form-container {
      padding: 1rem; 
      max-width: 80vw;
      }

    .sameRow-container {
      flex-direction: column; 
       }

    .sameRow-container input,
    .sameRow-container textarea {
      width: 70%; 
    }

    label {
      margin-top: 0.5rem; 
    }

    .btns {
      flex-direction: column; 
      margin-top: 1rem;
    }

    button[type="reset"],
    button[type="submit"] {
      width: 100%; 
    }

    .overlay-content {
      max-width: 50%;
    }
  }





</style>