<template>

  <div>
    <form class="form-horizontal col-xs-pull-3" style="margin-top: 120px">
      <div class="form-group">
        <label for="inputPhone3" class="col-sm-2 control-label">手机号：</label>
        <div class="col-sm-4">
          <input v-model="username1" type="text" class="form-control" id="inputPhone3" placeholder="请输入手机号">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">密&nbsp;&nbsp;&nbsp;码：</label>
        <div class="col-sm-4">
          <input v-model="password" type="password" class="form-control" id="inputPassword3" placeholder="请输入密码">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-default" v-on:click="UserLogin()">登录</button>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
  import axios from 'axios'
  export default {
    name: "Login",
    data(){
      return{
        username1:'',
        password:'',
        uid:'',
        mydata:'',
        uname:''
      }
    },
    methods:{
      UserLogin() {
        if(this.username1 == ''||this.password == ''){
          alert('手机号和密码不能为空！')
        }else {
          let _this = this;
          axios.post('http://localhost:3000/users/login',
            {
              uname: _this.username1,
              upwd: _this.password
            }).then(function (result) {
            let info = eval("(" + result.request.response + ")");
            // _this.$store.state.uid = info.data.uid
            _this.$store.state.username = info.data.uname
            console.log(_this.uid);
            if (info.code == 200) {
              alert('登录成功，即将跳转到首页');
              setTimeout(function () {
                _this.$router.push('/')
              }.bind(this), 1000);
              _this.$store.state.username2 =_this.username1;
              // _this.uid =_this.username1;
              sessionStorage.setItem('sphone',_this.$store.state.username2);
              sessionStorage.setItem('spassword',_this.$store.state.pwd);
              console.log(_this.$store.state.username2);
              _this.$router.push({path: '/'})
            }
            else {
              alert('用户名或密码错误')
            }
            //会记录当前路由
          });
        }
      },
    },

  }

</script>

<style scoped>

</style>
