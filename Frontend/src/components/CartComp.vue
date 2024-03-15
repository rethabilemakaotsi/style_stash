<template>
    <div class="shopping-cart">
        <h1>Shopping Cart</h1>

<div class="shopping-cart">

  <div class="column-labels">
    <label class="product-image">Image</label>
    <label class="product-details">Product</label>
    <label class="product-price">Price</label>
    <label class="product-quantity">Quantity</label>
    <label class="product-removal">Remove</label>
    <label class="product-line-price">Total</label>
  </div>

  <div class="product">
    <div class="product-image">
      <img src="https://s.cdpn.io/3/dingo-dog-bones.jpg">
    </div>
    <div class="product-details">
      <div class="product-title">Dingo Dog Bones</div>
      <p class="product-description">The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.</p>
    </div>
    <div class="product-price">12.99</div>
    <div class="product-quantity">
      <input type="number" value="2" min="1">
    </div>
    <div class="product-removal">
      <button class="remove-product">
        Remove
      </button>
    </div>
    <div class="product-line-price">25.98</div>
  </div>

  <div class="product">
    <div class="product-image">
      <img src="https://s.cdpn.io/3/large-NutroNaturalChoiceAdultLambMealandRiceDryDogFood.png">
    </div>
    <div class="product-details">
      <div class="product-title">Nutro™ Adult Lamb and Rice Dog Food</div>
      <p class="product-description">Who doesn't like lamb and rice? We've all hit the halal cart at 3am while quasi-blackout after a night of binge drinking in Manhattan. Now it's your dog's turn!</p>
    </div>
    <div class="product-price">45.99</div>
    <div class="product-quantity">
      <input type="number" value="1" min="1">
    </div>
    <div class="product-removal">
      <button class="remove-product">
        Remove
      </button>
    </div>
    <div class="product-line-price">45.99</div>
  </div>

  <div class="totals">
    <div class="totals-item">
      <label>Subtotal</label>
      <div class="totals-value" id="cart-subtotal">71.97</div>
    </div>
    <div class="totals-item">
      <label>Tax (5%)</label>
      <div class="totals-value" id="cart-tax">3.60</div>
    </div>
    <div class="totals-item">
      <label>Shipping</label>
      <div class="totals-value" id="cart-shipping">15.00</div>
    </div>
    <div class="totals-item totals-item-total">
      <label>Grand Total</label>
      <div class="totals-value" id="cart-total">90.57</div>
    </div>
  </div>

  <button class="checkout">Checkout</button>

</div>

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        taxRate: 0.05,
        shippingRate: 15.00,
        fadeTime: 300,
        products: [
          {
            title: "Dingo Dog Bones",
            description: "The best dog bones of all time...",
            image: "https://s.cdpn.io/3/dingo-dog-bones.jpg",
            price: 12.99,
            quantity: 2,
            linePrice: 25.98
          },
          {
            title: "Nutro™ Adult Lamb and Rice Dog Food",
            description: "Who doesn't like lamb and rice?...",
            image: "https://s.cdpn.io/3/large-NutroNaturalChoiceAdultLambMealandRiceDryDogFood.png",
            price: 45.99,
            quantity: 1,
            linePrice: 45.99
          }
        ]
      };
    },
    methods: {
      updateQuantity(index) {
        let product = this.products[index];
        product.linePrice = product.price * product.quantity;
        this.recalculateCart();
      },
      removeItem(index) {
        this.products.splice(index, 1);
        this.recalculateCart();
      },
      recalculateCart() {
        let subtotal = 0;
        this.products.forEach(product => {
          subtotal += product.linePrice;
        });
        let tax = subtotal * this.taxRate;
        let shipping = subtotal > 0 ? this.shippingRate : 0;
        let total = subtotal + tax + shipping;
        this.$nextTick(() => {
          this.$refs.cartSubtotal.innerText = "Rands " + subtotal.toFixed(2);
          this.$refs.cartTax.innerText = "Rands " + tax.toFixed(2);
          this.$refs.cartShipping.innerText = "Rands " + shipping.toFixed(2);
          this.$refs.cartTotal.innerText = "Rands " + total.toFixed(2);
          if (total === 0) {
            this.$refs.checkout.style.display = "none";
          } else {
            this.$refs.checkout.style.display = "block";
          }
        });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Your existing CSS styles go here */
  </style>
  