<template>
  <div class="auth-form">
    <div v-if="showLoginForm">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" v-model="email" id="email" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" id="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
      <p>{{ loginMessage }}</p>
      <p>Don't have an account? <a href="#" @click="toggleForm">Register Here</a></p>
    </div>
    <div v-else>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="registerEmail">Email Address</label>
          <input type="email" v-model="registerEmail" id="registerEmail" required>
        </div>
        <div class="form-group">
          <label for="registerPassword">Password</label>
          <input type="password" v-model="registerPassword" id="registerPassword" required>
        </div>
        <button type="submit">Register</button>
      </form>
      <p>{{ registerMessage }}</p>
      <p>Already have an account? <a href="#" @click="toggleForm">Login Here</a></p>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.min.css'

export default {
  data() {
    return {
      showLoginForm: true,
      email: '',
      password: '',
      registerEmail: '',
      registerPassword: '',
      loginMessage: '',
      registerMessage: ''
    };
  },
  methods: {
    async login() {
      try {
        // Perform login logic here
        
        // Example success message
        await Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: 'Redirecting to home page...',
          showConfirmButton: false,
          timer: 1500
        });
        
        // Redirect to home page after successful login
        this.$router.push({ name: 'home' });
      } catch (error) {
        console.error('Login error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Login failed. Please try again.',
        });
      }
    },
    async register() {
      try {
        // Perform registration logic here
        
        // Example success message
        await Swal.fire({
          icon: 'success',
          title: 'Registration Successful!',
          text: 'Redirecting to home page...',
          showConfirmButton: false,
          timer: 1500
        });
        
        // Redirect to home page after successful registration
        this.$router.push({ name: 'home' });
      } catch (error) {
        console.error('Registration error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Registration failed. Please try again.',
        });
      }
    },
    toggleForm() {
      this.showLoginForm = !this.showLoginForm;
    }
  }
};
</script>

<style scoped>
.auth-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

p {
  margin-top: 10px;
  color: red;
}
</style>
