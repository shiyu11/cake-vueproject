<template>
  <div>
    <el-row class="too">
      <el-col :span="2" class="xuan">
        <span>场合:</span>
      </el-col>
      <el-col :span="2">
        <el-select v-model="formData.occasion" placeholder="场合">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="2" class="xuan">
        <span >口味:</span>
      </el-col>
      <el-col :span="2">
        <el-select v-model="formData.taste" placeholder="口味">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="2" class="xuan">
        <span>价格:</span>
      </el-col>
      <el-col :span="3">
        <el-select v-model="formData.pprice" placeholder="价格">
          <el-option
            v-for="item in options3"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>

      <el-col :span="6">
        <div class="main-container page__container">
          <div class="page__section">
            <label class="field field_type1">
              <input class="field__input" type="text" v-model="formData.keyWord" placeholder="心仪的蛋糕名">
              <span class="field__label">心仪的蛋糕名</span>
            </label>
          </div>
        </div>
      </el-col>
      <el-col :span="3" >
        <el-button icon="el-icon-search" circle @click="search(formData)" @keyup.enter.native="search(formData)">搜索</el-button>
      </el-col>
      <el-col :span="2">
        <img src="../../assets/home/sou.gif" alt="" class="img-responsive">
      </el-col>
    </el-row>

    <div class="dwidth">

      <!--无内容显示-->
      <el-row v-if="!showReal.length" class="sorrya">
        <el-col :span="6" :offset="6">
          <img src="../../assets/home/sorry.gif" alt="" class="img-responsive">
        </el-col>
        <el-col :span="10">
           <p class="sorry">Sorry，无符合商品</p>
        </el-col>
      </el-row>

      <el-row class="space" justify="center" :gutter="20" v-else>
        <transition-group enter-active-class="animated tada" leave-active-class="animated tada">
          <el-col :sm="12" :md="6" :lg="6" :xl="6" v-for="(onep,index) in showReal" :key="index" >
            <el-card :body-style="{ padding: '2px' }" class="space">
              <!--<img src="../../assets/p1.jpg" class="image">-->
              <router-link :to="`/productDetail/${onep.pid}`" tag="a" type="text" class="thumbnail">
                <img :src="onep.ppic" class="image">
              </router-link>
              <!--<img  :src="imgSrc(nonep.img)"  class="image">-->
              <div style="padding:14px;">
                <el-row>
                  <el-col :span="24">
                    <span class="pname">{{onep.pname}}</span>
                  </el-col>
                </el-row>

                <el-row>
                  <el-col :span="24">
                    <span class="ptaste">{{onep.taste}}</span>
                  </el-col>
                </el-row>

                <el-row>
                  <div class="bottom clearfix">
                    <el-col :span="12">
                      <span class="pname"><span>￥</span>{{onep.pprice}}</span>
                    </el-col>
                  </div>
                </el-row>
              </div>
            </el-card>
          </el-col>
        </transition-group>
      </el-row>
<!--分页-->
      <el-row>
      <div id="fenye">
        <div class="block">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="8"
            layout="total, prev, pager, next"
            :total="len">
          </el-pagination>
        </div>
      </div>
      </el-row>

    </div>




  </div>
</template>

<script>
  export default {
    name: "allproducts",
    data() {
      return {
        show:false,
        products: [],
        formData: {
          occasion: '',
          taste: '',
          keyWord: '',
          pprice:''
        },
        realChoice: [],
        // 分页
        showReal:[],
        currentPage: 1,//当前页
        len: 0,//默认总的数据长度
        pageSize: 8,//默认每页显示的数量
        // currentPage1: 8
        options1: [
          {
            value: '',
            label: '不限'
          },{
          value: '1',
          label: '新品'
        }, {
          value: '2',
          label: '儿童'
        }, {
          value: '3',
          label: '生日'
        }, {
          value: '4',
          label: '聚会'
        }],
        options2: [{
          value: '',
          label: '不限'
        },{
          value: '慕斯',
          label: '慕斯'
        }, {
          value: '水果',
          label: '水果'
        }, {
          value: '巧克力',
          label: '巧克力'
        }, {
          value: '芝士',
          label: '芝士'
        }],
        options3: [{
          value: 0,
          label: '不限'
        },{
          value: 100,
          label: '100以下'
        },{
          value: 200,
          label: '200以下'
        },{
            value: 300,
            label: '300以下'
          },{
          value: 400,
          label: '400以下'
        }]
        // show:true
      }
    },
    mounted() {
      let _this = this
      this.$axios.get(`product`).then((result) => {
        _this.products = JSON.stringify(result.data.data);
          this.search({})

      })
    },
    methods: {
      search({occasion, taste, keyWord,pprice}) {
        // let _this=this
        this.realChoice = JSON.parse(this.products).filter(item => {
          let matchOccasion = true;
          let matchPprice = true;
          let matchTaste = true;
          let matchWord = true;//模糊关键字筛选
          if (occasion) {
            matchOccasion = item.occasion === occasion;
          }
          if (taste) {
            matchTaste = item.taste === taste
          }
          if (pprice) {
            let price=pprice
            console.log('啦啦啦'+pprice)
            if(price<=item.pprice){
              matchPprice = item.pprice === pprice
            }
          }
          if (keyWord) {
            const keys = keyWord
              .toUpperCase()
              .replace(' ', '')
              .split(''); //切割成单个字
            // return String(product[key]).toLowerCase().indexOf(search) > -1
            matchWord = keys.every(key => item.pname.toUpperCase().includes(key))
          }
          return matchOccasion && matchTaste && matchWord && matchPprice;
        })
        // 分页
        this.len=this.realChoice.length
        // console.log('我的数据长度:'+this.len)
        this.handleInfo();
      },
      handleInfo(){
        let pageNum = Number(String(this.len / this.pageSize).split(".")[0]);
        // 定义一个空数组
        console.log('页数'+(pageNum+1))
        let newArr = [];
        // 遍历获取的数据，每次遍历都从数组的0位置开始截取，截取数量为每页显示的数量
        for (let i = 0; i < pageNum; i++) {
          newArr.push(this.realChoice.splice(0, this.pageSize));
        }
        // 判断剩余的数据有没有小于每一页的数量，如果小于，就把剩余的数据放进newArr数组
        if (this.realChoice.length < this.pageSize) {
          newArr.push(this.realChoice.splice(0, this.realChoice.length));
        }
        // 将新的数组赋给articleList[],用来渲染页面
        this.realChoice = newArr;
        // 第一次进入页面显示this.articleList[]数组的第一个元素
        this.showReal = this.realChoice[0]
      },
      handleCurrentChange(val) {
        this.showReal = this.realChoice[val - 1];
      },
    }
  }
</script>

<style scoped>
  @import "../../assets/css/sousuo.css";
  @import "../../assets/css/animate.css";

  .too {
    margin-top: 20px;
  }
  .sorry{
    font-size: 50px;
    color: #ccc;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    /*font-weight: bold;*/
    margin-top: 50px;
  }
  .sorrya{
    opacity: 0.5;
    margin-bottom:170px;
    margin-top: 100px;
  }
  .space{
    margin-bottom: 20px;
    font-size: 20px;
  }
  .xuan{
    font-size: 20px;
    text-align: center;
    margin: 5px auto;

  }
  #fenye{
    float: right;
  }
  .ptaste{
    color:#B0916A;
    font-size:15px ;
    border: 1px solid #B0916A;
    margin-top: 5px;
  }
</style>
