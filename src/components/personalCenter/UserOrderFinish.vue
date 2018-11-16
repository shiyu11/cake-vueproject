<template>
  <div class="container">
      <div class="col-md-10">
        <table class="table">
          <thead>
          <tr>
            <th></th>
            <th style="width: 15%">订单信息</th>
            <!--<th>订单编号</th>-->
            <th style="width: 15%">数量</th>

            <th style="width: 15%">订单状态</th>
            <th>地址详情↓</th>
            <!--<th>评论</th>-->
            <!--<th>操作</th>-->
          </tr>
          </thead>
          <tbody>
          <!--&&order.uid==$store.state.pid-->
          <tr v-for="order in or" v-if="order.state=='已完成'">
            <td><router-link :to="`/productDetail/${order.pid}`">
              <img :src="order.ppic" style="width:120px;height:120px"></router-link></td>
            <td class="info">
              <h4>{{order.pname}}</h4>
            </td>
            <!--<td>{{order.oid}}</td>-->
            <td>{{order.rnum}}</td>
            <!--<td>{{order.pprice}}</td>-->
            <!--<td>{{order.vcontent}}</td>-->
            <td>{{order.state}}</td>
            <td>
              <p>{{order.aname}}</p>
              <p>{{order.phone}}</p>
              <p>{{order.address}}</p>
            </td>
            <!--<td>查看评论<router-link :to="`/productDetail/${order.pid}`"></router-link></td>-->
          </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "UserOrderFinish",
        data() {
        return {
          myoid: this.$route.params.oid,
          myuid:sessionStorage.getItem('uid'),
          or:[]
        }
      },
      mounted(){
        let _this=this
        this.$axios.get(`allorder/${this.myuid}`).then((res)=>{
          //渲染页面
          // console.log(res)
          _this.or = res.data.data;
        }),(err)=>{
          console.log(err)
        }
      },
      methods:{
        // deleteOrder:function(index){
        //   //根据索引删除list的记录
        //   this.products.splice(index,index);
        //   this.order.splice(index, 1);
        //   console.log(this.order);
        // }
      //   review(){
      //     {this.$router.push({path:`/productDetail/${order.pid}`})
      //   }
      // }
      }
    }
</script>

<style scoped>
  .table{
    border:solid 1px transparent;
    margin-top: 10px;
  }
  .table th{
    text-align: center;
    background-color:rgb(176,146,106);
    opacity: 0.8;
    font-size: 14px;
    color: white;
    padding: 1px;
  }
  .table td{
    text-align: center;
    /*width: 210px;*/
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
  .el-container{
    margin-top: 1px;
    margin-left: 2px;
  }

</style>
