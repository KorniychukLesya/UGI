<template>
  <nav>
    <router-link to="/">LIST OF POSTS</router-link> 
    <router-link to="/mapa">MAPA</router-link> 
  </nav>
  <router-view/>
</template>

<script>
import {  RouterView, RouterLink } from 'vue-router';
export default {
components: {
  RouterLink,
  RouterView
    },
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 200px;
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 24px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color:  var(--vt-c-blue);
}
</style>
