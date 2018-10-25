<template>
  <div class="p-size">
    <div v-if="type==0">
      <span class="p-price"><span>￥</span>{{father.pprice}} <span>/磅</span> </span>
      <ul>
        <li><span class="p-chooseprice">已选1磅</span></li>
      </ul>
    </div>
    <div v-else-if="type==1">
      <ul>
        <li><span class="p-chooseprice">已选2磅</span></li>
      </ul>
    </div>
    <div v-else-if="type==2">
      <ul>
        <li><span class="p-chooseprice">已选3磅</span></li>
      </ul>
    </div>
    <div v-else>
      <ul>
        <li><span class="p-chooseprice">已选4磅</span></li>
      </ul>
    </div>
    <el-row :gutter="20" class="el-row-bang">
      <el-col :span="4" >
        <el-button type="warning" round plain v-on:click="show(0)">1磅</el-button>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button  round type="warning" plain v-on:click="show(1)">2磅</el-button>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button  round type="warning" plain v-on:click="show(2)">3磅</el-button>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button round type="warning" plain v-on:click="show(3)">4磅</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="el-row-cart">
      <el-col :span="6" :offset="2">
        <div>
        <el-button  round type="warning" @click="putCart()">&nbsp;&nbsp;确认&nbsp;&nbsp;</el-button>
        <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>-->
        </div>
      </el-col>
      <el-col :span="6" :offset="2">
        <el-button round type="warning" >立即购买</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "ProductSize",
    data() {
      return {
        type: 0,
      }
    },
    methods: {
      show(index) {
        this.type = index;
        this.putBang(index)
      },
      putBang(key){
        this.bangshu= key+1
        // console.log('返回的数据 '+(key+1))
      },
      putCart(){
        //key+1 是磅数
        axios.post('http://localhost:3000/addcart',{
          uid:3,
          size:this.bangshu,
          pid:this.father.pid,
        })
      }
      // putCart: function (type) {
      //   alert('添加成功')
      //   var bangshu = type + 1;
      //   // var productpid = this.father.pname
      //   // var shuju = '{' + productpid + ',' + bangshu + '}'
      //   var shuju = '{'+ bangshu + '}'
      //   console.log(shuju)
      //   // console.log(bangshu,productpid)
      //   if (sessionStorage.getItem('product2')) {
      //     var products = sessionStorage.getItem('product2');
      //     products += (',' + shuju);
      //     sessionStorage.setItem('product2', products);
      //     alert('已经放入购物车中！')
      //   } else {
      //     //var products = [];
      //     //products.push(product); JSON.stringify(products)
      //     sessionStorage.setItem('products', shuju);
      //   }
      //
      // }
    },

  }
</script>
<style>
  .el-row-cart{
    margin-top:50px;
    margin-left: 20px
  }
  .p-size{
    margin-top: 15px;
  }
  .el-row-bang{
    margin-top: 20px;
  }

  .p-chooseprice{
    display: block;
    font-size: 20px;
    color: #B0916A;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  ul {
     list-style: none;
     margin-top: 20px;
   }

  li {
    font-size: 20px;
    color:#696969;

  }
</style>


<style scoped>


</style>
