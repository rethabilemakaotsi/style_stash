import { createStore } from 'vuex';
import axios from 'axios';
import sweet from 'sweetalert';
// import { Cookies } from 'vue3-cookies';
import router from '@/router';
import AuthenticateUser from '@/service/AuthenticateUser';
const RandURL = 'https://style-stash.onrender.com/';

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null
  },
  getters: {},
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts(state, value) {
      state.products = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
  },

  actions: {
    async register(context, payload) {
      try {
        let { msg } = await axios.post(`${RandURL}users/register`, payload);
        context.dispatch('fetchUsers');
        sweet({
          title: 'Register',
          text: msg,
          icon:'success',
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'An error appeared when registering.',
          icon: 'error',
          timer: 2000
        });
      }
    },

    async fetchUsers(context) {
      try {
        let { results } = (await axios.get(`${RandURL}users`)).data;
        if (results) {
          context.commit('setUsers', results);
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'An error appeared when retrieving users.',
          icon: 'error',
          timer: 2000
        });
      }
    },
    async fetchUser(context, payload) {
      try {
        let { result } = (await axios.get(`${RandURL}users/${payload.id}`))
        .data;
        if (result) {
          context.commit('setUser', result);
        } else {
          sweet({
            title: 'Getting a single user',
            text: 'User was not found',
            icon: 'info',
            timer: 2000
          });
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'The user was not found.',
          icon: 'error',
          timer: 2000
        });
      }
    },
    async updateUser(context, payload) {
      try {
        let { msg } = await (
          await axios.patch(`${RandURL}users/update/${payload.userID}`, payload)
          ).data;
       
          context.dispatch('fetchUsers');
          sweet({
            title: 'Update user',
            text: msg,
            icon: 'success',
            timer: 2000
          });
        }catch (e) {
        sweet({
          title: 'Error',
          text: 'An error appeared when updating a user.',
          icon: 'error',
          timer: 2000
        });
      }
    },
    async deleteUser(context, id) {
      try {
        let { msg } = await axios.delete(`${RandURL}users/delete/${id}`);
      
          context.dispatch('fetchUsers');
          sweet({
            title: 'Delete user',
            text: msg,
            icon: 'success',
            timer: 2000
          });
        } catch (e) {
        sweet({
          title: 'Error',
          text: 'An error appeared when deleting a user.',
          icon: 'error',
          timer: 2000
        });
      }
    },
    async addNewProduct(context, add) {
      try {
        let { msg } = await axios.post(`${RandURL}products/addProduct`, add);
        context.dispatch('fetchProducts');
        sweet({
          title: 'Adding Product',
          text: msg,
          icon: 'success',
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'An error appeared when adding a product.',
          icon: 'error',
          timer: 2000
        });
      }
    },
    async login(context, payload) {
      try {
        const { msg, token, result } = (await axios.post(`${RandURL}users/login`, payload)).data;
        if (result) {
          context.commit('setUser', { msg, result });
          // cookies.set('LegitUser', {
          //   msg,
          //   token,
          //   result
          // });
          AuthenticateUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome back, ${result?.firstName} ${result?.lastName}`,
            icon: 'success',
            timer: 2000
          });
          router.push({ name: 'home' });
        } else {
          sweet({
            title: 'Info',
            text: msg,
            icon: 'info',
            timer: 2000
          });
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'Failed to login.',
          icon: 'error',
          timer: 2000
        });
      }
    },
    async fetchProducts(context) {
      try {
        let { results } = (await axios.get(`${RandURL}products`)).data;
        if (results) {
          context.commit("setProducts", results);
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'An error appeared when retrieving products.',
          icon: 'error',
          timer: 2000
        });
      }
    },
    async updateProduct(context, payload) {
      try {
        let { msg } = await (
          await axios.patch(`${RandURL}products/update/${payload.productID}`, payload)).data;
        if (msg) {
          context.dispatch('fetchProducts');
          sweet({
            title: 'Update product',
            text: msg,
            icon:'success',
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'An error appeared when updating a product.',
          icon: 'error',
          timer: 2000
        });
      }
    },
    async deleteProduct(context, payload) {
      try {
        let { msg } = await axios.delete(`${RandURL}products/delete/${payload}`);
        if (msg) {
          context.dispatch('fetchProducts');
          sweet({
            title: 'Delete product',
            text: msg,
            icon:'success',
            timer: 2000
          });
        }
      } catch (e) {
        console.log(e.message);
        sweet({
          title: 'Error',
          text: 'An error appeared when deleting a product.',
          icon: 'error',
          timer: 2000
        });
      }
    },
    async fetchProduct(context, payload) {
      try {
        let { result } = await (await axios.get(`${RandURL}products/${payload.id}`)).data;
        if (result) {
          context.commit('setProduct', result);
        } else {
          sweet({
            title: 'Getting a single product',
            text: 'Product was not found',
            icon: 'info',
            timer: 2000
          });
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: e.message,
          icon: 'error',
          timer: 2000
        });
      }
    }
  },
  modules: {}
});
