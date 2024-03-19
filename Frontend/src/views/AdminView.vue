<template>
    <div>
      <div class="container">
        <div class="row">
          <h2 class="display-4">
            <button class="btn btn-primary mr-2"
                    @click="showUsers = true; showProducts = false"
                    :class="{ 'active': showUsers }">
              Users
            </button>
            <button class="btn btn-primary"
                    @click="showProducts = true; showUsers = false"
                    :class="{ 'active': showProducts }">
              Products
            </button>
          </h2>
        </div>
        <div class="row" v-if="showUsers && users">
          <!-- Modal -->
          <div class="btn-tdn mb-2">
            <button class="btn btn-success edt-btn mr-6"
                    data-bs-toggle="modal" data-bs-target="#add">
              Add User
            </button>
          </div>
          <div class="modal fade" id="add" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Add Users</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <!-- Your form inputs for adding users -->
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
          <table class="table">
            <!-- User table -->
          </table>
        </div>
        <div class="row" v-if="showProducts && products">
          <!-- Product table and modal -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        model: {
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
      // Methods for CRUD operations will be handled by Vuex actions
    },
  }
  </script>
  
  <style scoped>
  .add-btn {
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
  .active {
    background-color: #4CAF50 !important;
    color: white !important;
  }
  </style>
  