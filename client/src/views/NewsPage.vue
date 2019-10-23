<template>
  <div>
    <h1>Single news page</h1>
    <div>
        <p>{{news.title}}</p>
        <p>{{news.content}}</p>
        <p>{{news.author}}</p>
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
  async mounted() {
    console.log(this.news);
    try {
      const reconize = this.$route.params.news;
      console.log(reconize);
      const result = await NewsService.singleNews(reconize);
      console.log(result);
      this.news = result;
    } catch (error) {
      this.feedback = error;
    }
  }
};
</script>