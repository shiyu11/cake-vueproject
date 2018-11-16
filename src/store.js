import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)//第三方插件


export default new Vuex.Store({
  state: {
    time1:'',
    pid:1,
    oid:1,
    state1:'待收货',
    rnum:111,
    url:'http://localhost:3000'
  }
})
