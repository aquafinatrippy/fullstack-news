<template>
  <div class="home">
    <AddBtn />
    <showNews />
    <ExampleNews />
  </div>
</template>

<script>
// @ is an alias to /src
import showNews from "@/components/showNews.vue";
import AddBtn from "@/components/AddBtn";

import ExampleNews from "@/components/ExampleNews";

export default {
  name: "home",
  components: {
    showNews,
    AddBtn,
    ExampleNews
  }
};
</script>
