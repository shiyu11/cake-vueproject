<template>
  <div>
    <div><h2>{{$store.state.username}}</h2></div>
    <div class="about">
      <div class="container">
        <div class="row">
          <el-col :span="12">
            <a name="4">
            <img src="../../assets/home/abouttitle.jpg" alt="" class="img-responsive imageqq" alt="Responsive image">
            </a>
          </el-col>
          <el-col :span="12">
            <img src="../../assets/home/abouttitle1.jpg" alt="" class="img-responsive imageqq" alt="Responsive image">
          </el-col>
        </div>
        <div class="row">
          <div class="col-md-12 context">
            <a name="1"></a>
            <h3>配送服务</h3>
            <ul>
              <li><p class="titi">上 海</p></li>
              <li><p>1. 免费配送区域：
                北以宝钱公路；西以绕城高速、沪蓉高速、嘉松中路、嘉松南路、辰塔路、玉树路；南以申嘉湖高速、黄浦江、大治河。
            </p></li>
              <li><p> 2. 配送时间：10:00-22:00</p></li>
              <li><p> 3. 电话咨询时间：8:00-22:00（请至少提前5小时预订）
                当天21:30之后订单及次日9:00前订单，最早配送时间为次日14:0</p></li>
            </ul>

            <ul>
              <li><p class="titi">苏州</p></li>
              <li><p> 1.截单时间：14:00，14:00后的订单次日送达，配送时间：10:00-22:00</p></li>
              <li><p> 2.400电话咨询时间：8:00-22:00（请至少提前8小时预订）

                当天21:30之后订单及次日9:00前订单，最早配送时间为次日17:30</p></li>
            </ul>
            <a name="2"></a>
            <h3>购物指南</h3>
            <ul>
              <li><p>1、注册/登录
                如果您未在网站注册过，点击官网首页右上角【注册】按钮，根据提示进行账号注册；如果您已注册过，只需点击首页右上角【登录】按钮，输入帐号密码即可登录。（本网站也为用户提供了快速购买通道，无需注册会员即可直接下单订购商品）。
              </p></li>
              <li><p> 2、选购商品放入购物车
                浏览/筛选您需要的商品，点击"立即购买"或放入"我的购物车"；进入购物车后，如果您还想购买其他感兴趣的商品，点击商品列表下方【继续购物】按钮即可；如果您不需要其他商品，即可点击商品列表下方的【结算】即进入结算页面。
              </p></li>
              <li><p>
                3、填写收货信息
                在收货信息页面填写订货人的详细信息。为了保证您的商品顺利配送，请准确填写收货人的姓名、地址、电话、配送时间等收货信息。注：官网蛋糕需至少提前5小时订购。
              </p></li>
              <li><p>
                4、选择配送方式
                填写收货人信息后，您可以根据您所在地区和时间要求选择您想要的送货方式。
              </p></li>
              <li><p>
                5、选择付款方式
                完成收货人信息填写后，即可选择该订单付款方式，有货到付款和网上支付供您选择，如果账户内有优惠券/积分/红包/现金卡等，可进行相应勾选。具体付款细节，见"帮助中心"→"支付类"菜单。
              </p></li>
              <li><p>
                6、订单提交完成
                填写并确认完以上信息，您就可以放心提交此订单，等待收货了。在提交订单后，您也可以通过会员中心"我的订单"查询您的订单状态。

              </p></li>
            </ul>
            <a name="3"></a>
            <h3>投诉与建议</h3>
            <ul>
              <li><p>尊敬的贵宾，如果您在购物过程中，对我们的网站、服务、物流等环节存在任何意见或建议，请与我们的客服取得联系。客服人员将会及时为您处理。
              </p></li>
              <li><p>客服热线：4006-638-638 (8:00-22:00)</p></li>
              <li><p> 客服邮箱：cs@tastedreamcake.com</p></li>
              <li><p> 您也可以通过在线反馈提交您的订单投诉或意见与建议。感谢您的关注和一如既往的支持！</p></li>
            </ul>
            <a href="#4" class="rt">返回顶部</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "about"
  }
</script>

<style>

  .imageqq {
    dispaly: block;
    height: 400px;
  }

  h3 {
    font-size: 25px;
    color: #B0916A;
  }

  ul {
    list-style: none
  }

  p {
    font-size: 15px;
  }

  .myti {
    font-size: 25px;

  }

  .re {
    margin-left: 80px;
  }

  .titi {
    font-size: 20px;
    font-weight: bold;
  }

  .rt {
    float: right;
    font-size: 25px;
    color: #B0916A;
  }
</style>
