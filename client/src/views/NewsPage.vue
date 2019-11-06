<template>
  <div class="container">
    <h1>{{title}}</h1>
    <div>
      <img
        class="responsive-img"
        src="https://previews.123rf.com/images/aquir/aquir1504/aquir150401107/39120040-example-grunge-retro-red-isolated-ribbon-stamp.jpg"
      />
      <p></p>
      <p>{{news.content}}</p>
      <p>Author: {{news.author}}</p>
    </div>
    <div v-if="feedback">{{feedback}}</div>
  </div>
</template>

<script>
import NewsService from "@/services/News";

export default {
  name: "NewsPage",
  props: ["title"],
  data() {
    return {
      news: {},
      feedback: null
    };
  },
  async mounted() {
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