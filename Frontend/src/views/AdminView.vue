<template>
      <div class="container">
          <div class="row">
              <h2 class="display-4">
                  <button class="btn btn-primary mr-2" @click="showUsers = true; showProducts = false"
                      style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
                      Users
                  </button>
                  <button class="btn btn-primary mr-2" @click="showProducts = true; showUsers = false"
                      style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
                      Products
                  </button>
              </h2>
          </div>
          <div class="row" v-show="showUsers && users">
              <!--user Modal -->
              <div class="btn-tdn mb-2 ">
                  <button class="btn btn-success edt-btn mr-6" data-bs-toggle="modal" data-bs-target="#addUser">add
                      User</button>
              </div>
              <div class="modal fade" id="addUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h1 class="modal-title fs-5" id="add">Add Users</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                              <input v-model="payload.firstname" class="w-100" type="text" placeholder=" First Name" required>
                              <input v-model="payload.lastname" class="w-100" type="text" placeholder=" Last Name" required>
                              <input v-model="payload.username" class="w-100" type="text" placeholder=" Age" required>
                              <input v-model="payload.email" class="w-100" type="text" placeholder="gender" required>
                              <input v-model="payload.userRole" class="w-100" type="text" placeholder="Email" required>
                              
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button  @click="register()" type="button" class="btn btn-primary">Save changes</button>
                          </div>
                      </div>

                  </div>
              </div>

              <!--user edit modal -->
             
              <div class="modal fade" :id="'#edit' + user.userID" tabindex="-1" aria-labelledby="edit" aria-hidden="true"
              v-for="user in users"  :key="user.userID">
                  <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h1 class="modal-title fs-5" id="add">Edit User</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                              <input v-model="payload.firstname" class="w-100" type="text" placeholder=" First Name" required>
                              <input v-model="payload.lastname" class="w-100" type="text" placeholder=" Last Name" required>
                              <input v-model="payload.username" class="w-100" type="text" placeholder=" Age" required>
                              <input v-model="payload.email" class="w-100" type="text" placeholder="gender" required>
                              <input v-model="payload.userRole" class="w-100" type="text" placeholder="Email" required>
                              
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button @click="editUser(user.userID)" type="button" class="btn btn-primary">Save changes</button>
                          </div>
                      </div>

                  </div>
              </div>
              <!--user delete modal -->
              
              <div class="modal fade" :id="'#delete' + user.userID" tabindex="-1" aria-labelledby="delete" aria-hidden="true"
              v-for="user in users" :key="user.userID">
                  <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h1 class="modal-title fs-5" id="delete">delete User</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                             
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button @click="deleteUser(user.userID)" type="button" class="btn btn-primary">Save changes</button>
                          </div>
                      </div>

                  </div>
              </div>
              <table class="table table-bordered" v-if="users">
                  <thead>
                      <tr>
                          <th>User ID</th>
                          <th>First name</th>
                          <th>Last name</th>
                          <th>User name</th>
                          <th>Email address</th>
                          <th>User role</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="user in users" :key="user.userID">
                          <td>{{ user.userID }}</td>
                          <td>{{ user.firstname }}</td>
                          <td>{{ user.lastname }}</td>
                          <td>{{ user.username }}</td>
                          <td>{{ user.email }}</td>
                          <td>{{ user.userRole }}</td>
                          <td class="d-flex justify-content-between">
                              <button class="btn btn-success">Edit</button>
                              <button class="btn btn-success">Delete</button>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div class="row" v-show="showProducts && products">
              <!-- Modal add -->
              <div class="btn-tdn mb-2 ">
                  <button class="btn btn-success edt-btn mr-6" data-bs-toggle="modal" data-bs-target="#addProd">Add
                      Product</button>
              </div>
              <div class="modal fade" id="addProd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h1 class="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                              <input v-model="payload.productID" class="w-100" type="text" placeholder=" productID" required>
                              <input v-model="payload.productName" class="w-100" type="text" placeholder=" product Name" required>
                              <input  v-model="payload.productPrice" class="w-100" type="numbers" placeholder=" price" required>
                              <input v-model = "payload.description" class="w-100" type="text" placeholder="description" required>
                             
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button  @click="addProduct()" type="button" class="btn btn-primary">Save changes</button>
                          </div>
                      </div>

                  </div>
              </div>

<!-- edit modal -->
             
              <div class="modal fade" :id="'#edit'+ product.productID" tabindex="-1" aria-labelledby="edit" aria-hidden="true"
              v-for="product in products" :key="product.productID">
                  <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Product</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                              <input v-model="payload.productID" class="w-100" type="text" placeholder=" productID" required>
                              <input v-model="payload.productName" class="w-100" type="text" placeholder="product Name" required>
                              <input  v-model="payload.productPrice" class="w-100" type="numbers" placeholder="price" required>
                              <input v-model = "payload.description" class="w-100" type="text" placeholder="description" required>
                             
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button  @click="editProduct(product.productID)" type="button" class="btn btn-primary">update product</button>
                          </div>
                      </div>

                  </div>
              </div>


              <!-- delete modal -->
              
              <div class="modal fade" :id="'#delete' + product.productID" tabindex="-1" aria-labelledby="delete" aria-hidden="true"
              v-for="product in products" :key="product.productID">
                  <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h1 class="modal-title fs-5" id="delete">delete Product</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                          
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button  @click="deleteProduct(product.productID)" type="button" class="btn btn-primary">delete product</button>
                          </div>
                      </div>

                  </div>
              </div>

              <table class="table table-bordered" v-if="products"> 
                  <thead>
                      <tr>
                          <th>Product ID</th>
                          <th>Product Name</th>
                          <th>Product Quantity</th>
                          <th>Product Amount</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="product in products" :key="product.productID">
                          <td>{{ product.productID }}</td>
                          <td>{{ product.productName }}</td>
                          <td>{{ product.description }}</td>
                          <td>R {{ product.productPrice }}</td>
                          <td class="d-flex justify-content-between">
                              <button class="btn btn-success" data-bs-toggle="modal" :data-bs-target="'#edit' + product.productID">Edit</button>
                              <button class="btn btn-success" data-bs-toggle="modal" :data-bs-target="'#delete' + product.productID">Delete</button>
                          </td>
                      </tr>
                  </tbody>
              </table>

          </div>
      </div>

</template>


<script>
export default {
  data() {
      return {
          showUsers: true,
          showProducts: false,
          payload: {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            userRole: '',
            productID: '',
            productName: '',
            productPrice: '',
            description: ''
          }
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
    addProduct() {
      this.$store.dispatch("addProduct", this.payload);
    },
    register() {
      this.$store.dispatch("register", this.payload);
    },
    deleteProduct(productID) {
      this.$store.dispatch("deleteProduct", productID);
    },
    deleteUser(userID){
      this.$store.dispatch("deleteUser", userID);
    },
    editUser(userID) {
      const updateData = Object.assign({}, {userID}, this.payload);
      this.$store.dispatch("updateUser", updateData);
    },
    editProduct(productID) {
      const updateData = Object.assign({}, {productID}, this.payload);
      this.$store.dispatch("updateProduct", updateData);
    },
  }
};
</script>
<style scoped>
body {
  background-color: #918E8E;
}

.edt-btn {
  position: relative;
}

.btn-tdn {
  width: 30%;
}
</style>