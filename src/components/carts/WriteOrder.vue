<template>
  <div>
  <div class="container">
    <div class="row">
      <div>
        <hr>
      </div>

      <div class="checkout-title">
        <span class="span2">CONFIRMATION</span>
        <h4>订单确认</h4>
      </div>

      <!--添加收货地址-->
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
            <!--<el-form-item label="地址" prop="Address">-->
              <!--<el-cascader :options="options2" v-model="ruleForm.Address" @active-item-change="handleItemChange" :props="props"></el-cascader>-->
            <!--</el-form-item>-->
            <el-form-item label="详细地址" prop="address">
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
      <!--选择配送时间-->
      <div class="Occupant">
        <br>
        <div style="width: 12%">
          <h4 class="date">请选择配送日期</h4>
        </div>
        <div class="occf">
          <el-date-picker v-model="time" type="datetime" placeholder="选择日期时间" format="yyyy年MM月dd HH时mm" value-format="yyyy-MM-dd-HH-mm" default-time="12:00:00"></el-date-picker>
          <p style="color:#ccc">配送时间:10:00-22:00，当天21:30至次日9:00的订单，<br/>最早配送时间为次日14:00；
            实际配送时间会有前后30分钟<br/>误差；配送当天不可修改。</p>
        </div>
      </div>
     <br/>
      <!--购买的商品-->
        <el-row>
          <el-col :span="15" :offset="2">
            <h4>确认商品信息</h4>
          </el-col>
        </el-row>
        <table class="table t_table">
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
            <td width="20%">
              <img :src="onew.ppic" style="width:50%">
            </td>
            <td width="20%">
              <div class="info1">
                <h5>{{onew.pname}}</h5>
                <p>赠品：标配餐具10份  生日蜡烛1支</p>
                <el-select v-model="value4" clearable placeholder="选择生日牌">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </td>
            <td width="10%" class="size">
              {{onew.size}}磅
            </td>
            <td width="10%" class="price">￥{{ onew.pprice*onew.size }}</td>
            <td width="10%" class="num">{{onew.rnum}}</td>
            <td width="10%" class="allprice">￥{{ onew.pprice * onew.rnum*onew.size }}</td>
          </tr>
          </tbody>
        </table>
      <br/>
      <div class="Occupant">
        <br>
        <div style="width: 12%">
        <h4 class="note">添加订单留言</h4>
        </div>
        <div>
          <el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm" label-width="60px" class="demo-ruleForm">
            <el-form-item label="留言：" prop="note">
              <el-input type="textarea" v-model="ruleForm.note" placeholder="请填写50之内的汉字" autocomplete="off" style="width:35%"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <br/>
      <!--选择支付方式-->
      <div class="Occupant">
        <br>
        <div style="width: 12%">
        <h4 class="pay">选择支付方式</h4>
        </div>
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
        // options2: [{
        //   label: '苏州',
        //   cities: []
        // }, {
        //   label: '上海',
        //   cities: []
        // }],
        // props: {
        //   value: 'label',
        //   children: 'cities'
        // },
        dialogFormVisible: false,
        submited:false,
        mydata:'',
        ruleForm: {
          name:'施宇',
          phoneNum:'18252588759',
          // Address:'',
          address:'江苏省苏州市工业园区雪堂街1号',
        },
        aname:sessionStorage.getItem('aname'),
        phone:sessionStorage.getItem('phone'),
        // Address:sessionStorage.getItem('Address'),
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
          ]},
        options: [{
          value: '选项1',
          label: '生日快乐'
        }, {
          value: '选项2',
          label: 'Happy Birthday'
        }, {
          value: '选项3',
          label: '节日快乐'
        }, {
          value: '选项4',
          label: '一生有你真好'
        }, {
          value: '选项5',
          label: 'I love you'
        }, {
          value: '选项6',
          label: '百岁无忧'
        }, {
          value: '选项7',
          label: '陪伴是最长情的告白'
        },{
          value: '选项8',
          label: '爱你一生一世'
        }],
        value4: ''
      };
    },
    methods: {
      // handleItemChange(val) {
      //   console.log('active item:', val);
      //   setTimeout(_ => {
      //     if (val.indexOf('苏州') > -1 && !this.options2[0].cities.length) {
      //       this.options2[0].cities = [{label: '吴中区'},{label: '工业园区'},{label: '姑苏区'},
      //         {label: '相城区'},{label: '虎丘区'},{label: '吴江区'},{label: '昆山市'},{label: '常熟市'},];
      //     } else if (val.indexOf('上海') > -1 && !this.options2[1].cities.length) {
      //       this.options2[1].cities = [{label: '浦东新区'},{label: '徐家汇区'},{label: '黄浦区'},
      //         {label: '金山区'},{label: '虹口区'},{label: '嘉定区'},{label: '宝山区'},{label: '宝山区'},];
      //     }

      //   }, 300);
      // },
      update(){
        let _this = this;
        _this.dialogFormVisible = true;
      },
      del(){
        this.submited = false;
        this.ruleForm='';
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
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
          // sessionStorage.setItem('Address',this.ruleForm.Address);
          sessionStorage.setItem('address',this.ruleForm.address);
          sessionStorage.setItem('time1',this.$store.state.time1);
          this.$router.push({path:'/finish'})
            this.$axios.post(`orderAdd1`,{
              state:'待收货',
              uid:sessionStorage.getItem('uid'),
              money:sessionStorage.getItem('totalMoney1'),
              address: this.ruleForm.address,
              aname: this.ruleForm.name,
              phone: this.ruleForm.phoneNum,
              note: this.ruleForm.note,
            }).then(function (result) {
              console.log(result.data)
            })
            alert('订单提交成功')
            this.addproduct()
        }
        sessionStorage.setItem('product',JSON.stringify(this.mydata));
        console.log('我的'+JSON.stringify(this.mydata))
      },
      addproduct(){
        let _this=this
        for(let i=0;i<this.mydata.length;i++){
          this.$axios.post(`orderAdd2`,{
            uid:sessionStorage.getItem('uid'),
            pid:_this.mydata[i].pid,
            rnum:_this.mydata[i].rnum
          }).then(function (result) {
            console.log('成功')
          })
          this.$axios.get(`deletecart/`+_this.mydata[i].cid).then(function (result) {})
        }
      },
    },
    mounted() {
      this.mydata=JSON.parse(sessionStorage.getItem('dingpid'));
      console.log('获取的数据'+JSON.stringify(this.mydata))
    },
  }
</script>

<style>
  .checkout-title{
    text-align:center;
    margin-bottom: 50px;
    color:darkgray;
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
    box-shadow: 2px 2px 3px gainsboro;
  }
  .occf{
    margin-left: 30px;
  }
  .t_table{
    background-color:#F2F6F7;
  }

  .tab{
    color:white;
    font-size: 16px;
    border-radius: 25px 0 25px 0;
    background: #337AB7;
    opacity: 0.8;
    margin-bottom: 12px;
    padding:12px;
  }
  .date,.note,.pay{
    color:white;
    font-size: 16px;
    border-radius: 25px 0 25px 0;
    background: #337AB7;
    opacity: 0.8;
    padding:12px;
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

<style scoped>
  .price,.allprice,.num,.size{
  line-height:100px;
  }
</style>
