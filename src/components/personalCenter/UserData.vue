<template>
    <div class="el-container">
      <div class="form-1">
        <h3>个人资料</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm demo-dynamic" >
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name" style="width: 220px;"></el-input>
            <span>可输入3-20个字符</span>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email" style="width: 220px"></el-input>
            <span>小梦会发送最新的活动信息给您哒</span>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="ruleForm.sex">
              <el-radio label="男" value="1" ></el-radio>
              <el-radio label="女" value="2"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="生日" prop="birthday">
            <el-radio-group v-model="ruleForm.birthday">
              <el-radio label="公历"></el-radio>
              <el-radio label="农历"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="年/月/日" required>
            <el-col :span="11" style="padding-left: 0">
              <el-form-item prop="date">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date" style="width: 220px"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="喜欢的口味" prop="type">
            <el-col :span="14">
              <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="拿破仑" name="type"></el-checkbox>
                <el-checkbox label="鲜奶" name="type"></el-checkbox>
                <el-checkbox label="慕斯" name="type"></el-checkbox>
                <el-checkbox label="芝士" name="type"></el-checkbox>
                <el-checkbox label="巧克力" name="type"></el-checkbox>
                <el-checkbox label="咖啡" name="type"></el-checkbox>
                <el-checkbox label="坚果" name="type"></el-checkbox>
                <el-checkbox label="水果" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-col>

          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

</template>

<script>
    export default {
      name: "UserData",
      data() {
        return {
          ruleForm: {
            name: '',
            email:'',
            sex:'',
            birthday:'',
            date: '',
            type: [],
          },
          rules: {
            name: [
              { required: true, message: '请输入姓名', trigger: 'blur' },
              { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
            ],
            email: [
              { required: true, message: '请输入邮箱', trigger: 'blur' },
              { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
            ],
            sex:[
              { required: true, message: '请选择性别', trigger: 'change' }
            ],
            birthday:[
              { required: true, message: '请选择生日', trigger: 'change' }
            ],
            date: [
              { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            ],
            type: [
              { type: 'array', required: true, message: '请至少选择一个喜欢的口味', trigger: 'change' }
            ],
          }
        }
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>
  .el-container {
    height: 980px;
    width: 780px;
    background: url("../../../static/images/hmhpic/bg-1.png") no-repeat;
    margin: 20px;
    margin-left: 60px;
    position: absolute;
  }
  .form-1{
    position: relative;
    top: 140px;
    left: 50px;
  }
  label{text-align: left}
  .el-form-item span{
    color: lightslategrey;
    font-size: 12px;
  }
  .el-checkbox-group{

  }
  .el-checkbox label{
    color: red !important;
  }

  .el-col{


  }
  span{
    font-size: 30px;
  }
</style>
