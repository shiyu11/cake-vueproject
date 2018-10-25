<template>


    <div class="reviewtext">
      <ul class="con">
        <li v-for="item in articleInfoList" >
          <el-row>
            <el-col :span="10">
              <span class="rcontent">{{item.vcontent}}</span>
            </el-col>
            <el-col :span="8">
           <span class="rname">{{item.uname}}</span><br/>
           <!--<span class="rtime">{{changer(item.vtime)}}</span>-->
           <span class="rtime">{{item.vtime}}</span>
            </el-col>
          </el-row>
        </li>
      </ul>

      <div id="fenye">
        <!--<el-button round type="warning" plain @click="first()" >首页</el-button>-->
        <!--<el-button round type="warning" plain @click="previous()" >上一页</el-button>-->
        <!--<el-button round type="warning" plain @click="next()" >下一页</el-button>-->
        <!--<el-button round type="warning" plain @click="last()" >最后页</el-button>-->
        <el-button round type="warning" plain @click="currentPageNum(1)">首页</el-button>
        <el-button round type="warning" plain @click="currentPageNum(2)">下一页</el-button>
      </div>

    </div>

</template>

<script>
  import axios from 'axios'
    export default {
        name: "Review",
      data(){
          return{
            // reviews:[
            //   // { "vcontent":"好的",uid:1,"vtime":"2018-09-03 11:19:44","pid":1},
            //   // { "vcontent":"好的9",uid:2,"vtime":"2018-09-03 11:19:44","pid":1},
            //   // { "vcontent":"好的2",uid:3,"vtime":"2018-09-03 11:19:44","pid":1},
            //   // { "vcontent":"好的3",uid:3,"vtime":"2018-09-03 11:19:44","pid":1},
            //   // { "vcontent":"好的4",uid:3,"vtime":"2018-09-03 11:19:44","pid":1},
            // ],
            // 分页
            articleInfoList: [],//每页显示的数据
            reviews: [],//所有的数据
            currentPage: 1,//当前页
            len: 0,//默认总的数据长度
            pageSize: 5,//默认每页显示的数量
          }
      },
      mounted: function () {
        let _this = this
        axios.get(`http://localhost:3000/product/reviews/${_this.fpid}`).then(function (result) {
          _this.reviews = result.data.data;
          console.log(result.data.data)
          _this.len = result.data.data.length;
          console.log(result.data.data.length)
          _this.handleInfo();
          _this.init()
        })
      },
      props:["fpid"],
      // methods:{
      //     changer(time){
      //       return time.split(' ')[0];
      //     }
      // }
      methods:{
        handleInfo() {
          // 页数，如果有小数，只取整数部分
          let pageNum = Number(String(this.len / this.pageSize).split(".")[0]);
          // 定义一个空数组
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
        currentPageNum(currentPage) {
          // currentPage为当前的页数
          // 显示当前页数对应的数据
          this.articleInfoList = this.reviews[currentPage - 1];
        },
        // next(){
        //   let i=1
        //   this.currentPageNum(i)
        //   i++;
        //   },
          // $('#fenye')
        // first(){
        //   this.currentPageNum(1)
        // },
        // last(){
        //   let pageNum = Number(String(this.len / this.pageSize).split(".")[0]);
        //   currentPageNum(pageNum+1)
        // },
        init(){

          // let fenye1=this.$refs.myfenye.value
          // let fenye=this.$refs.myfenye.$attrs.value
          // console.log('value是'+fenye)
          // console.log(fenye1)
        }
      }
      }

</script>

<style scoped>
  .reviewtext{
    font-size: 20px;
  }
  ul{list-style: none}
.rtime{
  font-size: 15px;
  color: #B0916A;
}
  li{
    border-bottom: 1px solid #B0916A;
  }
  .rcontent{
    display: block;
    margin-top: 15px;
    font-size: 20px;
  }
  .rname{
    font-size: 15px;
  }
  #fenye{
    float: right;
  }
  .con{
    width: 100%;
    height: 280px;
  }
</style>
