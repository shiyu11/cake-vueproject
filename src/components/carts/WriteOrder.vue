<template>
  <div>
  <div class="container">
    <div class="row">
      <hr>
      <div class="checkout-title">
        <span class="span2">CONFIRMATION</span>
        <h4>订单确认</h4>
      </div>

      <div class="Occupant">
        <br/>
        <el-button type="text" @click="dialogFormVisible = true" class="tab">请添加收货地址</el-button>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">

          <el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm" label-width="120px" class="demo-ruleForm">
            <el-form-item label="收货人" prop="name">
              <el-input type="text" v-model="ruleForm.name" placeholder="请输入收货人姓名" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phoneNum">
              <el-input type="text" v-model="ruleForm.phoneNum" placeholder="请输入手机号" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="地址" prop="address">
              <el-input type="text" v-model="ruleForm.address" placeholder="请输入详细地址" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')" >确 定</el-button>
              <el-button @click="dialogFormVisible = false">取 消</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>

        <div v-if="submited" class="address">
                 收货人：{{ruleForm.name}},&nbsp;&nbsp;收货地址：{{ruleForm.address}},&nbsp;{{ruleForm.phoneNum}}<span class="myupdate" v-on:click="update">修改</span><span class="mydel" v-on:click="del">删除</span>
        </div>
      </div>

      <br/>
      <div class="Occupant">
        <br>
        <h4 class="demonstration">选择配送日期</h4>
        <div class="occf">
          <el-date-picker v-model="time" type="datetime" placeholder="选择日期时间" format="yyyy年MM月dd HH时mm" value-format="yyyy-MM-dd-HH-mm" default-time="12:00:00"></el-date-picker><hr>
          <p style="color:darkgray">配送时间:10:00-22:00，当天21:30至次日9:00的订单，<br/>最早配送时间为次日14:00；
            实际配送时间会有前后30分钟<br/>误差；配送当天不可修改。</p>
        </div>
      </div>
      <hr>

        <el-row>
          <el-col :span="15" :offset="2">
            <h4>确认商品信息</h4>
          </el-col>
        </el-row>
        <table class="table">
          <tbody>
          <tr>
            <td></td>
            <td>商品</td>
            <td>规格</td>
            <td>单价</td>
            <td>数量</td>
            <td>小计</td>
          </tr>

          <tr v-for="(onew,index) in mydata">
            <td>
              <img :src="onew.ppic" style="width:30%">
            </td>
            <td width="20%">
              <div class="info">
                <h5>{{ onew.pname }}</h5>
                <p>赠品：标配餐具10份  生日蜡烛1支</p>
              </div>
            </td>
            <td width="15%" class="size">
              {{onew.size}}
            </td>
            <td width="10%" class="price">{{ onew.pprice }}</td>
            <td width="10%" class="num">{{onew.rnum}}</td>
            <td width="10%" class="allprice">{{ onew.pprice * onew.rnum }}</td>
          </tr>
          </tbody>
        </table>
      <hr>
      <div class="Occupant">
        <br>
        <h4 class="demonstration">选择支付方式</h4>
        <div class="myradio">
         <input type="radio" name="radios" checked><img src="../../../static/images/a12.png" style="width:10%;">
         <input type="radio" name="radios"><img src="../../../static/images/a13.gif" style="width:10%;">
         <input type="radio" name="radios"><img src="../../../static/images/a14.jpg" style="width:10%;">
        </div>
      </div>

      <br/>
      <table class="table" style="text-align: right">
        <tbody>
        <tr>
          <td><span class="span4">{{totalNum}}</span>件商品，总商品金额：￥{{totalMoney}}</td>
        </tr>
        <tr>
          <td>应付总额：<span class="span3">￥{{totalMoney}}</span></td>
        </tr>
        <tr>
          <td>配送至：{{ruleForm.address}},收货人：{{ruleForm.name}}，{{ruleForm.phoneNum}}</td>
        </tr>
        </tbody>
      </table>

      <div style="text-align:right;">
        <button class="btn btn-primary" v-on:click="submit()">提交订单</button>
      </div>
      <div style="text-align:right;">
        <router-link to="/cart">返回购物车</router-link>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: "OrderDetail",
    computed: {
      time: {
        get: function () {
          return this.$store.state.time1
        },
        set(value) {
          this.$store.state.time1 = value
        }
      },
    },
    data() {
      var validateName = (rule, value, callback) => {
        var pattern = /^[\w\u4e00-\u9fa5]{2,10}$/g
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else if (!pattern.test(value)) {
          callback(new Error('请输入2-10个字母/汉字/数字/下划线'))
        } else {
          callback()
        }
      }
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
      var validateAddress = (rule, value, callback) => {
        var pattern = /^[\w\u4e00-\u9fa5]{3,30}$/g
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else if (!pattern.test(value)) {
          callback(new Error('请输入3-30个字母/汉字/数字/下划线'))
        } else {
          callback()
        }
      }
      return {
        dialogFormVisible: false,
        submited:false,
        mydata:'',
        ruleForm: {
          name:'',
          phoneNum:'',
          address:'',
        },
        aname:sessionStorage.getItem('aname'),
        phone:sessionStorage.getItem('phone'),
        address:sessionStorage.getItem('address'),
        totalNum:sessionStorage.getItem('totalNum1'),
        totalMoney:sessionStorage.getItem('totalMoney1'),
        rules2: {
          name: [
            { validator: validateName, trigger: 'blur' }
          ],
          phoneNum: [
            { validator: validatePhone, trigger: 'blur' }
          ],
          address: [
            { validator: validateAddress, trigger: 'blur' }
          ],

        },
      };
    },
    methods: {
      update(){
        let _this = this;
        _this.dialogFormVisible = true;
      },
      del(){
        this.submited = false;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            this.dialogFormVisible = false;
            this.submited = true;
          } else {
            this.dialogFormVisible = true;
            this.submited = false;
          }
        });
      },
      submit() {
        if(this.ruleForm.name==''||this.ruleForm.phoneNum==''||this.ruleForm.address==''||this.$store.state.time1==''){
          alert('请确认信息不能为空')
       }else{
          sessionStorage.setItem('aname',this.ruleForm.name);
          sessionStorage.setItem('phone',this.ruleForm.phoneNum);
          sessionStorage.setItem('address',this.ruleForm.address);
          sessionStorage.setItem('time1',this.$store.state.time1);
          this.$router.push({path:'/finish'})
          // for(let i=0; i< this.mydata.length;i++){
          //   axios.post(`http://localhost:3000/orderAdd`, {
          //     state:this.$store.state1,
          //     uid:this.$store.state.uid,
          //     money:this.$store.state.totalMoney1,
          //     address: this.ruleForm.address,
          //     aname: this.ruleForm.name,
          //     phone: this.ruleForm.phoneNum,
          //     rnum:1111,
          //     oid:16,
          //     pid:1,
          //   }).then(function (result) {
          //     console.log(result.data)
          //   })
            alert('订单提交成功')
          // }
        }
      },
    },
    mounted() {
      let _this= this;
      this.mydata=JSON.parse(sessionStorage.getItem('dingpid'));
      console.log('获取的数据'+this.mydata)

      //   // axios.get(`http://localhost:3000/product/details/${product.pid}`).then(function (result) {
    //   //   _this.products = result.data.data;
    //   //   console.log(result.data)
    //   // })
    },
  }
</script>

<style>
  .checkout-title{
    text-align:center;
    margin-bottom: 50px;
    color:darkgray;
  }
  .table{
    background-color:#F2F6F7;
  }
  .span2{
    font-family: 'Comic Sans MS';
    font-size: 32px;
  }
  .span3{
    font-size: 22px;
    color:firebrick;
    font-weight: bold;
  }
  .span4{
    color:firebrick;
  }
  .Occupant{
    border: 1px solid gainsboro;
    box-shadow: 4px 4px 8px gainsboro;
  }
  .occf{
    margin-left: 30px;
  }
  .table{
    background-color:#F2F6F7;
  }
  .price,.allprice,.num,.size{
    line-height:100px;
  }
  .tab{
    color:black;
    font-size: 18px;
  }
  .address{
    margin-bottom: 15px;
  }
  .mydel{
    margin-left:10px;
    cursor: pointer;
  }
  .mydel:hover{
    color:#269abc;
  }
  .myupdate{
    margin-left: 70px;
    cursor: pointer;
  }
  .myupdate:hover{
    color:#269abc;
  }
  .myradio{
    margin-bottom: 20px;
  }
</style>
