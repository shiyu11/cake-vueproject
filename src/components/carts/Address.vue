<template>
    <div class="container">
      <div class="row">
        <div class="Occupant">
          <br>
          <h4 class="demonstration">选择收货地址</h4>
          <div class="occf">
             <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
              <el-form-item label="收货人姓名" prop="name">
                <el-input v-model="ruleForm.name"placeholder="请输入真实的姓名"></el-input>
              </el-form-item>
                 <el-form-item label="手机号" prop="phone">
                <el-input v-model="ruleForm.phone" placeholder="请输入手机号"></el-input>
              </el-form-item>
                          <el-form-item label="地址" prop="Address">
                             <el-cascader :options="options2" @active-item-change="handleItemChange" :props="props" v-model="ruleForm.Address">
                             </el-cascader>
                          </el-form-item>
              <el-form-item label="详细地址" prop="address">
                <el-input v-model="ruleForm.phone" placeholder="请输入详细地址"></el-input>
              </el-form-item>
              
              <el-form-item>
                <el-button type="danger" @click="submitForm('ruleForm')">确定</el-button>
              </el-form-item>
            </el-form>
          </div>
          <br>
        </div>
      </div>
    </div>
</template>

<script>
  export default {

    data() {
      return {
        options2:[
        {label:'请选择'},
          {label:'上海',cities:[{label:'徐汇区'},{label:'宝山区'},{label:'黄浦区'},{label:'虹口区'},{label:'金山区'},{label:'松江区'},{label:'南汇区'},{label:'杨浦区'}]},
          {label:'苏州',cities:[{label:'姑苏区'},{label:'平江区'},{label:'吴中区'},{label:'高新区'},{label:'虎丘区'},{label:'工业园区'},{label:'相城区'},{label:'吴江区'}]}
        ],
        props:{
          value:'label',
          children:'cities'
        },

        ruleForm: {
          name: '',
          phone:'',
          // Address:'',
          address:''
        },
        rules: {
          name:[
            {required: true, message: '请输入真实姓名', trigger: 'blur' },
            { min: 2, message: '长度至少 2 个字符', trigger: 'blur' }
          ],
          phone:[
            {required: true, message: '请输入真实手机号', trigger: 'blur' },
            {inputPattern:/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/ ,
              message: '长度在 8 到 11 个字符', trigger: 'blur' }
          ],
          Address:[
            {required: true, message: '请选择', trigger: 'blur' }
          ],
          address:[
            {required: true, message: '请输入地址', trigger: 'blur' },
            { min: 2, message: '长度至少 2 个字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      handleItemChange(val){
      console.log('active item:',val);
      setTimeout(_=>{
      if(val.indexOf('上海')>-1 && !this.options2[0].cities.length){
      this.options2[0].cities = [{
      label:'徐汇区'
      }];
      }else if (val.indexOf('苏州') > -1 && !this.options2[1].cities.length){
      this.options2[1].cities = [{
      label:'姑苏区'
      }]
      }
      })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('添加成功!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
  .Occupant{
    border: 1px solid gainsboro;
    box-shadow: 4px 4px 8px grey;
  }


  .occf{
    /*border:1px solid gainsboro;*/
    margin-left: 30px;
    /*width: 450px;*/
  }
  .label {
    font-size: 180%;
  }
</style>
