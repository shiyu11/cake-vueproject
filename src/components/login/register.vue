<template>
  <div class="mcontainer">
    <div class="allRegidter">
      <el-row>
        <el-col :sm="8" :md="8" :lg="8" :xl="8"  :offset="12" class="wai">
          <el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="手机号" prop="phoneNum">
              <el-input type="text" v-model="ruleForm.phoneNum" placeholder="请输入手机号" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="userName">
              <el-input type="text" v-model="ruleForm.userName" placeholder="请输入用户名" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" placeholder="请再次输入密码" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="code">
              <el-input type="text" v-model="ruleForm.code" placeholder="请输入验证码" autocomplete="off"></el-input>
              <el-button type="primary" @click="getMessage()">获取验证码</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>

    </div>

  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      var validatePhone = (rule, value, callback) => {
        var pattern = /^1[34578]\d{9}$/
        if (!value) {
          return callback(new Error('手机号不能为空'));
        } else if(!pattern.test(value)){
          callback(new Error('请输入正确的手机号'))
        }else{
          callback()
        }
      };
      var validateName = (rule, value, callback) => {
        var pattern = /^[\w\u4e00-\u9fa5]{3,10}$/g
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else if (!pattern.test(value)) {
          callback(new Error('请输入3-10个字母/汉字/数字/下划线'))
        } else {
          callback()
        }
      }
      var validatePwd = (rule, value, callback) => {
        var pattern = /^\S{3,20}$/g
        if (value === '') {
          callback(new Error('请输入密码'))
        } else if (!pattern.test(value)) {
          callback(new Error('请输入3-20个非空白字符'))
        } else {
          if (this.ruleForm.pass !== '') {
            this.$refs.ruleForm.validateField('checkPass')
          }
          callback()
        }
      }
      var validateRePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var validateCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请获取验证码'));
        } else if (value !== this.getcode) {
          callback(new Error('验证码有误，请重新输入!'));
        } else {
          callback();
        }
      };
      return {
        getcode:'',
        ruleForm: {
          phoneNum:'',
          userName:'',
          pass: '',
          checkPass: '',
          code:'',
        },
        rules2: {
          phoneNum: [
            { validator: validatePhone, trigger: 'blur' }
          ],
          userName: [
            { validator: validateName, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePwd, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validateRePass, trigger: 'blur' }
          ],
          code: [
            { validator: validateCode, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      getMessage() {
        let _this = this
        axios.get(`http://127.0.0.1:3000/users/getallphone/${_this.ruleForm.phoneNum}`).then((result) => {
          let info = eval("(" + result.request.response + ")");
          if (info.data.length != 0) {
            alert("该用户已经注册,请直接登录!")
          } else {
            _this.getcode = ''
            for (let i = 0; i < 6; i++) {
              _this.getcode += Math.floor(Math.random() * 10);
            }
            alert(_this.getcode)
          }
        }, (err) => {
          console.log(result.err)
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('注册成功!');
            let _this = this
            axios.post("http://localhost:3000/users/register", {
              uphone: _this.ruleForm.phoneNum,
              upwd: _this.ruleForm.pass,
              uname: _this.ruleForm.userName,
            }).then((result)=> {
              _this.$router.push('/login')
              console.log(result.data)
            },(err) =>{
              console.log(result.err)
            })
          } else {
            console.log('注册失败!!');
            return false;
          }
        });

      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    }
  }
</script>
<style>
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
    padding:20px;
    border:2px solid gainsboro;
    box-shadow: 4px 4px 8px gainsboro;
  }
</style>
