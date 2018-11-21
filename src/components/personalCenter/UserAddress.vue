<template>
  <div>
    <div>
      <el-button type="text" @click="dialogFormVisible = true" class="tab">添加新的收货地址</el-button>
      <div class="row">
        <!--<div v-for="(address,index) in ad" v-if="index<4">-->
        <div>
          <div class="col-md-11">
            <table class="table">
              <thead>
              <tr>
                <th>收货人姓名</th>
                <th>电话</th>
                <th>详细地址</th>
                <!--<th>默认地址</th>-->
                <!--<th>地址操作</th>-->
              </tr>
              </thead>
              <tbody>
              <tr v-for="address in ad">
                <td>{{address.aname}}</td>
                <td>{{address.phone}}</td>
                <td>{{address.address}}</td>
                <!--<td>{{address.defaultaddress}}</td>-->
              </tr>
              </tbody>
            </table>
            <!--<span>姓名：{{address.aname}}</span>-->
            <!--<span>电话：{{address.phone}}</span>-->
            <!--<span>详细地址：{{address.address}}</span>-->
            <!--<span>{{address.defaultaddress}}</span>-->
          </div>
        </div>
      </div>
      <!--<my-address></my-address>-->
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
          <!--<el-form-item label="设为默认地址">-->
            <!--<el-switch v-model="form.defaultaddress"></el-switch>-->
          <!--</el-form-item>-->
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
  // import UsergetAddress from './UsergetAddress'
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
        mydata:[],
        mypid: this.$route.params.pid,
        ad:[ ],
      }
    },
    //获取用户的地址
    mounted(){
     this.load();
     this.getAlladdress();
    },
    //添加新的地址
   methods:{
     load(){
       this.$axios.get(`alladdress/${sessionStorage.getItem('uid')}`).then((res)=>{
         //渲染页面
         // console.log(res)
         this.mydata = res.data.data;
       }),(err)=>{
         console.log(err)
       }
     },
     getAlladdress(){
       let _this=this;
       this.$axios.get(`alladdress/${sessionStorage.getItem('uid')}`).then((res)=>{
         //渲染页面
         // console.log(res);
         _this.ad = res.data.data;
       }),(err)=>{
         console.log(err)
       }
     },
     confirm(){

        if(this.form.aname == ''||this.form.phone == ''||this.form.address == ''){
          alert('姓名，手机号，地址不能为空！请重新添加')
        }else {
          let _this = this;
        this.$axios.post('addaddress',{
          uid:sessionStorage.getItem('uid'),
          aname:this.form.aname,
          phone:this.form.phone,
          // region:this.form.region,
          address:this.form.address,
          defaultaddress:this.form.defaultaddress,
        }).then((res)=>{
          _this.$router.go(0);
        })
      }
     }
   },

  }
</script>

<style scoped>
  .el-container{
    border: 2px solid transparent;
    margin: 20px;
    margin-left: 10px;
  }
  .tab{
    font-size: 16px;
    color: white;
    border-radius: 25px 0 25px 0;
    background-color:rgb(176,146,106);
    opacity: 0.8;
    margin-bottom: 12px;
    padding:12px;
  }
</style>
