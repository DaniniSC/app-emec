import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";
import { config } from "./config";
import VueMaterial from "vue-material";
import * as VueGoogleMaps from "vue2-google-maps";
//import "vue-material/dist/vue-material.min.css";

Vue.use(VueMaterial);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAvt9j7DanaVXcJZWMUTjKulUTuDYZzF-A",
    libraries: "places" // necessary for places input
  }
});

/**
 * Require bootstrap
 */
require("bootstrap");

/**
 * Require jquery
 */
Vue.prototype.$ = window.$ = window.jQuery = require("jquery");

/**
 * Instance Vue
 */
Vue.prototype.$http = Axios;
const token = store.state.auth;

if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] =
    "Bearer " + token;
}

/**
 * Load config
 */
Vue.prototype.$config = window.config = config;

/**
 * Instance Vue
 * @type {boolean}
 */
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
