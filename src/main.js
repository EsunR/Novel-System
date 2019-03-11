import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './plugins/element.js'
import "bootstrap"
import "../node_modules/@mdi/font/css/materialdesignicons.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

Vue.use(VueAxios, axios);
Vue.filter('introduction', function (str) {
  if (str.length > 50) {
    return str.substring(1, 51) + " ......";
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.config.productionTip = false