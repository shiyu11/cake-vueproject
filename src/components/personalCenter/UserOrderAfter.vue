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
              <td><button v-on:click="affirmOrder(index)">确认收货</button></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "UserOrderAfter",
      data() {
        return {
          order: [
            {
              "oid": 1,
              "method": "0",
              "state": "待收货",
              "note": "得到的",
              "uid": 1,
              "pprice": "100",
              "rid": 1,
              "rnum": 10,
              "pid": 1,
              "aid": 1,
              "aname": "1",
              "phone": 555,
              "address": "sssw",
              "defaultaddress": "1"
            }

          ],
          products: [
            {
              "pid": 1,
              "pname": "尼诺熊",
              "ppic": "http://static.mcake.com/goods/ninuo/T0502/list/1.jpg",
              "pprice": "298",
              "pnum": 100,
              "occasion": "1",
              "taste": "芝士",
              "theme": "0",
              "dpic": "http://static.mcake.com/desc/Nino/pc.jpg",
              "xpic": "http://static.mcake.com/goods/ninuo/T0502/middle/1.jpg",
              "text": "A ce moment,laissez votre langue dominent votre joie.un parfum délicat de la crème .这一刻，让舌尖主宰你的私享。蓬松夹着鲜香淡雅，只融在口的浓浓芝香，填满心的另一半。",
              "intr": "Quelle est l'expression du visage de votre humeur? Doux Nino vous accompagner, une innocence enfantine. \r\n什么表情对你此刻心情？爱笑爱闹，暖心尼诺陪伴你，童心依旧。",
              "xxpic": "http://static.mcake.com/goods/ninuo/T0502/big/1.jpg"
            },
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
      }
    }
</script>

<style scoped>
  .table{
    border:solid 1px transparent;
  }
  .table th{
    text-align: center;
    background-color:#B0926A;
    font-size: 14px;
    color: white;
  }
  .table>thead>tr>th {
    padding: 4px;

  }
  table>tbody>tr>td.info{
    background-color: white;

  }
  table>tbody>tr>td{
    text-align: center;
  }

</style>
