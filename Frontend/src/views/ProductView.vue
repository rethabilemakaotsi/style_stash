<template>
    <div class="product bg-image mt-5">
        <div class="row justify-content-center align-content-center">
           <div class="col-7 text-white m-5">
               <div class="row" >
                   <div class="col-7 d-flex align-items-center" v-if="product">
                    <img :src="product.imageURL" class="car-img-top" alt="" height="380">
                   </div>
                   <div class="col-4 d-flex flex-column justify-content-between" id="divide" v-if="product">
                       <div class="d-flex flex-column align-items-start">
                           <h1 class="head">{{ product.productName }}</h1>
                           <p class="lead opacity-75">"{{ product.description }}"</p> 
                           <h3 class="product-price"></h3>
                           <hr class=" w-100">
                           <div class="mbc">
                               <p> Amount: R{{ product.productPrice }}</p>
                           </div>
                       </div>
                       <div class="d-flex flex-column align-items-start">
                           <button class="Portrait-btn p-2 ">Add to cart</button>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    </div>
   </template>
   <script>
   
   </script>
   <style scoped>
   .product{
    height: 100vh;
    background-color: #252926;
   }
   .mbc{
    color: #af8c53;
    font-family: 'Courier New', Courier, monospace;
   }
   .head{
    text-transform:uppercase;
  font-family: 'DM sans';
  font-size: xx-large;
  color: #af8c53;
   }
   .lead{
    font-size:medium;
    font-family: 'Courier New', Courier, monospace;
 
   }
   .vue{
       position: absolute;
       margin-left: 70rem;
       margin-top: 15rem;
       transform: rotate(90deg);   
   }
   
   .Portrait-btn {
       margin-bottom: 20px;
       border: 2px solid #af8c53;
    color: #af8c53;
  padding:  10px;
  background-color: transparent;
    font-family: 'Courier New', Courier, monospace;
   }
   .w-100{
    color: #af8c53;
    size: 10px;
   }
  
   
   .product {
       overflow-y: hidden;
       overflow-x: hidden;
   }
   </style>

<script>
import Card from '@/components/Card.vue';

export default {
    components: {
        Card,
    },
    computed: {
        product() {
            return this.$store.state.product;
        },
    },
    mounted() {
        this.$store.dispatch('fetchProduct', this.$route.params);
    },
};
</script>