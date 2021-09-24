import Vue from 'vue'
import App from './App.vue'
import router from "./routes/vue-router";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
