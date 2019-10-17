<template>
  <div id="app">
    <div id="nav">
      <div>
        <router-link to="/">
          <i class="material-icons">event_note</i>
          <p>News</p>
        </router-link>
      </div>
      <div v-if="isLoggedIn">
        <router-link to="/about">
          <i class="material-icons">lock</i>
          About
        </router-link>
      </div>
      <div v-if="!isLoggedIn">
        <router-link to="/login">
          <i class="material-icons">lock</i>
          <p>Login</p>
        </router-link>
      </div>
      <div v-if="!isLoggedIn">
        <router-link to="/register">
          <i class="material-icons">group_add</i>
          <p>Register</p>
        </router-link>
      </div>
      <div v-if="isLoggedIn">
        <span>
          <a @click="logout" class="logOutBtn">
            <i class="material-icons">close</i>
            <p>Logout</p>
          </a>
        </span>
      </div>
      <div v-if="isLoggedIn">
        <router-link to="/secure">secure</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    current() {
      return this.$store.getters.authStatus;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
    created() {
      this.$http.interceptors.response.use(undefined, err => {
        return new Promise((resolve, reject) => {
          if (
            err.status === 401 &&
            err.config &&
            !err.config.__isRetryRequest
          ) {
            this.$store.dispatch("logout");
          }
          throw err;
        });
      });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  display: flex;
  justify-content: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    width: 60px;
  }
}
.logOutBtn {
  cursor: pointer;
}
</style>
