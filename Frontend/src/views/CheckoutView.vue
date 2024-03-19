<template>
  <div class="cart">
    <h1 class="cart-heading">Your Cart</h1>
    <router-link class="nav-link" to="/products">
      <button class="back-button">Add Other Product</button>
    </router-link>
    <table v-if="cartItems && cartItems.length > 0">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>IMAGE</th>
          <th>QUANTITY</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in cartItems" :key="index">
          <td>{{ product.productID }}</td>
          <td>{{ product.productName }}</td>
          <td><img :src="product.productImgURL" :alt="product.productImgURL" /></td>
          <td>{{ product.productQuantity }}</td>
          <td>R{{ formatAmount(product.productAmount) }}</td>
          <td>
            <button @click="removeItem(index)">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else class="empty-cart-text">Nothing in your cart</p>
    <p class="subtotal">Subtotal: R{{ calculateSubtotal().toFixed(1) }}</p>
    <button class="pay-button" @click="order">Order</button>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const cartItems = computed(() => store.getters.cartItems);

    const removeItem = (index) => {
      store.commit('removeFromCart', index);
    };

    const calculateSubtotal = () => {
      if (!cartItems.value) return 0;

      return cartItems.value.reduce(
        (total, product) => total + (product.productAmount * product.productQuantity),
        0
      );
    };

    const formatAmount = (amount) => {
      return parseFloat(amount).toFixed(1);
    };

   
    return {
      cartItems,
      removeItem,
      calculateSubtotal,
      formatAmount,
   
    };
  },
};
</script>