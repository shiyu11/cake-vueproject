import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)//第三方插件


function isLogin() {
  var login = {};
  login.uName = localStorage.getItem('uName');
  login.uId = localStorage.getItem("uId");
  login.uPhone = localStorage.getItem("uPhone");

  if (login.uId) {
    login.isLogin = true;
  } else {
    login.isLogin = false;
    localStorage.clear();
  }
  return login;
}

export default new Vuex.Store({
  state: {
    time1:'',
    pid:1,
    oid:1,
    state:0,
    rnum:111,


  }
})
