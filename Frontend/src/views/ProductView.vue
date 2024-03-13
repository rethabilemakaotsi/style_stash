<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Product Details</h2>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-4">
                <Card v-if="product">
                    <template #cardHeader>
                        <img :src="product.imageURL" class="card-img-top" alt="" height="200">
                    </template>
                </Card>
            </div>
            <div class="col-md-4">
                <p class="card-text ">{{ product.description }}</p>
                <button type="button" class="btn btn-lg py-2 text-white">LOGIN</button>
            </div>
            
        </div>
    </div>
</template>

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

<style scoped>

</style>
