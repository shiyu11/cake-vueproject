<template>
  <div class="container">
    <div class="row">
      <div id="container1">
        <div class="product-details">
          <h2>活动规则</h2>
          <span class="hint-star star">
			    <i class="fa fa-star" aria-hidden="true"></i>
			    <i class="fa fa-star" aria-hidden="true"></i>
			    <i class="fa fa-star" aria-hidden="true"></i>
			    <i class="fa fa-star-half-o" aria-hidden="true"></i>
			   <i class="fa fa-star-o" aria-hidden="true"></i>
        </span>
          <p class="myp"> 1、本活动仅限上海、苏州地区；（产品请详见各地官网，如当地没有此款产品则不参加特惠活动）;</p>
          <p class="myp"> 2、活动支付方式 : 仅限银行卡在线支付或银联在线支付；</p>
          <p class="myp"> 3、本活动不可使用代金卡，不与其他优惠同享</p>
        </div>
        <div class="product-image">
          <img src="../../../static/images/a18.png" alt="Omar Dsoky" class="img-responsive">
          <div class="info">
            <h2>惊喜好礼随机送</h2>
            <ul>
              <li><strong>one：</strong>缤纷生日趴礼盒</li>
              <li><strong>two：</strong>美式挂耳咖啡</li>
              <li><strong>three：</strong>蜜桃乌龙花果茶</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "EventDetails"
    }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Abel|Aguafina+Script|Artifika|Athiti|Condiment|Dosis|Droid+Serif|Farsan|Gurajada|Josefin+Sans|Lato|Lora|Merriweather|Noto+Serif|Open+Sans+Condensed:300|Playfair+Display|Rasa|Sahitya|Share+Tech|Text+Me+One|Titillium+Web');
  #container1{
    box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
    background: rgba(255, 255, 255, 0.90);
    text-align: center;
    border-radius: 5px;
    overflow: hidden;
    margin: -200px auto 200px;
    height: 350px;
    width: 700px;
  }
  .product-details {
    position: relative;
    text-align: left;
    overflow: hidden;
    padding: 30px;
    height: 100%;
    float: left;
    width: 41%;
  }
  #container .product-details h1{
    font-family: 'Microsoft YaHei','Lantinghei SC','Open Sans',Arial,'Hiragino Sans GB','STHeiti','WenQuanYi Micro Hei','SimSun',sans-serif;
    display: inline-block;
    position: relative;
    font-size: 32px;
    color: #344055;
    margin: 0;
    padding: 0 8px;
  }
  #container .product-details h1:before{
    position: absolute;
    content: '';
    right: 0%;
    top: 18%;
    transform: translate(25px, -15px);
    font-family: 'Microsoft YaHei','Lantinghei SC','Open Sans',Arial,'Hiragino Sans GB','STHeiti','WenQuanYi Micro Hei','SimSun',sans-serif;
    display: inline-block;
    background: #FFA69E;
    border-radius: 5px;
    font-size: 12px;
    padding: 5px;
    color: #FFF;
    margin: 0;
    animation: chan-sh 6s ease infinite;
  }
  .hint-star {
    display: inline-block;
    margin-left: 0.5em;
    color: gold;
    width: 50%;
  }
  #container .product-details > p {
    font-family: 'Microsoft YaHei','Lantinghei SC','Open Sans',Arial,'Hiragino Sans GB','STHeiti','WenQuanYi Micro Hei','SimSun',sans-serif;
    text-align: justify;
    font-size: 15px;
    line-height: 23px;
    color: #7d7d7d;
  }
  .btn span {
    font-family: 'Microsoft YaHei','Lantinghei SC','Open Sans',Arial,'Hiragino Sans GB','STHeiti','WenQuanYi Micro Hei','SimSun',sans-serif;
    transition: transform 0.3s;
    display: inline-block;
    padding: 10px 20px;
    font-size: 1.2em;
    margin:0;
  }
  .product-image {
    transition: all 0.3s ease-out;
    display: inline-block;
    position: relative;
    overflow: hidden;
    height: 100%;
    float: right;
    width: 50%;
    display: inline-block;
    border: 2px solid #ccc;
  }
  #container img {
    width: 100%;
    height: 100%;
  }
  .info {
    background: rgba(27, 26, 26, 0.9);
    font-family: 'Microsoft YaHei','Lantinghei SC','Open Sans',Arial,'Hiragino Sans GB','STHeiti','WenQuanYi Micro Hei','SimSun',sans-serif;
    transition: all 0.3s ease-out;
    transform: translateX(-100%);
    position: absolute;
    line-height: 2.0;
    text-align: left;
    font-size: 100%;
    cursor: no-drop;
    color: #FFF;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }
  .info h2 {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 50px;
  }
  .product-image:hover .info{
    transform: translateX(0);
  }
  .info ul li{
    transition: 0.3s ease;
    font-size: 18px;
  }
  .info ul li:hover{
    transform: translateX(38px) scale(1.2);
  }
  .product-image:hover img {
    transition: all 0.3s ease-out;
  }
  .product-image:hover img {
    transform: scale(1.2, 1.2);
  }
  .myp{
    font-size: 14px;
    font-weight: 500;
  }
</style>
