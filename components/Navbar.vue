<template>
  <b-navbar
    toggleable="md"
    class="c-navbar pt- py-3"
    :class="{ 'c-navbar--scroled': scroled }"
    fixed="top"
  >
    <b-container>
      <nuxt-link to="/">
        <b-navbar-brand >
          <img alt="logo" width="130px" height="55" class="c-navbar__logo" src="@/assets/images/logo.svg" />
        </b-navbar-brand> 
      </nuxt-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-item> -->
            <!-- <nuxt-link to="/blog">
              Blog
            </nuxt-link> -->
          <!-- </b-nav-item> -->
          <b-nav-item>
            <nuxt-link to="/resume">
              Currículo
            </nuxt-link>
          </b-nav-item>
          <b-nav-item >
             <nuxt-link to="/projects">
              Projetos
            </nuxt-link>
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
   if (process.browser){
    window.addEventListener("scroll", this.updateScroll);
   }
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
.c-navbar.navbar-light .navbar-nav .nav-link a {
  font-family: 'UbuntuMono',sans-serif;
  color: #e82e8b;
  font-size: 18px;
}
.c-navbar .nav-link:hover {
  transform: scale(1.1);
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
