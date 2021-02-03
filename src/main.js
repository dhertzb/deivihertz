import Vue from "vue";
import App from "./App.vue";
import PrismicVue from "@prismicio/vue";
import linkResolver from "./prismic/link-resolver.js";
import VueDisqus from "vue-disqus";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFilePdf,
  faCalendar,
  faIdCard,
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router/index.js";

import store from "./store";
/* eslint-disable */
import global from './css/global.css';
/* eslint-disable */
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

library.add([faFilePdf,faCalendar, faIdCard, faPhone, faEnvelope, faGithub])  
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(PrismicVue, {
  endpoint: "https://deivihertz.cdn.prismic.io/api/v2",
  linkResolver
});

Vue.use(VueDisqus, {
  shortname: "deivihertz"
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
