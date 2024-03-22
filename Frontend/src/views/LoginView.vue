<template>
<div class="login row">
    <div class="container text-white col-6">
      <div class="login-body">
        <h1 class="login-header">Login Form</h1>
        <form  class="needs-validation" novalidate>
          <div class="input-box">
            <input type="email" v-model="email" class="form-control" id="email" placeholder="Email" required>
            <div class="invalid-feedback">Please provide a valid email.</div>
            <i class="fa fa-envelope"></i>
          </div>
          <div class="input-box">
            <input type="password" v-model="userPwd" class="form-control" id="password" placeholder="Password" required>
            <div class="invalid-feedback">Please provide your password.</div>
            <i class="fa fa-lock"></i>
          </div>
          <a href="#" class="for_get">Forget Your Password?</a>
          <button @click.prevent="loginUser" type="submit" class="btn btn-primary">Login</button>
          <p v-if="loginError" class="mt-3 error-message">{{ loginError }}</p>
          <p class="mt-3">Don't have an account? <router-link to="/register">Register</router-link></p>
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
      email: '',
      userPwd: '',
      loginError: ''
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post('https://style-stash.onrender.com/users/login', {
          email: this.email,
          userPwd: this.userPwd
        });
        const token = response.data.token;
        document.cookie = `token=${token};path=/`;
        Swal.fire({
          icon: 'success',
          title: `Welcome back, ${response.data.firstName} ${response.data.lastName}`,
          showConfirmButton: false,
          timer: 1500
        });
        console.log(response.data);
        console.log("Email", this.email);
        console.log("Password", this.userPwd);
        this.$root.isLoggedIn = true;
        this.$router.push('/');
      } catch (error) {
        if (error.response && error.response.status === 404) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email or password is incorrect',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
          });
        }
      }
    },
  }
};
</script>
<style scoped>
section {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  height: 100dvh;
}

.login-form{
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
