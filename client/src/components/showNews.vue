<template>
  <div class="hello">
    <div v-for="(oneNews, index) in news" v-bind:key="index">
      <div>{{oneNews}}</div>
    </div>
    <div v-if="error">{{error}}</div>
  </div>
</template>

<script>
import Service from "@/services/News";

export default {
  name: "showNews",
  data() {
    return {
      news: [],
      error: null
    };
  },
  async mounted() {
    try {
      this.news = await Service.getNews();
      const state = this.$store.getters;
      console.log(state);
    } catch (error) {
      this.error = error;
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
