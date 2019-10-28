<template>
  <div class="container">
    <div class="col s12 m8 offset-m2 l6 offset-l3">
      <div class="card-panel grey lighten-5 z-depth-1">
        <div class="row valign-wrapper">
          <div class="col s2">
            <img :src="imageUrl" alt class="circle responsive-img" />
            <!-- notice the "circle" class -->
          </div>
          <div class="col s10">
            <h5 class="black-text">Name: {{name}}</h5>
            <br />
            <h5 class="black-text">Email: {{email}}</h5>
          </div>
        </div>
      </div>
    </div>
    <UserPosts />
  </div>
</template>


<script>
import UserService from "@/services/Users";
import UserPosts from "@/components/UserPosts";

export default {
  name: "Profile",
  components: {
    UserPosts
  },
  data() {
    return {
      imageUrl: null,
      name: null,
      email: null
    };
  },
  async created() {
    const user = await UserService.currentUser();
    this.name = user.name;
    this.imageUrl = user.imageUrl;
    this.email = user.email;
  }
};
</script>