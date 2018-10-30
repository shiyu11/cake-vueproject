<template>
  <!--磅数的详细说明-->
  <div class="p-size">


    <div v-if="type==0">
      <span class="p-price"><span>￥</span>{{father.pprice}} <span>/磅</span> </span>
      <ul>
        <li><span class="p-chooseprice">已选1磅</span></li>
        <li><img src="../../assets/home/sweet.png" alt="">适合3-4人分享</li>
        <li><img src="../../assets/home/sweet.png" alt="">含5套餐具</li>
        <li><img src="../../assets/home/sweet.png" alt="">最早明天 09:30配送</li>
      </ul>
    </div>
    <div v-else-if="type==1">
      <span class="p-price"><span>￥</span>{{father.pprice*2}}</span>
      <ul>
        <li><span class="p-chooseprice">已选2磅</span></li>
        <li><img src="../../assets/home/sweet.png" alt="">适合7-8人分享</li>
        <li><img src="../../assets/home/sweet.png" alt="">含10套餐具</li>
        <li><img src="../../assets/home/sweet.png" alt="">最早明天 09:30配送</li>
      </ul>
    </div>
    <div v-else-if="type==2">
      <span class="p-price"><span>￥</span>{{father.pprice*3}}</span>
      <ul>
        <li><span class="p-chooseprice">已选3磅</span></li>
        <li><img src="../../assets/home/sweet.png" alt="">适合11-12人分享</li>
        <li><img src="../../assets/home/sweet.png" alt="">含15套餐具</li>
        <li><img src="../../assets/home/sweet.png" alt="">最早明天 09:30配送</li>
      </ul>
    </div>
    <div v-else>
      <span class="p-price"><span>￥</span>{{father.pprice*4}}</span>
      <ul>
        <li><span class="p-chooseprice">已选4磅</span></li>
        <li><img src="../../assets/home/sweet.png" alt="">适合15-20人分享</li>
        <li><img src="../../assets/home/sweet.png" alt="">含20套餐具</li>
        <li><img src="../../assets/home/sweet.png" alt="">最早明天 09:30配送</li>
      </ul>
    </div>


    <!--数字按钮-->
    <div class="page">
      <section class="demo">
        <nav class="nav">
          <ul>
            <li><a><span @click="changeMoney(-1)" class="span1"></span></a></li>
            <li><a><span v-model="pno">{{pno}}</span></a></li>
            <li><a><span @click="changeMoney(1)" class="span1"></span></a></li>
          </ul>
        </nav>
      </section>
    </div>


    <!--磅数-->
    <el-row :gutter="20" class="el-row-bang">
      <el-col :span="4">
        <el-button type="warning" round plain v-on:click="show(0)">1磅</el-button>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button round type="warning" plain v-on:click="show(1)">2磅</el-button>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button round type="warning" plain v-on:click="show(2)">3磅</el-button>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button round type="warning" plain v-on:click="show(3)">4磅</el-button>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="el-row-cart">
      <el-col :span="6" :offset="2">
        <el-button round type="warning" @click="putCart()">加入购物车</el-button>
      </el-col>
      <el-col :span="6" :offset="2">
        <el-button round type="warning" @click="buy()">立即购买</el-button>
      </el-col>


    </el-row>
  </div>
</template>

<script>

  export default {
    name: "ProductSize",
    data() {
      return {
        message: '内容一',
        type: 0,
        bangshu: '',
        pno: 1,
      }
    },
    mounted() {
    },
    methods: {
      show(index) {
        this.type = index;
        // plain=true
        this.putBang(index)
      },
      putBang(key) {
        this.bangshu = key + 1
        // console.log('返回的数据 '+(key+1))
      },
      putCart() {
        //key+1 是磅数
        // if (this.uname==null) {
        //  alert('请先登录')
        // }else{
        this.$axios.post('addcart', {
          uid: sessionStorage.getItem('uid'),
          size: this.bangshu,
          pid: this.father.pid,
          pno: this.pno
        })
        alert('加入购物车成功')
        // }
      },
      buy() {
        let a = []
        a.push({
          "pid": this.father.pid,
          "pname": this.father.pname,
          "rnum": this.pno,
          "ppic": this.father.ppic,
          "pprice": this.father.pprice,
          "size": this.bangshu
        })
        let totalMoney = (this.pno) * (this.father.pprice)
        let totalNum = this.pno
        sessionStorage.setItem('dingpid', JSON.stringify(a));
        // console.log('价格'+totalMoney)
        sessionStorage.setItem('totalMoney1', totalMoney);
        sessionStorage.setItem('totalNum1', totalNum);
        // console.log('我的eeee' + JSON.stringify(a))

        this.$router.push({path: '/check'})
      },
      changeMoney: function (way) {
        if (way > 0) {
          this.pno++;
        } else {
          this.pno--;
          if (this.pno < 1) {
            this.pno = 1;
          }
        }

      }
    },
    props: ['father'],


  }
</script>
<style>
  @import "../../assets/css/jiajian.css";
  .el-row-cart {
    margin-top: 30px;
  }

  .p-size {
    margin-top: 15px;
  }

  .el-row-bang {
    margin-top: 20px;
  }

  .p-price {
    display: block;
    font-size: 25px;
    color: #B0916A;
    margin-top: 20px
  }

  .p-chooseprice {
    display: block;
    font-size: 20px;
    color: #B0916A;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>

<style scoped>
  ul {
    list-style: none;
    margin-top: 20px;
  }

  li {
    font-size: 20px;
    color: #696969;

  }
.span1{
  cursor: pointer;
}
  .nav li a{
    margin-right: 80px;
  }
  .nav li a span{
   color: black;
  }

</style>
