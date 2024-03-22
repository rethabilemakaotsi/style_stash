<template>
  <footer class="footer-border">
    <p>Style_Stash &copy; {{ currentYear }}</p>
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
  background-color: #252926;
  color: #af8c53;
  padding: 5px;
  text-align: center;
  border-top: 1px solid #af8c53;
  position: relative;
  font-family: 'Courier New', Courier, monospace;
  /* width: 200vh */
}

</style>
