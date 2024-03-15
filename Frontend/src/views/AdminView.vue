<template>
    <body>
        <div class="container">
            <div class="row">
                <h2 class="display-4">
                    <button class="btn btn-primary mr-2" @click="showUsers = true; showProducts = false"
                        style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
                        Users
                    </button>
                    <button class="btn btn-primary mr-2" @click="showProducts = true; showUsers = false"
                        style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
                        Products
                    </button>
                </h2>
            </div>
            <div class="row" v-show="showUsers && users">
                <!-- Modal -->
                <div class="btn-tdn mb-2 ">
                    <button class="btn btn-success edt-btn mr-6" data-bs-toggle="modal" data-bs-target="#add">add
                        User</button>
                </div>
                <div class="modal fade" id="add" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-show="showModal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="add">Add Users</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
    <label for="">Product ID</label>
    <input id="" class="w-100" type="text" placeholder="Product ID">

    <label for="productName">Product Name</label>
    <input id="productName" class="w-100"  type="text" placeholder="Product Name">

    <label for="productPrice">Product Price</label>
    <input id="productPrice" class="w-100"  type="text" placeholder="Product Price">

    <label for="category">Product Category</label>
    <input id="category" class="w-100"  type="text" placeholder="Product Category">
</div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>

                    </div>
                </div>
                <table class="table table">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>User role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.userID">
                            <td>{{ user.userID }}</td>
                            <td>{{ user.userName }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.userPwd }}</td>
                            <td>{{ user.userRole }}</td>
                           
                            <td class="d-flex justify-content-between">
                                <button class="btn btn-success">Edit</button>
                                <button class="btn btn-success">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="row" v-show="showProducts && products">
                <!-- Modal -->
                <div class="btn-tdn mb-2 ">
                    <button class="btn btn-success edt-btn mr-6" data-bs-toggle="modal" data-bs-target="#addProductModal">Add
                        Product</button>
                </div>
                <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="add-btn modal-title fs-5" id="add">Add Product</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                          
                               <input id="productId" class="w-100" v-model="model.productID" type="text" placeholder="Product ID">

                          
                           <input id="productName" class="w-100" v-model="model.productName" type="text" placeholder="Product Name">

                                
                        <input id="productPrice" class="w-100" v-model="model.productPrice" type="text" placeholder="Product Price">

                           
                       <input id="category" class="w-100" v-model="model.category" type="text" placeholder="Product Category">
                     
                       <input id="category" class="w-100" v-model="model.imageUrl" type="text" placeholder="ProductURL">
                    
                       <input id="category" class="w-100" v-model="model.description" type="text" placeholder="Product description">
</div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary " @click="addProduct">Save changes</button>
                            </div>
                        </div>

                    </div>
                </div>

                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Product price</th>
                            <th>Product URL</th>
                            <th>Product Description</th>
                            <th>Product Category</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in products" :key="product.productID">
                            <td>{{ product.productID }}</td>
                            <td>{{ product.productName }}</td>
                            <td> R{{ product.productPrice }}</td>
                            <td> {{ product.imageUrl }}</td>
                            <td>{{ product.description }}</td>
                            <td>{{ product.category }}</td>
                            <td class="d-flex justify-content-between">
                                <button class="btn btn-success">Edit</button>
                                <button class="btn btn-success " @click="deleteProduct(product.productID)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </body>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            model:
             {
                productID: '',
                productName: '',
                productPrice: '',
                category: '',
                
            },
            showUsers: true,
            showProducts: false,
        };
    },
    computed: {
        users() {
            return this.$store.state.users;
        },
        products() {
            return this.$store.state.products;
        },
    },
    mounted() {
        this.$store.dispatch("fetchUsers");
        this.$store.dispatch("fetchProducts");
    },
    methods: {
        deleteProduct(productID){
            if(confirm("Are you sure you want to delete this product?")) {
                axios.delete(`https://style-stash.onrender.com/products/delete/${productID}`)
                     .then(res => {
                        alert(res.data.message)
                        alert('product deleted successfully')
                        this.$store.dispatch("fetchProducts");
                     })
                     .catch(function(error) {
                        if (error.response) {
                            if (error.response.status === 404) {
                                alert(error.response.data.message);
                            }
                        }
                     });
            }
        },
        addProduct() {
            axios.post('https://style-stash.onrender.com/products/addProduct', this.model)
                .then(res => {
                    alert(res.message)
                    alert('Product added successfully');
                    // $('#addProductModal').modal('hide');
                    this.model = {
                        productID: '',
                        productName: '',
                        productPrice: '',
                        category: ''
                    }
                    this.$store.dispatch("fetchProducts");
                })
                .catch(function(error) {
                        if (error.response) {
                            if (error.response.status === 404) {
                                alert(error.response.data.message);
                            }
                        }
                     });
        }
    }
}


</script>

<style scoped>
.add-btn{
    margin-left: 100%;
}
body {
    background-color: black;
}

.edt-btn {
    position: relative;
}

.btn-tdn {
    width: 30%;
}
</style> 