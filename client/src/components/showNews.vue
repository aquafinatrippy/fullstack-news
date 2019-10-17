<template>
  <div class="hello">
    <div v-for="(oneNews, index) in news" v-bind:key="index">
      <div>{{oneNews}}</div>
    </div>
    <div v-if="feedback">{{feedback}}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "showNews",
  props: {
    news: [],
    feedback: null
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/news/all")
      .then(res => {
        this.news = res.data;
      })
      .catch(err => {
        this.feedback = err;
      });
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
