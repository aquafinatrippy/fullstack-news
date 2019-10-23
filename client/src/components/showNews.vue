<template>
  <div class="container">
    <div v-if="error">{{error}}</div>
    <div class="col" v-for="(oneNews, index) in news" v-bind:key="index">
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
            <router-link
              :to="{name: 'viewNews', params: {news: oneNews._id}}"
              class="green-text"
            >Read more</router-link>
            <div v-if="correctUser">
              <router-link :to="{name: 'viewNews', params: {news: index}}">Edit</router-link>
              <button @click="deleteNews(oneNews._id)">delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsService from "@/services/News";
import UserService from "@/services/Users";

export default {
  name: "showNews",
  data() {
    return {
      news: [],
      error: null,
      correctUser: null
    };
  },
  async created() {
    try {
      const user = await UserService.currentUser();
      console.log(user);
      console.log(user._id);
    } catch (error) {
      this.error = error;
    }
  },
  async mounted() {
    try {
      this.news = await NewsService.getNews();
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    async deleteNews(id) {
      await NewsService.remove(id);
      this.news = await NewsService.getNews();
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
