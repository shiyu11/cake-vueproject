<template>
  <div class="reviewtext">
    <ul class="con">
      <li v-for="(item,index) in articleInfoList">
        <el-row>
          <el-col :span="2">
            <img src="../../assets/home/avatar.png" alt="" class="img-responsive">
          </el-col> <el-col :span="16">
            <span class="rcontent">{{item.vcontent}}</span>
          </el-col>
          <el-col :span="4" :offset="2">
            <span class="rname">{{item.uname}}</span><br/>
            <span class="rtime">{{changer(item.vtime)}}</span>
          </el-col>
        </el-row>
      </li>
    </ul>
    <!--分页-->
    <div id="fenye">
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="5"
          layout="total, prev, pager, next"
          :total="len">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Review",
    props: ["fpid"],
    data() {
      return {
        // 分页
        articleInfoList: [],//每页显示的数据
        reviews: [],//所有的数据
        currentPage: 1,//当前页
        len: 0,//默认总的数据长度
        pageSize: 5,//默认每页显示的数量
        currentPage1: 5,
      }
    },
    mounted: function () {
      let _this = this
      this.$axios.get(`product/reviews/${_this.fpid}`).then(function (result) {
        _this.reviews = result.data.data;
        // console.log(result.data.data)
        _this.len = result.data.data.length;
        // console.log(result.data.data.length)
        _this.handleInfo();

      })
    },

    // methods:{
    //     changer(time){
    //       return time.split(' ')[0];
    //     }
    // }
    methods: {
      handleInfo() {
        // 页数，如果有小数，只取整数部分
        let pageNum = Number(String(this.len / this.pageSize).split(".")[0]);
        // 定义一个空数组
        console.log('页数' + (pageNum + 1))
        let newArr = [];
        // 遍历获取的数据，每次遍历都从数组的0位置开始截取，截取数量为每页显示的数量
        for (let i = 0; i < pageNum; i++) {
          newArr.push(this.reviews.splice(0, this.pageSize));
        }
        // 判断剩余的数据有没有小于每一页的数量，如果小于，就把剩余的数据放进newArr数组
        if (this.reviews.length < this.pageSize) {
          newArr.push(this.reviews.splice(0, this.reviews.length));
        }
        // 将新的数组赋给articleList[],用来渲染页面
        this.reviews = newArr;
        // 第一次进入页面显示this.articleList[]数组的第一个元素
        this.articleInfoList = this.reviews[0]
        // console.log(this.articleList[0])
      },
      // currentPageNum(currentPage) {
      //   // currentPage为当前的页数
      //   // 显示当前页数对应的数据
      //   this.articleInfoList = this.reviews[currentPage - 1];
      // }
      handleCurrentChange(val) {
        this.articleInfoList = this.reviews[val - 1];
      },
      changer(time) {
        return time.split('T')[0];
      }
    }
  }

</script>

<style scoped>
  .reviewtext {
    font-size: 20px;
  }
  ul {
    list-style: none
  }
  .rtime {
    font-size: 15px;
    color: #B0916A;
  }
  li {
    border-bottom: 1px solid #B0916A;
  }
  .rcontent {
    display: block;
    margin-top: 15px;
    font-size: 18px;
    font-family: YouYuan;
  }
  .rname {
    font-size: 18px;
    font-family: "STXingkai";
    color:#cd8d11;
  }
  #fenye {
    float: right;
    margin-top:25px
  }
  .con {
    width: 100%;
    height: 280px;
  }
</style>
