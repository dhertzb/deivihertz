import Vue from "vue";
import App from "./App.vue";
import PrismicVue from "@prismicio/vue";
import linkResolver from "./prismic/link-resolver.js";
import VueDisqus from 'vue-disqus'

import router from "./router/index.js";

import store from "./store";

Vue.use(PrismicVue, {
  endpoint: "https://deivihertz.cdn.prismic.io/api/v2",
  linkResolver
});

Vue.use(VueDisqus, {
  shortname: 'deivihertz'
})
 

import { Navbar, Button } from "buefy";
import "buefy/dist/buefy.css";
import "./css/global.css";
Vue.use(Navbar);
Vue.use(Button)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
