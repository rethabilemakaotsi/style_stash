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
                <td></td> 
              
              </tr>
            </tbody>
          </table>
          <button class="btn btn-primary" @click="showSweetAlert">Pay</button>
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
