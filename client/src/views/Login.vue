<template>
  <div>
    <form @submit="login">
      <div class="container">
        <div
          class="z-depth-3 y-depth-3 x-depth-3 grey green-text lighten-4 row"
          style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px; margin-top: 100px; solid #EEE;"
        >
          <div class="section"></div>
          <div class="section"></div>

          <div class="section">
            <i class="mdi-alert-error red-text"></i>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input
                class="validate"
                type="text"
                name="username"
                id="email"
                v-model="email"
                required
              />
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m12">
              <input
                class="validate"
                type="password"
                name="password"
                id="password"
                v-model="password"
                required
              />
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
                type="submit"
                name="btn_login"
                class="col s6 btn btn-small white black-text waves-effect z-depth-1 y-depth-1"
              >Login</button>
            </div>
          </center>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    login() {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", {email, password})
        .then(() => this.$router.push("/"))
        .catch(err => alert(err));
    }
  }
};
</script>

<style scoped>
</style>