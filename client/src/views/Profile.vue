<template>
  <div>
    <h1>profile page</h1>
    Name: {{name}}
    <br />
    Email: {{email}}
  </div>
</template>


<script>
import UserService from "@/services/Users";

export default {
  name: "Profile",
  data() {
    return {
      name: null,
      email: null
    };
  },
  async created() {
    const user = await UserService.currentUser();
    this.name = user.name;
    this.email = user.email;
  }
};
</script>