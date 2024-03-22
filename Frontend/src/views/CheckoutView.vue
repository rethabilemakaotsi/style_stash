<template>
  <div class="container">
    <div class="row">
      <div class="card">
        <div class="card-body">
          
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Product ID</th>
                <th>Quantity</th>
                <th>Product Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cartItem in cartItems" :key="cartItem.cartID">
                <td>{{ cartItem.userID }}</td>
                <td>{{ cartItem.productID }}</td>
                <td>{{ cartItem.quantity }}</td>
                <td>R{{ cartItem.productPrice }}</td>
                <td>R{{ cartItem.total }}</td>
              <td class="d-flex justify-content-between">
                            <i class="bi bi-pencil"  data-bs-toggle="modal" :data-bs-target="'#edit' + cartItem.cartID" @click="editCartItem(cartItem.cartID)"> </i>
                            <i class="bi bi-trash3" data-bs-toggle="modal" :data-bs-target="'#delete' + cartItem.cartID" @click="deleteCartItem(cartItem.cartID)"></i></td> 
              
              </tr>
            </tbody>
          </table>
          <button class="btn btn-primary" @click="showSweetAlert">Pay</button>
        </div>
      </div>
    </div>
  </div>
  <div v-for="cartItem in cartItems" :key="'editModal' + cartItem.cartID" class="modal fade" :id="'editModal' + cartItem.cartID" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
    <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Product</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                              <input v-model="payload.cartID" class="w-100" type="text" placeholder=" cartID" required>
                              <input v-model="payload.userID" class="w-100" type="text" placeholder="userID" required>
                              <input  v-model="payload.quantity" class="w-100" type="numbers" placeholder="quantity" required>
                              <input v-model = "payload.productPrice" class="w-100" type="text" placeholder="productPrice" required>
                             
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                              <button  @click="editCartItem(cartItem.cartID)" type="button" class="btn">update product</button>
                          </div>
                      </div>

                  </div>
  </div>

  <div v-for="cartItem in cartItems" :key="'deleteModal' + cartItem.cartID" class="modal fade" :id="'deleteModal' + cartItem.cartID" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'CheckoutView',
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
  },
  methods: {
    showSweetAlert() {
      Swal.fire({
        title: 'Thank You',
        text: 'Thank you for shopping with us!',
        icon: 'success'
      });
    },
  },
  mounted() {
    this.$store.dispatch('fetchCartItems');
  },
};
</script>
