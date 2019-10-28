<template>
  <div class="page-footer">
      <div class="footer-copyright">
        <div class="container">
          © {{date}} {{author}}
          <a class="grey-text text-lighten-4 right" href="#!">Source code</a>
        </div>
      </div>
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
.page-footer {
  background-color: #42b983;
  padding: 0;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>