<template>
  <div class="container">
    <h1>{{news.title}}</h1>
    <div class="row">
      <div class="col m6">
        <img class="responsive-img" :src="news.imageUrl" />
        <p>{{news.createdAt}}</p>
      </div>
      
      <div class="col m6">
        <p>Author: {{news.author}}</p>
        <p>{{news.content}}</p>
        <p></p>
      </div>
    </div>
    <div v-if="feedback">{{feedback}}</div>
  </div>
</template>

<script>
import NewsService from "@/services/News";

export default {
  name: "NewsPage",
  data() {
    return {
      news: {},
      feedback: null
    };
  },
  async created() {
    try {
      const reconize = this.$route.params.news;
      const result = await NewsService.singleNews(reconize);
      this.news = result;
    } catch (error) {
      this.feedback = error;
    }
  }
};
</script>