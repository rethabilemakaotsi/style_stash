<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
  

    <nav class="navbar  navbar-expand-lg navbar sticky-top text-center " id="Shift">
        <div class="container-fluid justify-content-center">

            
            <button class="navbar-toggler mt-2" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-center " id="navbarSupportedContent">
                <ul class="navbar-nav nav-underline  ms-auto text-center mb-lg-0 mx-end">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link ">Home </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link ">About </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/products" class="nav-link">Products </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/admin" class="nav-link">Admin </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link">Contact</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/checkout" class="nav-link">Cart </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link">Login </router-link>
                    </li>
                   
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navBarComp',
}
</script>

<style scoped>
.navbar{
  background-color: transparent;

}
.nav-link {
  color: #af8c53;
  font-family: 'forum';
  font-size: 15px;
  text-transform: uppercase;

}
</style>