<template>
    <div class="container">
        <div class="row">
          <!--<div class="col-md-12">-->
            <!--<el-input  placeholder="请输入商品名" style="width: 240px;"></el-input>-->
            <!--<el-button type="warning" plain icon="el-icon-search" circle>搜索</el-button>-->
          <!--</div>-->
      <div class="col-md-10">
        <table class="table">
          <thead>
          <tr>
            <th></th>
            <th>订单信息</th>
            <!--<th>收货人</th>-->
            <th>数量</th>
            <!--<th>金额</th>-->
            <th>订单编号</th>
            <th>订单状态</th>
            <th>地址详情↓</th>
            <!--<th>操作</th>-->
          </tr>
          </thead>
        <tbody>
        <!--v-if="order.uid==$store.state.pid"-->
        <tr v-for="order in or">
          <td><router-link :to="`/productDetail/${order.pid}`"><img :src="order.ppic" style="width:120px;height:120px"></router-link></td>
          <!--<td><img :src="order.ppic" style="width:120px;height:120px"></td>-->
             <td class="info">
               <h4>{{order.pname}}</h4>
             </td>

             <td>{{order.rnum}}</td>
             <!--<td>{{order.pprice }}</td>-->
             <td>{{order.oid}}</td>
             <td>{{order.state}}</td>
             <td>
               <p>{{order.aname}}</p>
               <p>{{order.phone}}</p>
               <p>{{order.address}}</p>
             </td>
             <!--<td><button v-on:click="deleteOrder(index)">删除</button></td>-->
        </tr>
        </tbody>
        </table>
      </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "UserOrderAll",
      data(){
          return {
            myoid: this.$route.params.oid,
            myuid:sessionStorage.getItem('uid'),
            or:[]
          }
      },

      methods:{
        deleteOrder:function(index){
          //根据索引删除list的记录
          this.products.splice(index,index);
          this.order.splice(index, 1);
          // console.log(this.order);
        }
      },
      mounted(){
        let _this=this
        axios.get(`http://localhost:3000/allorder/${this.myuid}`).then((res)=>{
          //渲染页面
          // console.log(res)
          _this.or = res.data.data;
        }),(err)=>{
          console.log(err)
        }
      },
    }
</script>

<style scoped>
  .table{
    margin-top: 20px;
    border-bottom:dashed 1px silver;
  }
  .table th{
    text-align: center;
    background-color:#B0926A;
    font-size: 14px;
    color: white;
    padding: 4px;
  }
  .table td{
    text-align: center;
    width: 200px;
    border-bottom:dashed 1px silver;
  }
  img{
    float: left;
    margin-left: 53px;
  }
  table>tbody>tr>td{
    vertical-align: middle
  }
  table>tbody>tr>td.info{
    background-color: white;
  }
</style>
