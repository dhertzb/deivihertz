<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="../assets/logo.svg"
        />
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item @click="$router.push({ name: 'Blog' })">
        Blog
      </b-navbar-item>
      <b-navbar-item href="#">
        Currículo
      </b-navbar-item>
      <b-navbar-item href="#">
        Projetos
      </b-navbar-item>
      <b-navbar-item href="#">
        Sobre
      </b-navbar-item>
      <!-- <b-navbar-dropdown :label="lang">
        <b-navbar-item @click="changeLang('EN')">
          EN
        </b-navbar-item>
        <b-navbar-item @click="changeLang('BR')">
          BR
        </b-navbar-item>
      </b-navbar-dropdown> -->
    </template>
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
<style>
.navbar {
  position: absolute !important;
  top: 0;
  width: 100vw;
  padding: 13px;
  background-color: transparent !important;
}
.navbar-item img {
  max-height: 40px !important;
}
.navbar-item,
.navbar-link {
  cursor: pointer;
  font-size:18px;
  color: #f14668 !important;
}
.navbar-item:hover,
.navbar-item:focus {
  background-color: rgba(0, 0, 0, 0) !important;
}
.navbar-link:hover,
.navbar-item:focus {
  background-color: rgba(0, 0, 0, 0) !important;
}
.navbar-item.has-dropdown:focus .navbar-link,
.navbar-item.has-dropdown:hover .navbar-link,
.navbar-item.has-dropdown.is-active .navbar-link {
  background-color: rgba(0, 0, 0, 0) !important;
}
.navbar-link::after {
  border-color: #f14668 !important;
}
.navbar-dropdown {
  border-radius: 10px;
  border: none !important;
  background-color: #fae3aa !important;
}
.navbar-burger span {
  color: #f14668 !important;
  height: 2px !important;
}
@media (min-width: 768px) {
  .navbar {
    padding: 13px 80px !important;
  }
  .navbar-item img {
    max-height: 50px !important;
  }
}
</style>
