<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>
<style lang="scss">
@import "bootstrap/scss/bootstrap.scss";
@import "bootstrap-vue/src/index.scss";

$enable-responsive-font-sizes: true;
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap");

@font-face {
  font-family: "MontSerrat";
  src: url("assets/Montserrat-Regular.ttf");
}
@font-face {
  font-family: "Nunito Bold";
  src: url("assets/Nunito-Bold.ttf");
}
</style>
