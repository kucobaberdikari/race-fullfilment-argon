import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import "./assets/css/argon-dashboard.css";
// import $ from "jquery";

import ArgonDashboard from './assets/argon-dashboard.js';

// import "./assets/js/core/popper.min.js";
// import "./assets/js/core/bootstrap.min.js";
// import "./assets/js/plugins/perfect-scrollbar.min.js";
// import "./assets/js/plugins/smooth-scrollbar.min.js";
// import "./assets/js/plugins/chartjs.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js";
import "../node_modules/datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import "../node_modules/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css";
import "../node_modules/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js";
import "../node_modules/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css";
import "../node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js";

Vue.config.productionTip = false
Vue.use(ArgonDashboard)
Vue.use(BootstrapVue,IconsPlugin)
// $.widget.bridge('uibutton', $.ui.button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
