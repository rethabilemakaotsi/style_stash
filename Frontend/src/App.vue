<template>
  
  <NavBar/>
  <main class="container-fluid">
    <router-view/>
  </main>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: #84af9b;
  
}
 nav ul{
  list-style: none;
  padding: 0;
  margin: 0;
 }
 nav ul li{
  display: inline-block;
  margin: 0 10px;
 }
 nav ul li a{
  display: block;
  padding: 10px;
  text-decoration: none;
 }
nav a {

  text-decoration: none;
  text-align: center;
  font-family: 'Inter', sans-serif;
  color: white;
  margin-right: 20px;
  text-transform: uppercase;
  
  
  
}

nav a.router-link-exact-active {
  color: black;
}


</style>

<script>
import NavBar from './components/NavBar.vue';
export default {
  components: {
    NavBar
  }
}
</script>
