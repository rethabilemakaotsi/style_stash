<template >
    <footer>
      <p>&copy; {{ currentYear }} Copyright © 2024 Poetry Emprium. All Rights Reserved. | Privacy Policy | Terms of Service | </p>
       </footer>
</template>
<script>
 export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
  </script>
<style scoped>
footer {
  background-color:#252926;
  color:#af8c53;
  padding: 20px;
  text-align: center;
}
</style>