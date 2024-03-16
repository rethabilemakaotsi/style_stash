<template>
    <div class="main">
        <div class="container">
            <div class="row">
                <div class="col">
                    <button class="btn">Sorting by price</button>
                </div>
                <div class="col">
                    <input type="text" placeholder="Search product by name" class="form-control">
                </div>
                <div class="col">
                    <button class="btn">Filter by items</button>
                </div>
            </div>
            <div class="products">
                <div class="row mx-5 gap-5 justify-content-center" v-if="products">
                    <Card v-for="product in products" :key="product.productID" class="mb-3">
                        <template #cardHeader>
                            <img :src="product.imageURL" class="car-img-top" alt="" height="200">
                            <h4 class="card-title">{{ product.productName }}</h4>
                        </template>
                        <template #cardBody>
                            <p class="card-text text-dark">
                                Amount: R{{ product.productPrice }}
                            </p>
                            <i class="bi bi-bag-heart" @click="addCart(product)"></i><br>
                            <router-link :to="{name: 'product', params: {id: product.productID}}" class="view">View More</router-link>
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
            product: null, // Define product data property
            searchTerm: '', // Add searchTerm data property for search functionality
            sortByPriceAsc: true // Add sortByPriceAsc data property to toggle sorting direction
        };
    },
    computed: {
        // Filtered and sorted products based on search term and sorting criteria
        filteredAndSortedProducts() {
            let filteredProducts = this.products;
            
            // Filter products based on search term
            if (this.searchTerm) {
                const searchTermLower = this.searchTerm.toLowerCase();
                filteredProducts = filteredProducts.filter(product => product.productName.toLowerCase().includes(searchTermLower));
            }
            
            // Sort products based on price
            filteredProducts.sort((a, b) => {
                if (this.sortByPriceAsc) {
                    return a.productPrice - b.productPrice;
                } else {
                    return b.productPrice - a.productPrice;
                }
            });

            return filteredProducts;
        }
    },
    mounted() {
        this.fetchProducts();
    },
    methods: {
        async fetchProducts() {
            try {
                await this.$store.dispatch('fetchProducts');
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
        addCart(product) {
            this.$store.dispatch('addCart', {
                product: product,
                quantity: 1
            });
        },
        // Method to toggle sorting direction by price
        toggleSortByPrice() {
            this.sortByPriceAsc = !this.sortByPriceAsc;
        },
        // Method to filter products by items
        filterByItems() {
            // Add your filtering logic here
            // For example: filter products by category or any other criteria
        }
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