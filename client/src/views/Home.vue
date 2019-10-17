<template>
  <div class="home">
    <showNews/>
  </div>
</template>

<script>
// @ is an alias to /src
import showNews from '@/components/showNews.vue'

export default {
  name: 'home',
  components: {
    showNews
  }
}
</script>
