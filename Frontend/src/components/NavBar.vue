<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
  
     <nav class="navbar justify-content-center">
      <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
     <a class="navbar-brand  " href="">STYLE_STASH</a> 
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link "  >Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link "  >About</RouterLink>
          </li>
          <li>
            <RouterLink to="/products" class="nav-link "  >Products</RouterLink>
          </li>
          <li>
            <RouterLink to="/admin" class="nav-link "  >Admin</RouterLink>
          </li>
          <li>
            <RouterLink to="/checkout" class="nav-link "  >chart</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="nav-link "  >Contact</RouterLink>
          </li>
          <li>
            <RouterLink to="/login" class="nav-link "  >Login</RouterLink>
          </li>
          
         
          
  
  
  
          
        </ul>
        
      </div>
    </div>
  </nav>
      
  
    </nav>
  
     
  
   
  </template>
  
  
  
  <style scoped>
  /* .navbar{
    color: white;

  } */
  .nav-link{
    color: #af8c53;

  }
  .navbar-brand{
    margin-right: 590px;
    color: #af8c53;
  }
  
.navbar-toggler{
color:white;

}
  
  </style>
  
  
  
  <script>
  
  export default {
    name : 'NavBar'
  }
  
  
  </script>
  
  
  