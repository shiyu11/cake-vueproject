<template>
  <!--<div  style="background-color:#f2f6f7;margin-top:20px">-->
    <!--<el-row>-->
      <!--<el-col :span="8" class="mar">-->
        <!--<p style="color:#b0916a;margin-top: 30px">客服热线：4003-638-638（8:00 - 22:00）</p>-->
        <!--<p>客服邮箱：cs@tastedreamcake.com</p>-->
      <!--</el-col>-->
      <!--<el-col :span="2">-->
        <!--<div class="chuizhi">-->
        <!--</div>-->
      <!--</el-col>-->
      <!--<el-col :span="3" class="a">-->
        <!--<router-link to="/about" >发现</router-link>-->
      <!--</el-col>-->
      <!--<el-col :span="3" class="a">-->
        <!--<router-link to="/about" >配送服务</router-link>-->
      <!--</el-col>-->
      <!--<el-col :span="3" class="a">-->
        <!--<router-link to="/about">购物指南</router-link>-->
      <!--</el-col>-->
      <!--<el-col :span="3" class="a">-->
        <!--<router-link to="/about" >投诉与建议</router-link>-->
      <!--</el-col>-->
    <!--</el-row>-->
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
  <!--</div>-->

  <div class="container">
    <div class="row">
      <div class="col-xs-3 col-xs-push-1 row_phone">
        <p>客服热线:4006-678-678(8:00-22:00)</p>
        <p>客服邮箱:cs@mcake.com</p>
        <p class="help">帮助中心</p>
        <router-link to="/about" tag="a"><p style="color: black">配送说明</p></router-link>
        <router-link to="/about" tag="a"><p style="color: black">购物指南</p></router-link>
        <router-link to="/about" tag="a"><p style="color: black">投诉与建议</p></router-link>
      </div>

      <div class="col-xs-5 col-xs-push-3 row_sao">
        <p>嗨！~你好，听说你喜欢我们好久了，来交个朋友吧~<br/>
           扫描下方二维码<br/>
           关注我们的微信公众号<br/>
           微信下单有新人专享优惠券哦！</p>
        <img src="../../../static/images/gong.png" style="width: 25%" class="row_myimage">
        <div class="dtime">订购热线：400-606-7757（周一至周日 08:00-20:00）</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>
<style scoped>
  /*.chuizhi{*/
    /*width: 1px;*/
    /*height: 115px;*/
    /*background-color: gray;*/
  /*}*/
  /*.a{*/
    /*margin-top: 30px;*/
    /*font-size: 14px;*/
    /*font-weight: 700;*/
    /*color: #767676;*/
  /*}*/
  /*.mar{*/
    /*margin-top:10px;*/
    /*margin-left: 10px;*/
  /*}*/
  .container{
    background-color:#f2f6f7;
    margin-top: 100px;
  }
  .help{
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .row_phone{
    margin-top: 40px;
  }
  .row_sao{
    padding-bottom: 50px;
  }
  .row_sao p{
    margin-top: 40px;
    font-size: 12px;
  }
  .row_myimage{
    border: 5px solid white;
  }
  .dtime{
    margin-top: 25px;
    margin-bottom:20px;
    font-size: 16px;
  }
</style>
