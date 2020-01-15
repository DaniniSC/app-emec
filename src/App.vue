<template>
  <div id="app">
    <Nav></Nav>
    <div class="content" style="padding-top: 70px;">
      <router-view />
    </div>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";

export default {
  name: "home",
  components: {
    Nav
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {}
};
</script>

<style lang="scss">
@import "./assets/sass/app";
</style>
