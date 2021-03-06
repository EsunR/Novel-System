import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'moment'
import './plugins/element.js'
import global from './common.vue'
import "bootstrap"
import "../node_modules/@mdi/font/css/materialdesignicons.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

Vue.use(VueAxios, axios);
axios.defaults.baseURL = global.host;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');


Vue.filter('introduction', function (str) {
  if (str.length > 50) {
    return str.substring(0, 51) + " ......";
  } else {
    return str;
  }
})

Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(parseInt(dataStr)).format(pattern);
})

Vue.filter('identity', function (str) {
  switch (str) {
    case "editor":
      return "作者";
    case "reader":
      return "读者";
    case "admin":
      return "管理员";
  }
})

Vue.filter('arr', function (str) {
  str = str.toString();
  str = str.replace('[', "").replace(']', "")
  return str;
})

Vue.prototype.COMMON = global

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.config.productionTip = false