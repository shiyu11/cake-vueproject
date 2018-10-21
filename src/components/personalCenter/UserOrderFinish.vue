<template>
  <div class="el-container">
      <div class="col-md-12">
        <table class="table">
          <thead>
          <tr>
            <th></th>
            <th>订单信息</th>
            <th>订单编号</th>
            <!--<th>收货人</th>-->
            <th>数量</th>
            <th>金额</th>
            <th>订单状态</th>
            <th>地址详情↓</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,index) in order">
            <td><img :src="products[index].ppic" style="width:120px;height:120px" v-if="item.pid==products[index].pid"></td>
            <td class="info">
              <h4>{{products[index].pname}}</h4>
              <p>{{item.content}}</p>
            </td>
            <td>{{item.oid}}</td>
            <!--<td>{{item.shopname}}</td>-->
            <td>{{item.rnum}}</td>
            <td>{{ item.pprice }}</td>
            <td>{{item.state}}</td>
            <td>
              <!--<button v-on:click="Address">点我哦</button>-->
              <p>{{item.aname}}</p>
              <p>{{item.phone}}</p>
              <p>{{item.address}}</p>
            </td>
            <td><button v-on:click="deleteOrder(index)">删除</button></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
    export default {
        name: "UserOrderFinish",
      data(){
        return {
          order: [
            {
              "oid": 2,
              "method": "0",
              "state": "已完成",
              "note": "得到的",
              "uid": 1,
              "pprice": "101",
              "rid": 2,
              "rnum": 1,
              "pid": 2,
              "aid": 1,
              "aname": "1",
              "phone": 555,
              "address": "sssw",
              "defaultaddress": "1"
            }
          ],
          products: [
            {
              "pid": 2,
              "pname": "君度可可",
              "ppic": "http://static.mcake.com/goods/jundukeke/M0601/list/1.jpg",
              "pprice": "198",
              "pnum": 100,
              "occasion": "2",
              "taste": "巧克力",
              "theme": "0",
              "dpic": "https://static.mcake.com/desc/jundukeke/pc.jpg",
              "xpic": "http://static.mcake.com/goods/jundukeke/M0601/middle/1.jpg",
              "text": "Une mousse au chocolat noir, un goût sucré et amer du 100% chocolat, avec un parfum de Cointreau.\r\n\r\n甜与苦从来不是永恒的对立，因为巧克力，更因为君度力娇 浓烈而温和，清凉却温暖",
              "intr": "avons ajusté pour qu’il adapte au goût des asiatiques moins sucré.\r\n这是一款专为喜爱白巧克力人群创作，我们重新调配了白巧克力偏甜口感，使之更适合亚洲人口味的产品。",
              "xxpic": "http://static.mcake.com/goods/jundukeke/M0601/big/1.jpg"
            }

          ]
        }
      },
      methods:{
        deleteOrder:function(index){
          //根据索引删除list的记录
          this.products.splice(index,index);
          this.order.splice(index, 1);
          console.log(this.order);
        }
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
    background-color:#B0926A;
    font-size: 14px;
    color: white;
    padding: 1px;
  }
  .table td{
    text-align: center;
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
