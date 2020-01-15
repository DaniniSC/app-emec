import Vue from "vue";
import Maintenance from "./views/Maintenance";

Vue.config.productionTip = false;
new Vue({
  render: h => h(Maintenance)
}).$mount("#app");
