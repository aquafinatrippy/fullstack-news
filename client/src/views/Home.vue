<template>
  <div class="home">
    <AddBtn />
    <showNews />
  </div>
</template>

<script>
// @ is an alias to /src
import showNews from "@/components/showNews.vue";
import AddBtn from "@/components/AddBtn";

export default {
  name: "home",
  components: {
    showNews,
    AddBtn
  }
};
</script>
