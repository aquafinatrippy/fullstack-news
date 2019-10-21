<template>
  <div class="container">
    <h1>Add new</h1>
    <form class="col s12" @submit.prevent="postNews">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" class="validate" v-model="title" />
          <label for="email">Title</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <textarea v-model="content" class="materialize-textarea" data-length="120"></textarea>
          <label for="textarea2">Textarea</label>
        </div>
      </div>
      <div class="file-field input-field">
        <div class="btn">
          <span>File</span>
          <input type="file" />
        </div>
        <div class="file-path-wrapper">
          <input class="file-path validate" type="text" />
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

export default {
  name: "NewNews",
  data() {
    return {
      currentUser: null,
      author: null,
      authorId: null,
      title: null,
      content: null
    };
  },
  async mounted() {
    const user = await UserService.currentUser();
    this.author = user.name;
    this.authorId = user._id;
    console.log(user);
  },
  methods: {
    async postNews() {
      await UserService.addNewNews(
        this.title,
        this.content,
        this.author,
        this.authorId
      );
      this.$router.push({ name: "home" });
    }
  }
};
</script>