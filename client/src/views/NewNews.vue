<template>
  <div class="container">
    <h1>Add new</h1>
    <div v-if="feedback">
      <p style="color:red;">{{feedback}}</p>
    </div>

    <form class="col s12" @submit.prevent="postNews">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" class="validate" v-model="title" />
          <label>Title</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" class="validate" v-model="imageUrl" required />
          <label>Image Url</label>
        </div>
      </div>
      <input type="hidden" v-model="authorId" />
      <input type="hidden" v-model="author" />
      <div class="row">
        <div class="input-field col s12">
          <textarea v-model="content" class="materialize-textarea" data-length="120"></textarea>
          <label for="textarea2">Textarea</label>
        </div>
      </div>

      <button class="btn waves-effect waves-light" type="submit" name="action">
        Submit
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>


<script>
import axios from "axios";
import UserService from "@/services/Users";
import NewsService from "@/services/News";

export default {
  name: "NewNews",
  data() {
    return {
      imageUrl: null,
      currentUser: null,
      author: null,
      authorId: null,
      title: null,
      content: null,
      feedback: null
    };
  },
  async created() {
    const user = await UserService.currentUser();
    this.author = user.name;
    this.authorId = user._id;
    console.log(user);
  },
  methods: {
    async postNews() {
      try {
        await NewsService.addNewNews(
          this.imageUrl,
          this.title,
          this.content,
          this.author,
          this.authorId
        );
        this.$router.push({ name: "home" });
      } catch (error) {
        this.feedback = error;
      }
    }
  }
};
</script>


<style scoped lang='scss'>
.hidden {
  display: none;
}
</style>