<template>
  <div class="el-container">
    <div class="form-1">
      <h3 style="text-align: center;margin-top: 10px" >个人资料</h3>
      <!--:label-position="labelPosition"-->
      <el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-width="100px" class="demo-ruleForm demo-dynamic" >
        <el-form-item label="姓名" prop="uname">
          <el-input v-model="ruleForm.uname" style="width: 200px;"></el-input>
          <span>请输入3-20个字符</span>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email" style="width: 200px"></el-input>
          <span>小梦会发送最新的活动信息给您哒</span>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="ruleForm.sex">
            <el-radio label="男" value="1" ></el-radio>
            <el-radio label="女" value="2"></el-radio>
          </el-radio-group>
        </el-form-item>
        <!--<el-form-item label="生日" prop="birth1">-->
        <!--<el-radio-group v-model="birth1">-->
        <!--<el-radio label="公历" value="1"></el-radio>-->
        <!--<el-radio label="农历" value="2"></el-radio>-->
        <!--</el-radio-group>-->
        <!--</el-form-item>-->
        <!--{{changer(users.birth)}}-->
        <el-form-item label="生日：" required>
          <el-input v-model="ruleForm.birth" style="width: 200px"></el-input>
          <span>请按照年-月-日或者/.格式输入</span>
          <!--<el-form-item prop="date">-->
          <!--<el-date-picker type="date" placeholder="选择日期" v-model="birth" style="width: 200px"></el-date-picker>-->
          <!--</el-form-item>-->
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    name: "UserData",
    data() {
      return {
        ruleForm: {
        // labelPosition: 'right',
        uname: '',
        email:'',
        sex:'',
        birth:'',
        date: '',
        // type: [],
        },
        rules: {
          uname: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ],
          birth:[
            { required: true, message: '请输入生日', trigger: 'change' }
          ],
          // type: [
          //   { type: 'array', required: true, message: '请至少选择一个喜欢的口味', trigger: 'change' }
          // ],
        }
      }
    },
    computed: {
      uid() {
        return sessionStorage.getItem('uid')
        // console.log(this.$store.state.userInfo.userId)
      }
    },
    //修改信息
    methods: {
      // submitForm(formName) {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let _this=this
            this.$axios.post('users/updateusers', {
              uid: sessionStorage.getItem('uid'),
              uname: _this.ruleForm.uname,
              sex: _this.ruleForm.sex,
              birth:_this.ruleForm.birth,
              email: _this.ruleForm.email,
            })
            alert('修改成功');
          }
          // else {
          //   console.log('修改失败');
          //   return false;
          // }
        });
      },
      changer(time){
        return time.split('T')[0];
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    //获取信息
    mounted: function () {
      let _this = this;
      this.$axios.get('users/getOneUsers/' + sessionStorage.getItem('uid'), {}).then((response) => {
        _this.ruleForm.uname = response.data.data[0].uname,
        //   console.log('哈哈哈'+JSON.stringify(response.data.data) )
        // console.log('猪头黄'+this.ruleForm.uname)
          _this.ruleForm.sex=response.data.data[0].sex,
          _this.ruleForm.birth=_this.changer(response.data.data[0].birth),
          _this.ruleForm.email = response.data.data[0].email
        // console.log('' + _this.Info11)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
</script>

<style scoped>
  .el-container {
    height: 765px;
    width: 100%;
    background: url("../../../static/images/hmhpic/bg-1.jpg") no-repeat;
  }
  .form-1{
    margin-top: 180px;
    margin-left: 81px;
  }
  label{text-align: left}
  .el-form-item span{
    color: lightslategrey;
    font-size: 12px;
  }

  span{
    font-size: 30px;
  }
</style>
