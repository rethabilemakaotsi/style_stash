<template>
    <div>
      <!-- Display cart items -->
      <div v-if="cart.length > 0">
        <div v-for="(item, index) in cart" :key="index">
          <p>{{ item.name }} - Quantity: {{ item.quantity }}</p>
          <button @click="removeItem(item.id)">Remove</button>
          <button @click="updateQuantity(item.id, item.quantity + 1)">Increase Quantity</button>
          <button @click="updateQuantity(item.id, item.quantity - 1)">Decrease Quantity</button>
        </div>
      </div>
      <div v-else>
        <p>Your cart is empty.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      // Access the cart state from Vuex
      cart() {
        return this.$store.state.cart;
      }
    },
    methods: {
      // Add item to cart
      addItem(item) {
        this.$store.dispatch('addCart', item);
      },
      // Remove item from cart
      removeItem(itemId) {
        this.$store.dispatch('removeCartItem', itemId);
      },
      // Update quantity of an item in cart
      updateQuantity(itemId, newQuantity) {
        this.$store.dispatch('updateCartItemQuantity', { itemId, quantity: newQuantity });
      }
    }
  };
  </script>
  