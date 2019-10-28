<template>
  <div>
    <h3>MANAGE YOUR POSTED NEWS</h3>
    <table class="highlight">
      <thead>
        <tr>
          <th>Title</th>
          <th>Published</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(single, index) in userNews" :key="index">
          <td>{{single.title}}</td>
          <td>{{single.createdAt}}</td>
          <td>
            <button @click="deleteNews(single._id)" class="waves-effect waves-light btn red">
              <i class="material-icons left">remove</i>delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-if="feedback">{{feedback}}</p>
  </div>
</template>


<script>
import NewsService from "@/services/News";
export default {
  name: "UserPosts",
  data() {
    return {
      userNews: [],
      feedback: null
    };
  },
  async created() {
    try {
      this.userNews = await NewsService.UserPosts(
        this.$store.getters.userInfo._id
      );
    } catch (error) {
      this.feedback = error;
    }
  },
  methods: {
    async deleteNews(id) {
      await NewsService.remove(id);
      this.userNews = await NewsService.UserPosts(
        this.$store.getters.userInfo._id
      );
    }
  }
};
</script>


<style lang="scss">
table {
  background-color: rgba(235, 230, 249, 1);
  margin: 10% 0;
}
</style>