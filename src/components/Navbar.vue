<template>
  <b-navbar
    toggleable="md"
    class="c-navbar pt- py-3"
    :class="{ 'c-navbar--scroled': scroled }"
    fixed="top"
  >
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
      scrollHeight: 0
    };
  },
  created() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollHeight = window.scrollY;
    }
  },
  computed: {
    scroled() {
      return this.scrollHeight > 60;
    }
  }
};
</script>
<style scoped>
.c-navbar--scroled {
  background: #fdfdfe;
  transition: background 1s;
}
.c-navbar.navbar-light .navbar-nav .nav-link {
  font-family: "Quicksand", sans-serif;
  color: #6c67ae;
}
.c-navbar .nav-link:hover {
  font-weight: bold;
}
.c-navbar__logo {
  width: 100px;
}
.c-navbar >>> .navbar-toggler {
  border: none;
}
@media (min-width: 768px) {
  .c-navbar__logo {
    width: 130px;
  }
}
</style>
