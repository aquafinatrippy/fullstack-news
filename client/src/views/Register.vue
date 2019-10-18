<template>
  <div class="container">
    <form @submit.prevent="signUp">
      <div
        class="z-depth-3 y-depth-3 x-depth-3 grey green-text lighten-4 row"
        style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px; margin-top: 100px; solid #EEE;"
      >
        <div class="section"></div>
        <div class="section"></div>

        <div class="section" v-if="feedback">
          <i class="mdi-alert-error red-text">{{feedback}}</i>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input class="validate" type="text" v-model="name" required />
            <label for="email">Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input class="validate" type="email" v-model="email" required />
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col m12">
            <input class="validate" type="password" v-model="password" required />
            <label for="password">Password</label>
          </div>
          <label style="float: right;">
            <a>
              <b style="color: #F5F5F5;">Forgot Password?</b>
            </a>
          </label>
        </div>
        <br />
        <center>
          <div class="row">
            <button
              style="margin-left:65px;"
              class="col s6 btn btn-small white black-text waves-effect z-depth-1 y-depth-1"
            >Register</button>
          </div>
        </center>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: null,
      email: null,
      password: null,
      feedback: null
    };
  },
  methods: {
    signUp() {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      this.$store
        .dispatch("register", data)
        .then(() => {
          this.$router.push({ name: "home" });
        })
        .catch(err => {
          this.feedback = err;
        });
    }
  }
};
</script>


<style scoped>
</style>