<template>
  <div class="mcontainer">
    <div class="allRegidter">
      <el-row>
        <el-col :sm="8" :md="8" :lg="8" :xl="8"  :offset="12" class="wai">
          <el-form label-width="100px" class="demo-ruleForm">
            <el-form-item label="手机号" prop="phoneNum">
              <el-input type="text" v-model="phonenum" placeholder="请输入手机号" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="password" placeholder="请输入密码" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="submit" class="btn btn-default" :plain="true" @click="UserLogin()">登录</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<script>

  export default {
    name: "Login",
    data(){
      return{
        phonenum:'',
        password:'',
        uphone:'',
        // uid:'',
        mydata:''
      }
    },
    methods:{
      UserLogin() {
        if(this.phonenum == ''||this.password == ''){
          this.$message({
            message: '用户名或者密码不能为空',
            duration:1000
          });
        } else {
          let _this = this;
          this.$axios.post('users/login',
            {
              uphone: _this.phonenum,
              upwd: _this.password
            }).then(function (result) {
            let info = eval("(" + result.request.response + ")");
            console.log(info)

            if (info.code == 200) {
              setTimeout(function () {
                _this.$router.push('/')
              }.bind(this), 1000);
              sessionStorage.setItem('sphone',info.data.uphone);
              sessionStorage.setItem('spassword',info.data.upwd);
              sessionStorage.setItem('sname',info.data.uname);
              sessionStorage.setItem('uid',info.data.uid);
              window.location.href='http://localhost:8080/'

            }
            else {
            // alert('用户名或密码错误')
              _this.$message({
                message: '用户名或密码错误',
                duration:1000
              });
            }
          });
        }
      },
    },
    // watch: {
    //   '$route' (to, from) {
    //     this.$router.go(0);
    //   }},
  }

</script>

<style scoped>
  .allRegidter{
    height: 800px;
    margin-top: 80px;
  }
  .mcontainer{
    width: 100%;
    height:500px;
    background-image: url("../../assets/home/san.png");
    background-repeat: no-repeat;
  }
  .wai{

    padding:50px 50px 50px 20px;
    /*height: 200px;*/
    border:2px solid gainsboro;
    box-shadow: 4px 4px 8px gainsboro;
  }


</style>
