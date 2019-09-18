import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import filters from "./filters";

Vue.config.productionTip = false;

new Vue({
  filters,
  router,
  render: h => h(App)
}).$mount("#app");
