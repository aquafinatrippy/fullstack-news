<template>
  <div>
    <footer class="page-footer">
      <div class="footer-copyright">
        <div class="container">
          © {{date}} {{author}}
          <a class="grey-text text-lighten-4 right" href="#!">Source code</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      author: "Tanel Tekko",
      date: Date().slice(10, 15)
    };
  }
};
</script>

<style lang="scss" scoped>
.page-footer{
    background-color: #42b983;
}
</style>