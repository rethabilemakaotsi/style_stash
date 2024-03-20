<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="loginUser">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="userPwd" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      userPwd: ''
    };
  },
  methods: {
    async loginUser() {
      try {
        const payload = {
          email: this.email,
          userPwd: this.userPwd
        };
        await this.$store.dispatch('login', payload);
        // If login is successful, you can redirect the user or perform other actions
      } catch (error) {
        console.error('Error:', error);
        // Handle error here, e.g., show error message to user
      }
    }
  }
}
</script>
