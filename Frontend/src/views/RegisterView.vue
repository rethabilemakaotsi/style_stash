<template>
    <div class="users-table text-white row">
      <div class="container col-7">
        <div class="login m-5">
          <h1>Register</h1>
          <form @submit.prevent="register" class="needs-validation" novalidate>
            <div class="input-box mb-3">
              <input v-model="firstname" type="text" class="form-control" placeholder="First Name" required>
              <i class="fa fa-user"></i>
            </div>
            <div class="input-box mb-3">
              <input v-model="lastname" type="text" class="form-control" placeholder="Last Name" required>
              <i class="fa fa-user"></i>
            </div>
            <div class="input-box mb-3">
              <input v-model="username" id="age" type="text" class="form-control" placeholder="Username"> 
            </div>
            

           
            <div class="input-box mb-3">
              <select v-model="userRole" id="role" class="form-select" required>
                <option value="" disabled>Select Role</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
              <i class="fa fa-cogs"></i>
            </div>
            <div class="input-box mb-3">
              <input v-model="email" type="email" class="form-control" placeholder="Email" required>
              <i class="fa fa-envelope"></i>
            </div>
            <div class="input-box mb-3">
              <input v-model="userPwd" type="password" class="form-control" placeholder="Password" required>
              <i class="fa fa-lock"></i>
            </div>
           
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" v-model="saveAccount">
              <label class="form-check-label">Save account for future logins</label>
            </div>
            <p class="text-center">Already have an account? <router-link to="/login">Login</router-link></p>
            <button type="submit" class="btn btn-primary d-block mx-auto" :disabled="submitting">
              {{ submitting ? 'Creating Account...' : 'Create an account' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  <script>
  import axios from 'axios';
import Swal from 'sweetalert2';
  export default {
    data() {
      return {
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        userRole: '',
        userPwd: '',
        saveAccount: false,
        submitting: false,
      };
    },
    methods: {
      async register() {
        if (!this.firstname || !this.lastname || !this.email || !this.userPwd || !this.username  || !this.userRole) {
          alert('Please fill in all required fields.');
          return;
        }
        try {
          this.submitting = true;
          const response = await axios.post('https://style-stash.onrender.com/users/register', {
            firstname: this.firstname,
            lastname: this.lastname,
            username: this.username,
            email: this.email,
            userRole: this.userRole,
            userPwd: this.userPwd,
        
          });
          Swal.fire({
          icon: 'success',
          title: 'Registration Successful!',
          text: 'You have successfully registered.',
          footer: `Your token is: ${token}` // Adjust this line based on where your token is stored
        });
          const token = response.data.token;
          document.cookie = `token=${token}; path=/`;
          alert('Registration successful!');
          console.log(response.data);
          this.firstname = '';
          this.lastname = '';
          this.email = '';
          this.username = '';
          this.userRole = '';
          this.userPwd = '';
          this.saveAccount = false;
        } catch (error) {
          if (error.response && error.response.status === 409) {
            alert('This email address is already registered. Please log in instead.');
            this.$router.push('/login');
          } else {
            console.error('Error registering user:', error);
            alert('An error occurred during registration. Please try again later.');
          }
        }
        finally {
          this.submitting = false;
        }
      },
    },
  };
  </script>