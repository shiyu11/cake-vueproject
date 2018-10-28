// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import Axios from 'axios'

// import Axios from 'axios'
import store from './store.js'
// Vue.use(Axios)
// Axios.defaults.baseURL='http://127.0.0.1:3000'
// Axios.defaults.baseURL='http://http://10.40.4.11:3000'

// Vue.use(axios)
Vue.use(ElementUI);
// Vue.prototype.$axios=Axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
