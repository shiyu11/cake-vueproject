<template>
  <div  style="background-color:#f2f6f7;">
    <el-row>
      <el-col :span="8" class="mar">
        <p style="color:#b0916a;margin-top: 30px">客服热线：4003-638-638（8:00 - 22:00）</p>
        <p>客服邮箱：cs@tastedreamcake.com</p>
      </el-col>
      <el-col :span="2">
        <div class="chuizhi">
        </div>
      </el-col>
      <el-col :span="3" class="a">
        <router-link to="/about" >发现</router-link>
      </el-col>
      <el-col :span="3" class="a">
        <router-link to="/about" >配送服务</router-link>
      </el-col>
      <el-col :span="3" class="a">
        <router-link to="/about">购物指南</router-link>
      </el-col>
      <el-col :span="3" class="a">
        <router-link to="/about" >投诉与建议</router-link>
      </el-col>
    </el-row>




    <!--<el-footer style="height: 200px;">-->
      <!--<div class="bot1">-->
        <!--<p class="icp" style="color:#b0916a;">客服热线：4003-638-638（8:00 - 22:00）</p>-->
        <!--<p class="icp">客服邮箱：cs@tastedreamcake.com</p>-->
      <!--</div>-->
      <!--<div class="chuizhi">-->
      <!--</div>-->
      <!--<div class="faxian">-->
        <!--<ul>-->
          <!--<li class="a">发现</li>-->
          <!--<li class="a">关于我们</li>-->
          <!--<li class="a">帮助中心</li>-->
          <!--<li class="a">配送服务</li>-->
        <!--</ul>-->
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
      <!--</div>-->
    <!--</el-footer>-->
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>
<style scoped>
  .chuizhi{
    width: 1px;
    height: 115px;
    background-color: gray;
  }

  .a{
    margin-top: 30px;
    font-size: 14px;
    font-weight: 700;
    color: #767676;
  }
  .mar{
    margin-top:10px;
    margin-left: 10px;
  }

</style>
