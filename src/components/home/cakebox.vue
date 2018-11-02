<template>
  <div class="container">
    <div class="writing">
      <span>订单满500元提供精美包装礼盒，如需指定礼盒请在下单时留言礼盒编号或名字，否则随机配送</span>
    </div>
    <div id="box">
    <div class="hex " style="background-image:url(../../../static/images/hmhpic/box1.JPG);">
      <h3>①</h3>
      <div class="corner-1"></div>
      <div class="corner-2"></div>
    </div>

    <div class="hex" style="background-image:url(../../../static/images/hmhpic/box9.JPG);">
      <h3>②</h3>
      <div class="corner-1"></div>
      <div class="corner-2"></div>
    </div>

    <div class="hex" style="background-image:url(../../../static/images/hmhpic/box3.JPG);">
      <h3>③</h3>
      <div class="corner-1"></div>
      <div class="corner-2"></div>
    </div>

    <div class="hex" style="background-image:url(../../../static/images/hmhpic/box41.JPG);">
      <h3>④</h3>
      <div class="corner-1"></div>
      <div class="corner-2"></div>
    </div>

    <div class="hex hex-gap" style="background-image:url(../../../static/images/hmhpic/box6.jpg);">
      <h3>⑤</h3>
      <div class="corner-1"></div>
      <div class="corner-2"></div>
    </div>

    <div class="hex" style="background-image:url(../../../static/images/hmhpic/box5.jpg);">
      <h3>⑥</h3>
      <div class="corner-1"></div>
      <div class="corner-2"></div>
    </div>

    <div class="hex" style="background-image:url(../../../static/images/hmhpic/box7.jpg);">
      <h3>⑦</h3>
      <div class="corner-1"></div>
      <div class="corner-2"></div>
    </div>

    <div class="hex" style="background-image:url(../../../static/images/hmhpic/box8.jpg);">
      <h3>⑧</h3>
      <div class="corner-1"></div>
      <div class="corner-2"></div>
    </div>

    <div class="hex" style="background-image:url(../../../static/images/hmhpic/9.png);">
      <h3>⑨</h3>
      <div class="corner-1"></div>
      <div class="corner-2"></div>
    </div>

    <div class="hex" style="background-image:url(../../../static/images/hmhpic/box11.jpg);">
      <h3>⑩</h3>
      <div class="corner-1"></div>
      <div class="corner-2"></div>
    </div>

    <div class="hex" style="background-image:url(../../../static/images/hmhpic/box12.jpg);">
      <h3>⑪</h3>
      <div class="corner-1"></div>
      <div class="corner-2"></div>
    </div>
    </div>

    <div class="row">
      <div class="col-md-6 col-xs-6">
        <div class="bj1-1">
          <img src="../../../static/images/hmhpic/box1.png" class="img-responsive"/>
        </div>
      </div>
      <div class="col-md-6 col-xs-6">
        <div class="bj1-2">
          <p>Golden</p>
          <p>金色 最辉煌的光泽色</p>
          <p>经典的白色丝带配上金边</p>
          <p>干净整洁</p>
          <p>送给最精致的你</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-xs-6">
        <div class="bj1-4">
          <p>Pink</p>
          <p>活力粉色长方盒</p>
          <p>粉色梦幻大蝴蝶结</p>
          <p>带给你美好的回忆</p>
          <p>送给最可爱你</p>
        </div>
      </div>
      <div class="col-md-6 col-xs-6">
          <div class="bj1-3">
            <img src="../../../static/images/hmhpic/box5.png" class="img-responsive"/>
          </div >
      </div>
    </div>
    </div>

</template>

<script>
    export default {
        name: "cakebox"
    }
</script>

