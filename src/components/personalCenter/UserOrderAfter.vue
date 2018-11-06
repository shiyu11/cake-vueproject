<template>
    <div class="container">
      <div class="row">
        <div class="col-md-10">
          <h4>收到货请及时确认收货哦</h4>
        </div>
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
              <td><button class="button btn_style3"  v-on:click="affirmOrder(order.oid)">确认收货</button></td>
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
        this.$axios.get(`allorder/${this.myuid}`).then((res)=>{
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
          this.$axios.get("updateor1/"+oid).then((res)=>{
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
    background-color: white;

  }
  table>tbody>tr>td{
    text-align: center;
    vertical-align: middle;
    width: 200px;
  }

  .button {
    font-size:14px;
    font-family:Verdana;
    font-weight:normal;
    -moz-border-radius:25px;
    -webkit-border-radius:25px;
    border-radius:25px;
    padding:4px 20px;
    margin: 18px;
    text-decoration:none;
  }
  .btn_style3 {
    border:1px solid white;
    /*background:-moz-linear-gradient( center top, #bddbfa 4%, pink 97% );*/
    background:-ms-linear-gradient( top, white 8%, #B0926A 97% );
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#bddbfa', endColorstr='#80b5ea');
    background:-webkit-gradient( linear, left top, left bottom, color-stop(8%, white), color-stop(97%, #B0926A) );
    background-color:white;
    color: rgba(99,32,29,0.95);
    display:inline-block;
    text-shadow:0px 0px 0px #B0926A;
    -webkit-box-shadow:inset 0px 0px 0px -50px white;
    -moz-box-shadow:inset 0px 0px 0px -50px white;
    box-shadow:inset 0px 0px 0px -50px white;
  }.btn_style3:hover {
     /*background:-moz-linear-gradient( center top, pink 8%, #bddbfa 97% );*/
     background:-ms-linear-gradient( top, #B0926A 8%, white 97% );
     filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80b5ea', endColorstr='#bddbfa');
     background:-webkit-gradient( linear, left top, left bottom, color-stop(8%, #B0926A), color-stop(97%, white) );
     background-color:#B0926A;
   }.btn_style3:active {
      position:relative;
      top:1px;
    }

</style>
