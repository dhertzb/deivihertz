<template>
  <b-navbar toggleable="md" class="c-navbar pt- py-3" fixed="top">
    <b-container>
      <b-navbar-brand href="/">
        <img class="c-navbar__logo" src="../assets/logo.svg" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="$router.push({ name: 'Blog' })">
            Blog
          </b-nav-item>
          <b-nav-item @click="$router.push({ name: 'Resume' })">
            Currículo
          </b-nav-item>
          <b-nav-item @click="$router.push({ name: 'Projects' })">
            Portfólio
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      lang: "BR"
    };
  },
  methods: {
    // changeLang(lang) {
    //   this.lang = lang;
    // }
  }
};
</script>
<style scoped>
.c-navbar__logo {
  width: 100px;
}
@media (min-width: 768px) {
  .c-navbar__logo {
    width: 130px;
  }
}
</style>
