<template>
    <div>
        
    </div>
    <div class="container ">
        <div class="row ">
            <div class="col">
                <input type="text" placeholder="Search product by name" class="form-control">
            </div>
            <div class="col">
                <button class="btn btn-success">Sorting by price</button>
            </div>
        </div>
        <div class="row mx-5 " v-if="products">
            <Card v-for="product in products" :key="product.productID" class="mb-3">
                <template #cardHeader>
                    <img :src="product.imageURL" class="car-img-top" alt="" height="200">
                    <h4 class="card-title">{{ product.productName }}</h4>
                </template>
                <template #cardBody>
                    <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
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




</style>