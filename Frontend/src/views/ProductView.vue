<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Product Details</h2>
        </div>
        <div class="row">
            <Card v-if="product">
                <template #cardHeader>
                    <img :src="product.imageURL" class="car-img-top" alt="" height="200">
                </template>
                <template #cardBody>
                    <p class="card-text text-dark  p-2">
                         {{ product.description }}
                    </p>
                    <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                        Amount: R{{ product.productPrice }}
                    </p>
                </template>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';
    export default {
        components:{
            Card,
        },
        computed: {
            product() {
                return this.$store.state.product
            }
        },
        mounted() {
            this.$store.dispatch('fetchProduct', this.$route.params)
        }
    }
</script>

<style scoped>

</style>