<template>
  <div class="container">
    <div class="row">
      <hr>
      <div class="checkout-title">
        <span class="span1">MON  PANIER</span>
        <h4>购物车</h4>
      </div>

      <div v-if="!products.length" class="row cart_list">
        <div class="cart col-xs-1 col-xs-offset-3" ><img src="../../../static/images/a15.png"/></div>
        <div class="col-xs-5" >
          <br/>
          <p class="empty_cart">
          <span>您的购物车还是空的，赶紧行动吧！</span>
          <br/>
          马上进入<router-link to="/">全部产品</router-link>，去挑选您喜欢的商品吧！
        </p></div>
      </div>

      <div v-else>
        <table class="table t_table">
          <thead>
          <tr>
            <th width="3%">
              <input type="checkbox" :checked="checkAllFlag" @click="checkAll">全选
            </th>
            <th></th>
            <th>商品信息</th>
            <th>&nbsp;&nbsp;&nbsp;&nbsp;规格</th>
            <th>单价（元）</th>
            <th>&nbsp;&nbsp;&nbsp;&nbsp;数量</th>
            <th>金额</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="product in products" :key="product.id">
            <td class="input">
              <input type="checkbox" :checked="product.check" @click="checkBox(product)">
            </td>
            <td width="10%">
              <img :src="product.ppic" style="width:80%;">
            </td>
            <td width="8%">
              <div class="info1">
                <h5>{{ product.pname }}</h5>
                <p>赠品：标配餐具10份  生日蜡烛1支</p>
              </div>
            </td>
            <td width="8%" class="size"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{product.size}}磅</td>
            <td width="8%" class="price">￥{{ product.pprice*product.size}}</td>
            <td width="8%">
              <div class="num">
                <el-row>
                  <el-col><span @click="changeMoney(product,-1)" class="span">-</span>
                    {{product.pno}}
                    <span @click="changeMoney(product,1)" class="span">+</span></el-col>
                </el-row>
              </div>
            </td>
            <td width="8%" class="allprice">￥{{ product.pprice * product.size* product.pno }}</td>
            <td width="6%">
              <div class="delpro">
                <span v-on:click="centerDialogVisible= true" @click="del(product.cid)">删除</span>
              </div>
            </td>
          </tr>
          </tbody>
          <tfoot>
          <tr v-if="num!= getnum">
            <td colspan="8" class="text-right">共<span class="myNum">{{totalNum}}</span>件，商品合计<span class="myMoney">{{totalMoney}}</span>元</td>
          </tr>
          </tfoot>
        </table>
        <div style="text-align:right;">
          <button class="btn btn-primary" v-on:click="goHome">继续购物</button>
          <!--<button class="label" v-on:click="goHome">继续购物</button>-->
          <button class="btn btn-primary" v-on:click="commit" v-if="num!= getnum">结算</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "MyCart",
    data(){
      return{
        products:[],
        totalNum:0,
        totalMoney:0,
        checkAllFlag:false,
        dingpid:'',
        num:1,
        centerDialogVisible: false,
        url:this.$store.state.url
      }
    },
    methods:{
      goHome(){
        this.$router.push({path:'/'})
      },
      commit(){
          this.$router.push({path:'/check'})
      },
      changeMoney:function (product,way) {
        if (way>0) {
          product.pno++;
        }else{
          product.pno--;
          if (product.pno<1) {
            product.pno=1;
          }
        }
        this.getTotalMoney();
        this.getTotalNum();
      },
      checkBox:function (product){
        var _this=this;
        var num=0;
        if (typeof product.check == "undefined") {
          this.$set(product,"check",true);
        }else{
          product.check = !product.check;
        }
        this.products.forEach(function (product,value) {
          if (product.check) {
            num++;
          }
        })
        if (num==_this.products.length) {
          this.checkAllFlag=true;
        }else{
          this.checkAllFlag=false;
        }
        this.getTotalMoney();
        this.getTotalNum();
      },
      checkAll:function (){
        var _this=this;
        this.checkAllFlag = !this.checkAllFlag;
        this.products.forEach(function(product,index){
          if (typeof product.check == "undefined") {
            _this.$set(product,"check",_this.checkAllFlag);
          }else{
            product.check = _this.checkAllFlag;
          }
        })
        this.getTotalMoney();
        this.getTotalNum();
      },
      getTotalNum:function () {
        var _this=this;
        this.totalNum = 0;
        this.products.forEach(function (product,index) {
          if (product.check) {
            _this.totalNum += product.pno;
          }
        })
        sessionStorage.setItem('totalNum1',this.totalNum);
      },
      getTotalMoney:function () {
        var _this=this;
        let a = []
        this.totalMoney = 0;
        this.products.forEach(function (product) {
          if (product.check) {
            _this.totalMoney += product.pno*product.size*product.pprice;
            a.push({"pid":product.pid,"cid":product.cid,"pname":product.pname,"rnum":product.pno,"ppic":product.ppic,"pprice":product.pprice,"size":product.size})
          }
        })
        sessionStorage.setItem('totalMoney1',this.totalMoney);
        sessionStorage.setItem('dingpid',JSON.stringify(a));
        // console.log('我的'+JSON.stringify(a))
      },
      del: function (cid) {
        let _this = this
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          $.ajax({
            url:_this.url+"/deletecart/"+cid,
            type:"get",
            success:function(result){
              // alert('删除成功')
              _this.products=[],
                _this.ajax()
              _this.getTotalMoney();
              _this.getTotalNum();
            }
          })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      ajax() {
        let _this=this
        this.$axios.get(`getcart/${sessionStorage.getItem('uid')}`).then(function (result) {
          _this.products = result.data.data;
        })
      }
    },
    created(){
      this.ajax()
      },
    computed: {
      getnum() {
        if (this.totalMoney == 0) {
          return this.num = 1;
        } else {
          this.num = 0;
        }
      },
    }
  }
</script>

<style scoped>

  .checkout-title{
    text-align:center;
    margin-bottom: 50px;
    color:darkgray;
  }
  .t_table{
    background-color:#F2F6F7;
    border-radius: 20px;
  }
  .label{
    background: #80b5ea;
    font-size: 13px;
    padding:8px;
  }
  .span1{
    font-family: 'Comic Sans MS';
    font-size: 32px;
  }
  .input,.size,.price,.allprice{
    line-height:120px;
  }
  .num{
    width: 100%;
    line-height:120px;
  }
  .span{
    margin: 8px;
    cursor: pointer;
  }
  .cart_list{
    display:block;
    margin-top: 50px;
    margin-bottom: 180px;
  }
  .empty_cart span{
    font-size: 24px;
  }
  .empty_cart{
    line-height: 34px;
  }
  .cart{
    padding-right: 120px;
  }
  /*.deltitle{*/
    /*margin-left:50px;*/
    /*font-size: 18px;*/
  /*}*/
  .delpro{
    cursor: pointer;
    width: 100%;
    margin-top: 50px;
  }
  .myNum,.myMoney{
    color:firebrick;
    font-weight: bold;
    font-size:20px;
  }
</style>


