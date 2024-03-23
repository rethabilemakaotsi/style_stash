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
                  <i class="bi bi-pencil" data-bs-toggle="modal" :data-bs-target="'#editModal' + cartItem.cartID" @click="openEditModal(cartItem)"></i>
                  <i class="bi bi-trash3" data-bs-toggle="modal" :data-bs-target="'#deleteModal' + cartItem.cartID" @click="openDeleteModal(cartItem.cartID)"></i>
                </td> 
              </tr>
            </tbody>
          </table>
          <button class="btn btn-primary" @click="checkout">Checkout</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Edit Modal -->
  <div v-for="cartItem in cartItems" :key="'editModal' + cartItem.cartID" class="modal fade" :id="'editModal' + cartItem.cartID" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Product</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <input v-model="cartItem.cartID" class="w-100" type="text" placeholder=" Cart ID" required>
          <input v-model="cartItem.userID" class="w-100" type="text" placeholder="User ID" required>
          <input v-model="cartItem.quantity" class="w-100" type="number" placeholder="Quantity" required>
          <input v-model="cartItem.productPrice" class="w-100" type="text" placeholder="Product Price" required>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
          <button @click="editCartItem(cartItem)" type="button" class="btn">Update Product</button>
        </div>
      </div>
    </div>
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
    checkout() {
    
      this.showSweetAlert();
    },
    showSweetAlert() {
      Swal.fire({
        title: 'Thank You',
        text: 'Thank you for shopping with us!',
        icon: 'success'
      });
    },
    openEditModal(cartItem) {
      
      console.log('Opening edit modal for cart item:', cartItem);
    },
    editCartItem(cartItem) {
      // Perform edit cart item logic here
      // this.$store.dispatch('updateCartItem', cartItem);
      console.log('Updating cart item:', cartItem);
    },
    openDeleteModal(cartID) {
      // Handle opening the delete modal here
      console.log('Opening delete modal for cart ID:', cartID);
    },
    deleteCartItem(cartID) {
      // Perform delete cart item logic here
      // this.$store.dispatch('deleteCartItem', cartID);
      console.log('Deleting cart item:', cartID);
    },
  },
  mounted() {
    this.$store.dispatch('fetchCartItems');
  },
};
</script>
