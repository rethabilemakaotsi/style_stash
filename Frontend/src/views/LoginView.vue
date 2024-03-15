<template>
   <div>
     <div v-if="!showRegisterForm">
       <!-- Login Form -->
       <div class="form">
         <h2>Login</h2>
         <i class="bi bi-person-circle icon-large"></i> <!-- Added class "icon-large" -->
         <div class="input">
           <div class="inputBox">
             <label for="username">Username</label>
             <input type="text" v-model="username" id="username">
           </div>
           <div class="inputBox">
             <label for="username">Email Address</label>
             <input type="text" v-model="email" id="email">
           </div>
           <div class="inputBox">
             <label for="password">Password</label>
             <input type="password" v-model="password" id="password">
           </div>
           <div class="submit">
             <button @click="signIn">Sign In</button>
           </div>
         </div>
         <p class="forgot">Don't have an account? <a href="#" @click="showRegister">Click Here to Register</a></p>
       </div>
     </div>
     <div v-else>
       <!-- Register Form -->
       <div class="form">
         <h2>Register</h2>
         <i class="bi bi-person-circle icon-large"></i> <!-- Added class "icon-large" -->
         <div class="input">
           <div class="inputBox">
             <label for="registerUsername">Username</label>
             <input type="text" v-model="registerUsername" id="registerUsername">
           </div>
           <div class="inputBox">
             <label for="registerPassword">Password</label>
             <input type="password" v-model="registerPassword" id="registerPassword">
           </div>
           <div class="inputBox">
             <label for="confirmPassword">Confirm Password</label>
             <input type="password" v-model="confirmPassword" id="confirmPassword">
           </div>
           <div class="inputBox">
             <label for="confirmPassword">Email address</label>
             <input type="password" v-model="confirmPassword" id="confirmPassword">
           </div>
           <div class="inputBox">
             <label for="confirmPassword">Role</label>
             <input type="text" v-model="userRole" id="UserRole">
           </div>
          
           <div class="submit">
             <button @click="register">Register</button>
           </div>
         </div>
         <p class="forgot">Already have an account? <a href="#" @click="showLogin">Click Here to Login</a></p>
       </div>
     </div>
   </div>
 </template>
 
 <script>
 export default {
   data() {
     return {
       showRegisterForm: false,
       username: '',
       password: '',
       registerUsername: '',
       registerPassword: '',
       confirmPassword: ''
     };
   },
   methods: {
     signIn() {
       // Handle sign in logic here
       console.log('Signing in...');
     },
     register() {
       // Handle registration logic here
       console.log('Registering...');
     },
     showRegister() {
       // Show register form
       this.showRegisterForm = true;
     },
     showLogin() {
       // Show login form
       this.showRegisterForm = false;
     }
   }
 };
 </script>
 
 <style scoped>

 .form {
    /* position: relative; */
    margin-left: 500px;
    background: rgb(16, 15, 11);
    border: 1px solid #af8c53;
    width: 350px;
    padding: 40px 40px 60px;
    border-radius: 10px;
    text-align: center;
    margin-top: 20px;
    
  }
  
  .form h2 {
    color: blanchedalmond;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-family: 'Forum';
  }

  .form .input {
    margin-top: 40px;
    text-align: left;
  }
  
  .form .input .inputBox {
    margin-top: 10px;
  }
  
  .form .input .inputBox label {
    display: block;
    color: blanchedalmond;
    margin-bottom: 5px;
    font-size: 18px;
    letter-spacing: 1px;
    font-family: 'Courier New', Courier, monospace;
  }
  .form .input .inputBox .submit button {
    cursor: pointer;
    margin-top: 20px;
    letter-spacing: 1px;
    background: linear-gradient(315deg, #af8c53, #252926);
    color: blanchedalmond;
    font-size: 18px;
    border: none;
    outline: none;
    padding: 10px 20px;
    border-radius: 10px;
    transition: background 0.3s ease;
  }
  
  
  .form .input .inputBox input[type="submit"] {
    cursor: pointer;
    margin-top: 20px;
    letter-spacing: 1px;
  }
  
  .form .input .inputBox input[type="submit"]:hover {
    background: linear-gradient(315deg, #af8c53, #252926);
  }
  
  
  
  .forgot {
    margin-top: 10px;
    color: blanchedalmond;
    font-size: 14px;
    letter-spacing: 1px;
  }
  
  .forgot a {
    color: #af8c53;
    font-family: 'Courier New', Courier, monospace;
  }
  
  .icon-large {
    font-size: 60px;
    color: #af8c53; /* Adjust the size of the icon here */
  }
  
  
  
 
  
 
  
  
  
  
  
  
  </style>
  