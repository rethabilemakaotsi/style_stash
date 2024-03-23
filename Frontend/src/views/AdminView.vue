<template>
      <div class="container">
          <div class="row">
              <h2 class="display-4">
                  <button class="btn mr-2" @click="showUsers = true; showProducts = false">
                      Users
                  </button>
                  <button class="btn mr-2" @click="showProducts = true; showUsers = false">
                      Products
                  </button>
              </h2>
          </div>
          <div class="row justify-content-end align-items-end" v-show="showUsers && users">
              <div class="modal fade" id="addUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                      <div class="modal-content bg-black text-white">
                          <div class="modal-header">
                              <h1 class="modal-title fs-5" id="add">Add Users</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                           
                              <input v-model="payload.firstname" class="w-100" type="text" placeholder=" First Name" required>
                              <input v-model="payload.lastname" class="w-100" type="text" placeholder=" Last Name" required>
                              <input v-model="payload.username" class="w-100" type="text" placeholder=" username" required>
                              <input v-model="payload.email" class="w-100" type="text" placeholder="email" required>
                              <input v-model="payload.userPwd" class="w-100" type="text" placeholder="password" required>
                              
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                              <button  @click="register()" type="button" class="btn">Save changes</button>
                          </div>
                      </div>

                  </div>
              </div>

              <!--user edit modal -->
             
              <div class="modal fade" :id="'edit' + user.userID" tabindex="-1" aria-labelledby="edit" aria-hidden="true"
    v-for="user in users"  :key="user.userID">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="add">Edit User</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <input v-model="payload.firstname" class="w-100 form-control" type="text" placeholder=" First Name" required>
                <input v-model="payload.lastname" class="w-100 form-control" type="text" placeholder=" Last Name" required>
                <input v-model="payload.username" class="w-100 form-control" type="text" placeholder=" Username" required>
                <input v-model="payload.email" class="w-100 form-control" type="email" placeholder=" Email" required>
                <input v-model="payload.userPwd" class="w-100 form-control" type="password" placeholder=" Password" required>
                <select v-model="payload.userRole" id="role" class="form-select mt-3" required>
                    <option value="" disabled>Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </select>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button @click.prevent="editUser(user.userID)" type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>

              <!--user delete modal -->
              
              <div class="modal fade" :id="'remove' + user.userID" tabindex="-1" aria-labelledby="delete" aria-hidden="true"
              v-for="user in users" :key="user.userID">
                  <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h1 class="modal-title fs-5" id="delete">delete User</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                              <p>Are you sure you want to delete this user?</p>
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                              <button @click="deleteUser(user.userID)" type="button" class="btn">Save changes</button>
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
                            <i class="bi bi-pencil"  data-bs-toggle="modal" :data-bs-target="'#edit' + user.userID"></i>
                              <!-- <button class="btn btn-success">Edit</button> -->
                              <i class="bi bi-trash3" data-bs-toggle="modal" :data-bs-target="'#remove' + user.userID"></i>
                              <!-- <button class="btn btn-success">Delete</button> -->
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
                              <input v-model = "payload.category" class="w-100" type="text" placeholder="category" required>
                             
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                              <button  @click="addProduct()" type="button" class="btn">Save changes</button>
                          </div>
                      </div>

                  </div>
              </div>

<!-- edit modal -->
             
              <div class="modal fade" :id="'edit'+ product.productID" tabindex="-1" aria-labelledby="edit" aria-hidden="true"
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
                              <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                              <button  @click.prevent="editProduct(product.productID)" type="button" class="btn">update product</button>
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
                              <p>Are you sure you want to delete this product?</p>
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <!-- <button  @click="deleteProduct(product.productID)" type="button" class="btn btn-primary">delete product</button> -->
                          </div>
                      </div>

                  </div>
              </div>

              <table class="table table-bordered" v-if="products"> 
                  <thead>
                      <tr>
                          <th>Product ID</th>
                          <th>Product Name</th>
                          <th>Product category</th>
                          <th>Product Amount</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="product in products" :key="product.productID">
                          <td>{{ product.productID }}</td>
                          <td>{{ product.productName }}</td>
                          <td>{{ product.category }}</td>
                          <td>R {{ product.productPrice }}</td>
                          <td class="d-flex justify-content-between">
                            <i class="bi bi-pencil"  data-bs-toggle="modal" :data-bs-target="'#edit' + product.productID"></i>
                              <!-- <button class="btn btn-success" data-bs-toggle="modal" :data-bs-target="'#edit' + product.productID">Edit</button> -->
                              <i class="bi bi-trash3" data-bs-toggle="modal" :data-bs-target="'#delete' + product.productID" @click="deleteProduct(product.productID)"></i>
                              <!-- <button class="btn btn-success" data-bs-toggle="modal" :data-bs-target="'#delete' + product.productID">Delete</button> -->
                          </td>
                      </tr>
                  </tbody>
              </table>
            </div>
            <div class="btn-tdn mb-2">
                <button class="btn edt-btn mr-6" data-bs-toggle="modal" data-bs-target="#addUser">add
                    User</button>
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
            userPwd: '',
            userRole: ''
            // 
          }, 
            productsPayload:{
            productID:'',
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
.container{
    height: 100vh;
}

.modal-dialog{
    background-color: none;
}

.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse;
}

input{
    color:aliceblue;
    background-color: transparent;
    margin-top: 10px;
    border: 0;
    border-bottom: 1px solid #ccc;
}

.table-bordered th,
.table-bordered td {
  border: 0;
  /* border-bottom: 1px solid #dee2e6; */
  background-color: transparent;
  color: #af8c53;
}

#addProd{
  margin-right: 100px;
}
table{
  border: 0;
}
button{
    border: 2px dotted #af8c53;
    color: #af8c53;
    justify-content: space-between;
}
/* Add styles for the modal */
.modal-content {
    background-color: #000000; /* black background */
    color: #ffffff; /* white text color */
}

.modal-header {
    border-bottom: none; /* remove bottom border from header */
}

.modal-body {
    padding: 20px;
}

.form-control {
    margin-bottom: 15px;
    background-color: #252525; /* dark gray background for input fields */
    color: #ffffff; /* white text color */
    border: 1px solid #ffffff; /* white border */
}

.form-control:focus {
    border-color: #af8c53; /* highlight border color when focused */
}

.modal-footer {
    justify-content: space-between;
}

/* Add more styles as needed */

</style>