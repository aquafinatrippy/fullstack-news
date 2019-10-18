<template>
  <div v-if="isLogged">
    <router-link to="/add">
      <a class="btn-floating btn-large waves-effect waves-light red">
        <i class="material-icons">add</i>
      </a>
    </router-link>
  </div>
</template>

<script>
export default {
    name: 'AddBtn',
    computed: {
        isLogged(){
            return this.$store.getters.isLoggedIn
        }
    },
}
</script>