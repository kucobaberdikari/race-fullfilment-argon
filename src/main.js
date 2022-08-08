import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
// import "./assets/css/argon-dashboard.css";
import * as VueGoogleMaps from "vue2-google-maps"

import ArgonDashboard from "./argon-dashboard";

import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css"
import "../node_modules/bootstrap-vue/dist/bootstrap-vue.js"

// import "./assets/js/core/popper.min.js";
// import "./assets/js/core/bootstrap.min.js";
// import "./assets/js/plugins/perfect-scrollbar.min.js";
// import "./assets/js/plugins/smooth-scrollbar.min.js";
// import "./assets/js/plugins/chartjs.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/datatables.net-bs5/js/dataTables.bootstrap5.js";
import "../node_modules/datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "../node_modules/datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css";
import "../node_modules/datatables.net-responsive-bs5/js/responsive.bootstrap5.min.js";
import "../node_modules/datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css";
import "../node_modules/datatables.net-buttons-bs5/js/buttons.bootstrap5.min.js";
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(ArgonDashboard)
Vue.use(BootstrapVue,IconsPlugin)
Vue.use(VueGoogleMaps, {
  load: { 
    key: "AIzaSyCcsq4rSPo00oTJugvyUpbzvYirxZp1GwM",
    libraries: "places"
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
