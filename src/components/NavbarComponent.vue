<script setup>
import { ref, onMounted } from "vue";

const toggleMenu = () => {
  const showMenu = ref(false);

  const windowWidth = ref(window.innerWidth);
  onMounted(() => {
    window.addEventListener("resize", () => {
      windowWidth.value = window.innerWidth;
    });
  });

  return { windowWidth, showMenu };
};

</script>

<template>
 <header>
    <div class="navbar">
      <div class="left-section">
<RouterLink to="/"><img src="/public/logo_.svg" class="img-fluid navbar__img" id="logo" alt="Logo Multicare" @click="toggleMenu"></RouterLink>       
 <div class="naming"><RouterLink class="naming" to="/">Multicare</RouterLink></div>
      </div>
      <nav class="right-section">
        <ul class="navbar__menu">
          <li class="navbar__menu--item">
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li class="navbar__menu--item">
            <RouterLink to="/form">Denuncia</RouterLink>
          </li>
          <li class="navbar__menu--item">
            <RouterLink to="/info">Información</RouterLink>
          </li>
          <li class="navbar__menu--item">
            <RouterLink to="/recursos">Recursos</RouterLink>
          </li>
        </ul>
       <input type="checkbox" id="menu-toggle" v-model="showMenu" @change="toggleMenu">
        <ul class="navbar__menu--hamburger">
          
          <li class="navbar__menu--item">
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li class="navbar__menu--item">
            <RouterLink to="/form">Denuncia</RouterLink>
          </li>
          <li class="navbar__menu--item">
            <RouterLink to="/info">Información</RouterLink>
          </li>
          <li class="navbar__menu--item">
            <RouterLink to="/recursos">Recursos</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
 </header>
</template>

<style scoped>
header {
  height: 18vh; 
  width: 100vw;
  background-color:var(--color-gris);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1); 
  display: flex;
  justify-content: center; 
  margin-top: 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 0 15rem;
  transition: 0.5s;
}

.left-section {
  display: flex;
  align-items: center;
}
.navbar__img {
  width: 8.5vw;
  margin-left: -11rem; 
}
.naming{
  text-transform: uppercase;
  font-size: 3.6rem;
  font-weight: 900;
  font-family: 'Pixelify Sans';
  font-style: bold;
  margin-left: 0.5rem;
  color: black;
}

hr {
  border: none;
  height: 2px;
  background-color: #d9d9d9;
  width: 100%;
}



.right-section {
  margin-left: auto;
  display: flex;
  justify-items:flex-start;
}



.navbar__menu {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  }

.navbar__menu--item a {
  color: black;
  text-decoration: none;
  display: inline-block;
  padding: 15px 20px;
  position: relative;
  transition: 0.3s;
  text-align: center;
}

.navbar__menu--item a:after {
  background: none repeat scroll 0 0 var(--color-verde);
  bottom: 0;
  content: "";
  display: block;
  height: 4px;
  left: 50%;
  position: absolute;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

.navbar__menu--item a:hover {
  color: var(--color-amarillo);
  letter-spacing: 2px;
  transition: 0.3s;
  font-weight: bold;
}

.navbar__menu--item a:hover:after {
  width: 100%;
  left: 0;
}
.navbar__menu--hamburger {
  display: none;
}

@media screen and (max-width: 768px) {
    
 .navbar__menu {
    display: none;
 }

 .navbar__menu--hamburger {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
 }

 #menu-toggle:checked + .navbar__menu--hamburger {
    display: block;
 }
 .navbar__img {
    width: 50px; 
    height: 50px;
     margin-left: 0;
     }

  .naming {
    font-size: 1.2rem; 
  }
  .left-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 1rem; 
  }

}

@media (min-width: 769px) {
 .navbar__menu--hamburger {
    display: none;
 }
}
</style>