<!-- Cart.vue -->
<template>
  <div>
    <h2>Shopping Cart</h2>
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cart" :key="index">
          <td>{{ item.productName }}</td>
          <td>{{ item.productPrice }}</td>
          <td>
            <input type="number" v-model="item.quantity" @change="updateQuantity(index)">
          </td>
          <td>{{ calculateTotal(item) }}</td>
          <td>
            <button @click="removeFromCart(index)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>Total Price: {{ total }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [], // Array to store cart items
    };
  },
  computed: {
    total() {
      // Calculate total price of items in cart
      return this.cart.reduce((total, item) => total + (item.productPrice * item.quantity), 0);
    },
  },
  methods: {
    updateQuantity(index) {
      // Update quantity of item in cart
      const quantity = parseInt(this.cart[index].quantity);
      if (quantity <= 0) {
        this.removeFromCart(index);
      } else {
        this.cart[index].quantity = quantity;
      }
    },
    removeFromCart(index) {
      // Remove item from cart
      this.cart.splice(index, 1);
    },
    calculateTotal(item) {
      // Calculate total price for a specific item
      return item.productPrice * item.quantity;
    },
  },
};
</script>

<style scoped>
/* Add any custom styles for your cart component here */
</style>
