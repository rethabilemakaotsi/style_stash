<template>
  <div class="home">
    <div class="row justify-content-center">
      <div class="col-6">
        <p>TURN YOUR HOME INTO A DREAM.</p>
        <router-link :to="{  name: 'login'}"><button type="button" class="btn btn-lg py-2">LOGIN</button></router-link>
        <router-link :to="{ name: 'about'}"  ><button type="button" class="btn btn-lg mx-5 py-2 ">ABOUT</button></router-link>

      </div>
      <div class="col-5">
        <img class="home-img mt-5" src="https://i.ibb.co/HF382dh/Screenshot-2024-03-12-110329.png" alt="" width="100%">
      </div>
    </div>

  </div>
</template>

<script>

</script>
<style scoped>
.home{
  background-color: #252926;
  height: 100vh;
  
}
.btn{
  border: 2px solid 
  ;
  color: #af8c53;
  padding: 0 60px;
  border-radius: 25px;
  background-color: transparent;
  font-family: 'Courier New', Courier, monospace;

}
.mx-5{
  background-color: #af8c53;
  color: #252926;
}
p{
  font-family: 'DM Sans';
  font-size: 70px;
  color: #af8c53;
  margin-top: 150px;
}

</style>