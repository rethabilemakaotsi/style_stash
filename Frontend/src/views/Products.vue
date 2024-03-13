<template>
    <div class="main">
        <div class="container ">
        <div class="row ">
            <div class="col">
                <button class="btn ">Sorting by price</button>
            </div>
            <div class="col">
                <input type="text" placeholder="Search product by name" class="form-control" >
            </div>
            <div class="col">
                <button class="btn ">Sorting by price</button>
            </div>
        </div>
        <div class="row mx-5 gap-5 justify-content-center  " v-if="products">
            <Card v-for="product in products" :key="product.productID" class="mb-3 ">
                <template #cardHeader>
                    
                    <img :src="product.imageURL" class="car-img-top" alt="" height="200">
                    <h4 class="card-title">{{ product.productName }}</h4>
                </template>
                <template #cardBody>
                    <p class="card-text text-dark  p-2">
                        Amount: R{{ product.productPrice }}
                    </p>
                    <router-link :to="{name: 'products', params: {id: product.productID}}">View More</router-link>
                </template>
            </Card>
        </div>
        <div class="row" v-else>
            <p class="lead">Loading</p>
        </div>
    </div>
        
    </div>
    
</template>

<script>
import Card from '@/components/Card.vue';
export default {
    name: 'ProductsView',
    components: {
        Card
    },
    computed:{
        products(){
            return this.$store.state.products
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts')
    }
}
</script>

<style scoped>
.form-control{
    width: 290px;
    margin-left: 100px;

    
}
.btn {
  border: 2px solid #af8c53;
  color: #af8c53;
  padding:  10px;
  background-color: transparent;
  margin-left: 150px;

 

}
.main{
    height: 200vh;
    background-color:#252926 ;
}
.mb-3 {
  border: 2px solid #af8c53;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.card-title,
.card-text {
  text-transform: uppercase;
  font-family: 'DM sans';
  font-size: medium;
  color: #af8c53;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}



</style>