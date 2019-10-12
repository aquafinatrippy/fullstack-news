<template>
  <div class="hello">
    {{movies}}
    <p v-if="err">{{err}}</p>
  </div>
</template>

<script>
import Service from "@/services/News";
export default {
  name: "HelloWorld",
  data() {
    return {
      movies: null,
      err: null
    };
  },
  async created() {
    try {
      this.movies = await Service.getNews();
    } catch (error) {
      this.err = error;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
