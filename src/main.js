import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import jQuery from 'jquery';
import 'popper.js';
import './assets/app.scss';
window.$ = window.jQuery = jQuery;

Vue.config.productionTip = false;

Vue.component('Navbar', require('./components/Navbar.vue').default);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
