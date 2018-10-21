<template>
    <div class="el-container">
      <div>
        <el-button type="text" @click="dialogFormVisible = true" class="tab">添加新的收货地址</el-button>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="收货人" :label-width="formLabelWidth">
              <el-input v-model="form.aname" autocomplete="off" placeholder="收货人姓名" style="width: 370px"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" :label-width="formLabelWidth">
              <el-input v-model="form.phone" autocomplete="off" placeholder="收货人手机号" style="width: 370px"></el-input>
            </el-form-item>
            <!--<el-form-item label="城市" :label-width="formLabelWidth">-->
              <!--&lt;!&ndash;<el-select v-model="form.region" placeholder="请选择地区" style="width: 370px">&ndash;&gt;-->
                <!--<el-cascader-->
                  <!--:options="options"-->
                  <!--v-model="selectedOptions"-->
                  <!--@change="handleChange">-->
                <!--</el-cascader>-->
                <!--<el-option label="上海" value="shanghai"></el-option>-->
                <!--<el-option label="苏州" value="suzhou"></el-option>-->
              <!--&lt;!&ndash;</el-select>&ndash;&gt;-->
            <!--</el-form-item>-->
            <el-form-item label="详细地址" :label-width="formLabelWidth">
              <el-input v-model="form.address" autocomplete="off" placeholder="收货人详细地址" style="width: 370px"></el-input>
            </el-form-item>
            <el-form-item label="设为默认地址">
              <el-switch v-model="form.defaultaddress"></el-switch>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false;confirm()">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "UserAddress",
      data(){
          return{
            dialogFormVisible: false,
            form: {
              uid:1,
              aname:'',
              phone:'',
              // region: '',
              address:'',
              defaultaddress: false,
              type: [],
              resource: '',
              desc: ''
            },
            formLabelWidth: '120px',

          }
      },
      methods:{
          // showData(e){
          //   console.log(e)
          //   console.log(this.form)
          // },
        confirm(){
           axios.post('http://localhost:3000/orderAdd2',{
             uid:1,
             aname:this.form.aname,
             phone:this.form.phone,
             address:this.form.address,
             defaultaddress:this.form.defaultaddress,
           })
        }
      }
          }
</script>

<style scoped>
  .el-container{
    border: 2px solid transparent;
    margin: 80px;
    margin-left: 30px;
  }
</style>
