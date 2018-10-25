<template>
  <div class="container">
    <div class="row">
      <hr>
      <div class="checkout-title">
        <span class="span1">MON  PANIER</span>
        <h4>购物车</h4>
      </div>

      <table class="table">
        <thead>
        <tr>
          <th width="6%">
            <input type="checkbox" :checked="checkAllFlag" @click="checkAll">全选
          </th>
          <th></th>
          <th>商品信息</th>
          <th>规格</th>
          <th>单价（元）</th>
          <th>数量</th>
          <th>金额</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="product in products" :key="product.id">
          <td width="5%" class="input">
            <input type="checkbox" :checked="product.check" @click="checkBox(product)">
          </td>
          <td>
            <img :src="product.ppic" style="width:35%;">
          </td>
          <td width="16%">
            <div class="info">
              <h5>{{ product.pname }}</h5>
              <p>赠品：标配餐具10份  生日蜡烛1支</p>
            </div>
          </td>
          <td width="10%" class="size">{{product.size}}</td>
          <td width="10%" class="price">{{ product.pprice }}</td>
          <td width="10%">
            <div class="num">
              <el-row>
                <el-col><span @click="changeMoney(product,-1)" class="span">-</span>
                  {{product.pnum}}
                  <span @click="changeMoney(product,1)" class="span">+</span></el-col>
              </el-row>
            </div>
          </td>
          <td width="10%" class="allprice">{{ product.pprice * product.pnum }}</td>
          <td width="10%">
            <div class="button">
              <button v-on:click="del(product.cid)">删除</button>
            </div>
          </td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td colspan="8" class="text-right">共{{totalNum}}件，商品合计{{totalMoney}}元</td>
        </tr>
        </tfoot>
      </table>
      <div style="text-align:right;">
        <button class="btn btn-primary" v-on:click="goHome">继续购物</button>
        <button class="btn btn-primary" v-on:click="commit">结算</button>
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
        products:[
          // {id:1,pname:'蓝莓轻乳拿破仑',pnum:2,ppic:require("../../assets/a3.jpg"),size:'2磅',price:198},
          // {id:2,pname:'奶酪轻乳拿破仑',pnum:1,ppic:require("../../assets/a5.jpg"),size:'3磅',price:178},
          // {id:3,pname:'草莓轻乳拿破仑',pnum:3,ppic:require("../../assets/a3.jpg"),size:'5磅',price:218}
        ],
        totalNum:0,
        totalMoney:0,
        checkAllFlag:false
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
          product.pnum++;
        }else{
          product.pnum--;
          if (product.pnum<1) {
            product.pnum=1;
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
            _this.totalNum += product.pnum;
          }
        })
      },
      getTotalMoney:function () {
        var _this=this;
        this.totalMoney = 0;
        this.products.forEach(function (product,index) {
          if (product.check) {
            _this.totalMoney += product.pnum*product.pprice;
          }
        })
      },
      del: function (cid) {
        // var index=this.products.indexOf(index);
        // this.products.splice(index,1);

        let _this = this
        $.ajax({
          url:"http://localhost:3000/deletecart/"+cid,
          type:"get",
          success:function(result){
            _this.products=[],
              _this.ajax()
            _this.getTotalMoney();
            _this.getTotalNum();
          }
        })
      },
      ajax() {
        let _this=this
        axios.get(`http://localhost:3000/getcart/${this.$store.state.uid}`).then(function (result) {
          _this.products = result.data.data;
          console.log(result.data)
        })
      }
    },
    created(){
      this.ajax()
      }
  }
</script>

<style scoped>

  .checkout-title{
    text-align:center;
    margin-bottom: 50px;
    color:darkgray;
  }
  .table{
    background-color:#F2F6F7;
  }
  .span1{
    font-family: 'Comic Sans MS';
    font-size: 32px;
  }
  .input,.size,.price,.allprice{
    line-height:100px;
  }
  .num{
    margin-top: 40px;
  }
  .button{
    margin-top: 40px;
    margin-right: 55px;
  }
  .span{
    margin: 8px;
    cursor: pointer;
  }
</style>