<style scoped>
  @media (min-width: 700px)  { .container p{font-size: 30px;line-height: 85px} }
  @media (max-width:699px) {
    .container p{font-size:20px;line-height: 20px}

  }

  body{
    font-family:arial;
    font-size:12px;
    background:#f6f7f0;
    margin:0;
    padding:0;
  }
  .bj1-1{
    max-width: 100%;
    max-height: 100%;
  }
  .bj1-2{
    /*height: 450px;*/
    /*width: 550px;*/
    /*border: 13px solid yellow;*/
    /*background: linear-gradient(to right, #ffe259, #ffa751);*/
    /*color: whitesmoke;*/
    color: brown;
  }
  .bj1-3{
    max-width: 500px;
    max-height: 500px;
  }
  .bj1-4{
    /*height: 450px;*/
    /*width: 550px;*/
    color: #9d9d9d;
    /*background: linear-gradient(to left, #ffafbd, #ffc3a0);*/
  }
  .bj1-4 p{
    text-align: center;
  }
  .bj1-2 p{
    text-align: center;
  }
  .container {
    width:100%;
    height:100%;
    top:100px;
    padding: 25px 0 25px 0;
  }
  #box{
    width:650px;
    height:500px;
    top:130px;
    margin-left:25%;
    /*padding: 25px 0 25px 0;*/
  }
  .writing{
    margin-bottom: 30px;
    color: #B0926A;
  }
  h3{
    color: rgba(248,112,90,0.95);
  }
  /* HEXAGON STARTS HERE */
  .hex {
    width:150px;
    height:86px;
    background-color:palevioletred;
    background-repeat:no-repeat;
    background-position:50% 50%;
    -webkit-background-size:auto 173px;
    -moz-background-size:auto 173px;
    -ms-background-size:auto 173px;
    -o-background-size:auto 173px;
    position:relative;
    float:left;
    margin:25px 5px;
    text-align:center;
    zoom:1;
    transition:all 1s ease-in-out;
    -moz-transition:all 1s ease-in-out;
    -o-transition:all 1s ease-in-out;
    -webkit-transition:all 1s ease-in-out;
  }
  .hex:hover{transform:rotate(360deg);-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);-ms-transform:rotate(360deg);}
  .hex.hex-gap {
    margin-left:86px;
  }
  .hex a {
    display:block;
    width:100%;
    height:100%;
    text-indent:-9999em;
    position:absolute;
    top:0;
    left:0;
  }
  .hex .corner-1,  .hex .corner-2 {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:inherit;
    z-index:-2;
    overflow:hidden;
    -webkit-backface-visibility:hidden;
    -moz-backface-visibility:hidden;
    -ms-backface-visibility:hidden;
    -o-backface-visibility:hidden;
    backface-visibility:hidden;
  }
  .hex .corner-1 {
    z-index:-1;
    -webkit-transform:rotate(60deg);
    -moz-transform:rotate(60deg);
    -ms-transform:rotate(60deg);
    -o-transform:rotate(60deg);
    transform:rotate(60deg);
  }
  .hex .corner-2 {
    -webkit-transform:rotate(-60deg);
    -moz-transform:rotate(-60deg);
    -ms-transform:rotate(-60deg);
    -o-transform:rotate(-60deg);
    transform:rotate(-60deg);
  }
  .hex .corner-1:before,  .hex .corner-2:before {
    width:173px;
    height:173px;
    content:'';
    position:absolute;
    background:inherit;
    top:0;
    left:0;
    z-index:1;
    background:inherit;
    background-repeat:no-repeat;
    -webkit-backface-visibility:hidden;
    -moz-backface-visibility:hidden;
    -ms-backface-visibility:hidden;
    -o-backface-visibility:hidden;
    backface-visibility:hidden;
  }
  .hex .corner-1:before {
    -webkit-transform:rotate(-60deg) translate(-87px, 0px);
    -moz-transform:rotate(-60deg) translate(-87px, 0px);
    -ms-transform:rotate(-60deg) translate(-87px, 0px);
    -o-transform:rotate(-60deg) translate(-87px, 0px);
    transform:rotate(-60deg) translate(-87px, 0px);
    -webkit-transform-origin:0 0;
    -moz-transform-origin:0 0;
    -ms-transform-origin:0 0;
    -o-transform-origin:0 0;
    transform-origin:0 0;
  }
  .hex .corner-2:before {
    -webkit-transform:rotate(60deg) translate(-48px, -11px);
    -moz-transform:rotate(60deg) translate(-48px, -11px);
    -ms-transform:rotate(60deg) translate(-48px, -11px);
    -o-transform:rotate(60deg) translate(-48px, -11px);
    transform:rotate(60deg) translate(-48px, -11px);
    bottom:0;
  }

</style>
