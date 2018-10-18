<template>
  <div class="loginss">
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="普通登陆" name="first">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
        <el-form-item label="用户名:" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input v-model="ruleForm.password" placfeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登陆</el-button>
        </el-form-item>
        <el-row>
          <el-col :span="12"><el-checkbox label="记住密码" name="type"></el-checkbox></el-col>
          <el-col :span="6"><p><a rel="#">忘记密码</a></p></el-col>
          <el-col :span="6"> <p><a rel="#">去注册</a></p></el-col>
        </el-row>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="手机验证登陆" name="second">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
        <el-form-item prop="phoneuser">
          <el-input v-model="ruleForm.phoneuser" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-row>
            <el-col :span="12">
              <el-form-item prop="ver">
                <el-input v-model="ruleForm.ver" placeholder="验证码"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-button type="primary" @click="onSubmit">获取验证码</el-button>
              </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second',
        ruleForm: {
          user: '',
          password: '',
          phoneuser:'',
          ver:''
        },
        rules: {
          name: [
            {required: true, message: '用户名不能为空', trigger: 'blur'},
          ],
         password: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ],
          phoneuser: [
            {required: true, message: '用户名不能为空', trigger: 'blur'},
          ],
          ver: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ],
        },
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      onSubmit() {
        console.log('submit!');
      }
    },
  };
</script>
<style>
  .loginss{
    height: 600px;
    width: 450px;
    margin:60px auto;
  }
</style>
