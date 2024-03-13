<template>
  
  <NavBar/>
  <main class="lead">
    <router-view/>
    <FooterComp/>
  </main>

  

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
   /* color: #2c3e50; */
   color: white;

  background-color: #252926;
  height: 100vh;
  /* width: 100vh; */
}

nav {
  padding: 30px;
  justify-content: end;
  /* background-color: #252926; */
  /* color: aqua; */

  
}
 nav ul{
  list-style: none;
  padding: 0;
  margin: 0;
  /* color: aqua; */

 }
 nav ul li{
  display: inline-block;
  margin: 0 10px;
  /* color: aqua; */

 }
 nav ul li a{
  display: block;
  padding: 10px;
  text-decoration: none;
  /* color: aqua; */

 }
nav a {

  text-decoration: none;
  text-align: center;
  font-family: 'Inter', sans-serif;
  margin-right: 20px;
  text-transform: uppercase;
  /* color: aqua; */
  
  
  
}

/* nav a.router-link-exact{
  color: white;
} */


</style>

<script>
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  components: {
    NavBar,
    FooterComp,
  }
}
</script>
