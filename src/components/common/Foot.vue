<template>
  <div>
    <el-footer style="height: 200px;">
      <div class="bot1">
        <p class="icp" style="color:#b0916a;">客服热线：4006-678-678（8:00 - 22:00）</p>
        <p class="icp">客服邮箱：cs@mcake.com</p>
      </div>
      <div class="chuizhi">
      </div>
      <div class="faxian">
        <ul>
          <li class="a">发现</li>
          <li class="a">关于我们</li>
          <li class="a">帮助中心</li>
          <li class="a">配送服务</li>
        </ul>
        <!--<div class="last">-->
          <!--<ul class="c">-->
            <!--<li>上海卡法电子商务有限公司	</li>-->
            <!--<li>地址：上海市普陀区同普路1130弄3号楼	</li>-->
            <!--<li>电话：021-52691591</li>-->
            <!--<li>社会信用代码：913101070678091460</li>-->
          <!--</ul>-->
        <!--</div>-->
        <!--<div class="last">-->
          <!--<ul class="c">-->
            <!--<li>上海卡法电子商务有限公司杭州分公司</li>-->
            <!--<li>地址：杭州市拱野区中环大厦607室	</li>-->
            <!--<li>电话：0571-27103688</li>>-->
            <!--<li>食品经营许可证：JY13301050141226</li>-->
          <!--</ul>-->
        <!--</div>-->
      </div>
    </el-footer>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>
<style scoped>
  .el-footer{
    background-color:#f2f6f7;
    margin-top: 50px;
  }
  .icp{
    margin-top: 10px;
  }
  .bot1{
    padding-top: 50px;
    width: 300px;
    float: left;
    margin-left: 30px;
  }
  .chuizhi{
    width: 1px;
    height: 115px;
    background-color: gray;
    margin-left: 100px;
    margin-top: 50px;
    float: left;
  }
  .faxian{
    float: left;
    width: 600px;
    height: 150px;
    margin-top: 50px;
    margin-left: 50px;
    text-align: center;
  }
  .a{
    font-size: 14px;
    font-weight: 700;
    color: #767676;
  }
  .c{
    font-size:11px;
    color: #767676;
    margin-left: -50px;
  }
  ul li{
    list-style: none;
    float: left;
    margin-right:80px;
  }
  .last{
    width: 270px;
    height: 120px;
    float: left;
    margin-left:30px;
    margin-top: 30px;
  }
</style>
