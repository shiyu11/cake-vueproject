<template>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h4>收到货请及时确认收货哦</h4>
        </div>
        <div class="col-md-11">
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
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <!--&&order.uid==$store.state.uid-->
            <tr v-for="order in or" v-if="order.state=='待收货'">
              <td><router-link :to="`/productDetail/${order.pid}`"><img :src="order.ppic" style="width:120px;height:120px"></router-link></td>
              <td class="info">
                <h4>{{order.pname}}</h4>
              </td>

              <td>{{order.rnum}}</td>
              <!--<td>{{order.pprice}}</td>-->
              <td>{{order.oid}}</td>
              <td>{{order.state}}</td>
              <td>
                <p>{{order.aname}}</p>
                <p>{{order.phone}}</p>
                <p>{{order.address}}</p>
              </td>
              <td><button v-on:click="affirmOrder(order.oid)">确认收货</button></td>
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
      name: "UserOrderAfter",
      data() {
        return {
          myoid: this.$route.params.oid,
          myuid:sessionStorage.getItem('uid'),
          or:[]
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
      methods:{
        affirmOrder:function (oid) {
          let  _this=this
          // console.log(`http://localhost:3000/updateor1/${oid}`);
          axios.get("http://localhost:3000/updateor1/"+oid).then((res)=>{
            // console.log(res);
            // console.log("执行成功");
            alert('确认收货成功')
            this.$router.push({path:'/usercenter/Myorder/review'})
          })

          }


        }
    }
</script>

<style scoped>
  .table{
    border-bottom:dashed 1px silver;
  }
  .table th{
    text-align: center;
    background-color:#B0926A;
    font-size: 14px;
    color: white;

  }
  .table>thead>tr>th {
    padding: 4px;
    border-bottom:dashed 1px silver;
  }
  table>tbody>tr>td.info{
  background-color:white;

  }
  table>tbody>tr>td{
    text-align: center;
    vertical-align: middle;
    width: 200px;
  }

</style>
