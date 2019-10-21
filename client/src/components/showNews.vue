<template>
  <div class="container">
    <div v-if="error">{{error}}</div>
    <div class="col" v-for="(oneNews, index) in news" v-bind:key="index" >
      <div class="card horizontal">
        <div class="card-image">
          <img
            src="https://previews.123rf.com/images/aquir/aquir1504/aquir150401107/39120040-example-grunge-retro-red-isolated-ribbon-stamp.jpg"
          />
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p>{{oneNews.author}}</p>
            <h4>{{oneNews.title}}</h4>
            <p>{{oneNews.content}}</p>
          </div>
          <div class="card-action">
            <p>{{oneNews.createdAt}}</p>
            <a href="#" class="green-text">This is a link</a>
            <div>
              <router-link :to="{name: 'viewNews', params: {news: index}}">Edit</router-link>
              <button @click="deleteNews(id)">delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsService from "@/services/News";

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
      this.news = await NewsService.getNews();
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    deleteNews() {}
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
