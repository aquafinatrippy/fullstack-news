<template>
  <div class="container">
    <div v-if="error">{{error}}</div>
    <div class="col" v-for="(oneNews, index) in news" v-bind:key="index">
      <div class="card horizontal">
        <div class="card-image">
          <img
            v-bind:src="oneNews.urlToImage"
          />
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <h4>{{oneNews.title}}</h4>
            <p class="newsContent">{{oneNews.content}}</p>
          </div>
          <div class="card-action">
            <p style="text-align: right;">{{oneNews.createdAt}}</p>
            <p style="text-align: left;">Author: {{oneNews.author}}</p>
            <router-link
              :to="{name: 'viewNews', params: {news: oneNews._id}}"
              class="green-text"
            >Read more</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsService from "@/services/News";

export default {
  name: "ExampleNews",
  data() {
    return {
      news: [],
      error: null
    };
  },
  async mounted() {
    try {
      const examples = await NewsService.getExamples();
      this.news = examples.articles;
      console.log(this.news);
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
.newsContent {
  text-align: left;
  display: block;
  max-width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
