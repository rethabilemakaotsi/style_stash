import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
import { cookies } from 'vue3-cookies'
import router from '@/router'
import AuthenticateUser from '@/service/AuthenticateUser'

const styleURL = 'https://style-stash.onrender.com/'

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    cart: null
  },
  getters: {
   cartItem: (state) => state.cart
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, value) {
      state.products = value
    },
    setProduct(state, value) {
      state.product = value
    },
    setCart(state, cartItems) {
      state.cart = cartItems
    },
    addToCart(state, product) {
      if (!state.cart) {
        state.cart = [];
      }
      state.cart.push(product);
    }
  },
  actions: {
    async register(context, payload) {
      try {
        let {msg} = (await axios.post(`${styleURL}users/register`, payload)).data;
        if(msg) {
          context.dispatch('fetchUsers');
          sweet({
            title: 'Registration',
            text: msg,
            icon: "success",
            timer: 2000
          });
          router.push({name: 'login'});
        }
      }
      catch(e) {
        sweet({
          title: 'Error',
          text: 'Please try again later',
          icon: "error",
          timer: 2000
        });
      }
    },
    async fetchUsers(context) {
      try {
        let {results} = (await axios.get(`${styleURL}users`)).data;
        if(results) {
          context.commit('setUsers', results);
        }
      }
      catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when retrieving users.',
          icon: "error",
          timer: 2000
        });
      }
    },
    async loginUser(context, updatedData) { // Renamed from 'login'
      try {
        console.log(updatedData);
        const response = await axios.post(`${styleURL}/customers/login`, updatedData);
        if (response?.status !== 200) {
          throw new Error(`Failed to login. Status: ${response?.status}`);
        }
        context.commit("setCustomer", updatedData);
      } catch (error) {
        console.error("Error occurred when logging in:", error);
      }
    },
    
    addToCart({ commit }, product) {
      commit("addToCart", product);
    },
    async fetchCarts(context) {
      try {
        let {results} = (await axios.get(`${styleURL}carts`)).data;
        if(results) {
          context.commit('setCarts', results);
        }
      }
      catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when retrieving users.',
          icon: "error",
          timer: 2000
        });
      }
    },
    async fetchUser(context, payload) {
      try {
        let {result} = (await axios.get(`${styleURL}users/${payload.id}`)).data;
        if(result) {
          context.commit('setUser', result);
        }
        else {
          sweet({
            title: 'Retrieving a single user',
            text: 'User was not found',
            icon: "info",
            timer: 2000
          });
        }
      }
      catch(e) {
        sweet({
          title: 'Error',
          text: 'A user was not found.',
          icon: "error",
          timer: 2000
        });
      }
    },
    async updateUser(context, payload) {
      try {
        let {msg} = await axios.patch(`${styleURL}users/update/${payload.id}`);
        if(msg) {
          context.dispatch('fetchUsers');
          sweet({
            title: 'Update user',
            text: msg,
            icon: "success",
            timer: 2000
          });
        }
      }
      catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when updating a user.',
          icon: "success",
          timer: 2000
        });
      }
    },
    async deleteUser(context, payload) {
      try {
        let {msg} = await axios.delete(`${styleURL}users/${payload.id}`);
        if(msg) {
          context.dispatch('fetchUsers');
          sweet({
            title: 'Delete user',
            text: msg,
            icon: "success",
            timer: 2000
          });
        }
      }
      catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when deleting a user.',
          icon: "error",
          timer: 2000
        });
      }
    },

    async login({ commit }, { email , userPwd}) { 
      try {
        const response = await axios.post(`${styleURL}users/login`, { email, userPwd});
        const { msg, token, result } = response.data;
        if(result) {
          commit('setUser', {msg, result});
          cookies.set('LegitUser', { msg, token, result });
          AuthenticateUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome back, ${result?.firstName} ${result?.lastName}`,
            icon: "success",
            timer: 2000
          });
          router.push({name: 'home'});
        }
        else {
          sweet({
            title: 'info',
            text: msg,
            icon: "info",
            timer: 2000
          });
        }
      }
      catch(e) {
        sweet({
          title: 'Error',
          text: 'Failed to login.',
          icon: "error",
          timer: 2000
        });
      }
    },
    async fetchProducts(context) {
      try {
        let {results} = (await axios.get(`${styleURL}products`)).data;
        if(results) {
          context.commit('setProducts', results);
        }
      }
      catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred retrieving products.',
          icon: "error",
          timer: 2000
        });
      }
    },
    async fetchProduct(context, payload) {
      try {
        let {result} = (await axios.get(`${styleURL}products/${payload.id}`)).data;
        if(result) {
          context.commit('setProduct', result);
        }
        else {
          sweet({
            title: 'Retrieving a single product',
            text: 'Product was not found',
            icon: "info",
            timer: 2000
          });
        }
      }
      catch(e) {
        sweet({
          title: 'Error',
          text: 'A product was not found.',
          icon: "error",
          timer: 2000
        });
      }
    },
  } // Added comma here
})
