<template>
    <div class="main">
        <div class="container">
            <div class="row">
                <div class="col-5 mt-4">
          <input type="text" v-model="searchQuery" placeholder="Search Product by name" class="form-control">
        </div>
        <div class="col-2 mt-4">
          <button class="btn btn-sm btn-custom" @click="toggleSortOrder">{{ ascendingOrder ? 'Sort by Price (Ascending)' : 'Sort by Price (Descending)' }}</button>
        </div>
      </div>
                <!-- <div class="col">
                    <button class="btn">Sorting by price</button>
                </div>
                <div class="col">
                    <input type="text" placeholder="Search product by name" class="form-control">
                </div>
                <div class="col">
                    <button class="btn">Filter by items</button>
                </div> -->
            <div class="products">
                <div class="row mx-5 gap-5 justify-content-center" v-if="products">
                    <Card v-for=" product in filteredProducts" :key="product.productID" class="mb-3">
                        <template #cardHeader>
                            <img :src=" product.imageURL" class="car-img-top" alt="" height="200">
                            <h4 class="card-title"> {{ product.productName }} </h4>
                        </template>
                        <template #cardBody>
                            <p class="card-text text-dark">
                                Amount: R{{ product.productPrice }}
                            </p>
                            <button class="bi bi-bag-heart" @click.prevent="addCart()"></button><br>
                            <router-link :to="{ name: 'product', params: {id: product.productID}}" class="view">View More</router-link>
                        </template>
                    </Card>
                </div>
                <div class="row" v-else>
                    <p class="lead">Loading</p>
                </div>
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
    data() {
    return {
      ascendingOrder: true,
      searchQuery: ''
    };
  },
    computed:{
        products(){
            return this.$store.state.products;
        },
        sortedProducts() {
      const sorted = [...this.products];
      sorted.sort((a, b) => (this.ascendingOrder ? a.productPrice - b.productPrice : b.productPrice - a.productPrice));
      return sorted;
    },
    filteredProducts() {
      return this.sortedProducts.filter(products =>
      products.productName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    toggleSortOrder() {
      this.ascendingOrder = !this.ascendingOrder;
    },
    addCart(){
        this.$store.dispatch('addToCart');
    }
    },
    mounted() {
        this.$store.dispatch('fetchProducts');

    }
}
</script>

<style scoped>
.view{
    color: #252926;
    font-family: 'DM sans';
}

.products{
    margin-top: 20px ;
}
.form-control{
    width: 290px;
    margin-left: 70px;
    /* margin-top: 30px; */
     
}


.btn {
  border: 2px solid #af8c53;
  color: #af8c53;
  padding:  10px;
  background-color: transparent;
  margin-left: 50px;
  margin-top: 50px;
  font-family: 'Courier New', Courier, monospace;
}
input{
    margin-top: 50px;
}
.main{
    height: auto;
    background-color:#252926 ;
}
.mb-3 {
  border: 2px solid #af8c53;
  border-radius: 10px;
  /* background-color: #fff; */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
/* .card-text{
    margin-bottom: 20px;
} */

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
  transition: transform 0.3s ease-in-out, ;
}



</style>    