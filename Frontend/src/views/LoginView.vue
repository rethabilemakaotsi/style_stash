<template>
  <div class="login row">
    <div class="container text-white col-6">
      <div class="login-body">
        <h1 class="login-header">Login Form</h1>
        <form class="needs-validation" novalidate>
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
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  width: 50%;
  padding: 0 15px;
}

.login-body {
  background-color: #8f6f3b;
  padding: 20px;
  border-radius: 10px;
}

.login-header {
  text-align: center;
}

.form-control {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #252926;
  border-radius: 5px;
  background-color: #252926;
  color: #ffffff;
}

.invalid-feedback {
  color: #ff0000;
  display: none;
}

.input-box {
  position: relative;
}

.input-box input {
  padding-left: 30px;
}

.input-box i {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #ffffff;
}

.btn-primary {
  background-color: #252926;
  color: #af8c53;
  border: none;
  padding: 12px 20px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #8f6f3b;
}

.for_get {
  color: #ffffff;
  text-decoration: none;
}

.error-message {
  color: #ff0000;
}

.mt-3 {
  margin-top: 15px;
}

.router-link {
  color: #af8c53;
}
</style>
