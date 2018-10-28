<template>
  <div>
    <div>
      <el-button type="text" @click="dialogFormVisible = true" class="tab">添加新的收货地址</el-button>

      <my-address></my-address>
    </div>
    <div class="el-container">

      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="收货人" :label-width="formLabelWidth">
            <el-input v-model="form.aname" autocomplete="off" placeholder="收货人姓名" style="width: 370px"></el-input>
          </el-form-item>
          <el-form-item label="联系方式" :label-width="formLabelWidth">
            <el-input v-model="form.phone" autocomplete="off" placeholder="收货人手机号" style="width: 370px"></el-input>
          </el-form-item>
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
      <div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import UsergetAddress from './UsergetAddress'
  export default {
    name: "UserAddress",
    data(){
      return{
        dialogFormVisible: false,
        form: {
          uid:'',
          aname:'',
          phone:'',
          address:'',
          defaultaddress: false,
          // type: [],
          resource: '',
          desc: '',
        },
        formLabelWidth: '120px',
        mydata:[]
      }
    },
    //获取用户的地址
    mounted(){
      axios.get(`http://localhost:3000/alladdress/${sessionStorage.getItem('uid')}`).then((res)=>{

        //渲染页面
        // console.log(res)
        this.mydata = res.data.data;
      }),(err)=>{
        console.log(err)
      }
    },
    //添加新的地址
   methods:{
      confirm(){
        axios.post('http://localhost:3000/addaddress',{
          uid:sessionStorage.getItem('uid'),
          aname:this.form.aname,
          phone:this.form.phone,
          // region:this.form.region,
          address:this.form.address,
          defaultaddress:this.form.defaultaddress,

        }).then((res)=>{
          alert('添加成功')
          this.$router.push({path:'/usercenter/UserAddress'})
        })
      }
    },
    components:{
      'my-address':UsergetAddress
    }
  }
</script>

<style scoped>
  .el-container{
    border: 2px solid transparent;
    margin: 20px;
    margin-left: 10px;
  }
</style>
