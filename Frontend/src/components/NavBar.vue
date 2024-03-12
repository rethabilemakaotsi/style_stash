<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
  
     <nav class="navbar ">
      <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="">RM</a> -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link active"  >Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link active"  >About</RouterLink>
          </li>
          <li>
            <RouterLink to="/products" class="nav-link active"  >Products</RouterLink>
          </li>
          <li>
            <RouterLink to="/admin" class="nav-link active"  >Admin</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="nav-link active"  >Contact</RouterLink>
          </li>
          <li>
            <RouterLink to="/login" class="nav-link active"  >Login</RouterLink>
          </li>
          
         
          
  
  
  
          
        </ul>
        
      </div>
    </div>
  </nav>
      
  
    </nav>
  
     
  
   
  </template>
  
  
  
  <style scoped>
  .navbar-brand{
    font-family: bolder ;
  
  }
  
  
  
  </style>
  
  
  
  <script>
  
  export default {
    name : 'NavigationComp'
  }
  
  
  </script>
  
  
  <style scoped>
  
  
  
  
  
  </style>
  