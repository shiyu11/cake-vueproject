<template>
    <div class="register">
      <el-form ref="form" :model="form">
        <p>用户注册</p>
        <el-form-item>
          <el-input v-model="form.phonenumber" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item>
              <el-input v-model="form.ver" placeholder="验证码"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-button type="primary" @click="onSubmit">获取验证码</el-button>
          </el-col>
        </el-row>
        <el-form-item>
        <el-button type="primary" @click="onSubmit">注册</el-button>
        </el-form-item>
        <el-checkbox label="我已阅读并同意保护协议" name="type"></el-checkbox>
      </el-form>
    </div>

</template>

<script>
  export default {
    data() {
      return {
        form: {
         phonenumber:'',
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    },
  };
</script>
<style scoped>
.register{
  height: 600px;
  width: 450px;
  margin:60px auto;
}
</style>
