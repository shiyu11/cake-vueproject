<template>
    <div class="container">
      <el-row :gutter="20">
        <el-col :span="12" :offset="1">
          <img :src="product[3].theme" alt="" class="image">
        </el-col>
        <el-col :span="10" :offset="1">
          <div class="right-price">
            <h3>{{product[3].pname}}</h3>
            <div v-if="type==0" class="price">
              <h4><i>￥</i><span>{{product[3].pprice}}</span></h4>
              <s>原价￥<span>{{product[3].pprice*1.5}}</span></s>
            </div>
            <div v-else-if="type==1" class="price">
              <h4><i>￥</i><span>{{product[3].pprice*2}}</span></h4>
              <s>原价￥<span>{{product[3].pprice*3}}</span></s>
            </div>
            <div v-else class="price">
              <h4><i>￥</i><span>{{product[3].pprice*3}}</span></h4>
              <s>原价￥<span>{{product[3].pprice*4.5}}</span></s>
            </div>
            <el-row  :gutter="20" class="el-row-bang">
              <el-col :span="4" >
                <el-button type="warning" round plain v-on:click="show(0)">1磅</el-button>
              </el-col>
              <el-col :span="4" :offset="1">
                <el-button  round type="warning" plain v-on:click="show(1)">2磅</el-button>
              </el-col>
              <el-col :span="4" :offset="1">
                <el-button  round type="warning" plain v-on:click="show(2)">3磅</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="20" class="el-row-cart">
              <el-col :span="6" :offset="1">
                <el-button  round type="warning" @click="putCart()">加入购物车</el-button>
              </el-col>
              <el-col :span="6" :offset="2">
                <el-button round type="warning" >立即购买</el-button>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>


</template>

<script>
  import axios from 'axios'
    export default {
        name: "EventProducts",
      mounted: function () {
        let _this = this
        axios.get(`http://localhost:3000/product`).then(function (result) {
          _this.product = result.data.data;
          console.log(result.data.data)
        })
      },
      data() {
        return {
          message: '内容一',
          type: 0,
          product:[],
          bangshu:''
        }
      },
      methods: {
        show(index) {
          this.type = index;
          this.putBang(index)
        },
        putBang(key){
          this.bangshu= key+1
        },
        putCart(){
          //key+1 是磅数
          if (this.$store.state.type == 0) {
            alert('请先登录')
          }else{
            axios.post('http://localhost:3000/addcart',{
              uid:sessionStorage.getItem('uid'),
              size:this.bangshu,
              pid:this.product[3].pid,
            })
            alert('加入购物车成功')
          }
        }
      },
    }
</script>

<style scoped>
  .image{
    margin-top: 120px;
    width: 100%;
  }
  .el-row-cart{
    margin-top:50px;
  }

  h3{
    margin-left: 58px;
    margin-top: 60px;
  }
  .el-row-bang{
    margin-top: 20px;
  }
  .right-price{
    margin-top: 150px;
  }
  .price{
    margin-left: 100px;
  }
</style>
