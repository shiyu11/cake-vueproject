<template>
    <div class="container">
      <div class="row">
        <h2 class="lot"><span>---------更多梦幻选择---------</span></h2>
        <ul class="uls col-xs-12">
          <li class="lis col-xs-3" v-for="(onep,index) in products" v-if="index<4">
            <div class="port-8 effect-2">
              <div class="image-box">
                <img :src="onep.ppic" alt="Image-2" class="myimage">
              </div>
              <div class="text-desc">
                <h3 class="titname">{{onep.pname}}</h3>
                <p><s>原价￥{{onep.pprice*1.5}}</s></p>
                <p>现价￥{{onep.pprice}}</p>
                <router-link :to="`/productDetail/${onep.pid}`" tag="a">查看详情</router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
      name: "EventProduct",
      mounted: function () {
        let _this = this
        axios.get(`http://localhost:3000/product`).then(function (result) {
          _this.products = result.data.data;
          console.log(result.data.data)
        })
      },
      data() {
        return {
          products:[]
        }
      }
    }
</script>

<style>
  .lot{
    color:lightpink;
    font-weight: bold;
    float: left;
    width: 100%;
    font-size: 24px;
    text-align: center;
    padding: 50px 0 80px;
    position: relative;
    z-index: 50;
  }
  .lot span{
    position: relative;
    padding-bottom: 10px;
  }
  .lot span:after{
    content: "";
    width: 50%;
    height: 3px;
    background-color: #fff;
    position: absolute;
    left: 25%;
    bottom: 0;
  }
  .myimage{
    width: 100%;
    display: block;
  }
  .lis{
    float: left;
    /*width: 31.33%;*/
    /*margin: 5px;*/
    list-style: none;
  }
  .titname{
    font-weight: 500;
    font-size: 20px;
    margin:40px 0 10px;
  }
  .text-desc p{
    font-weight: 400;
    font-size: 15px;
    margin-bottom: 15px;
  }
  .text-desc{
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(255,255,255,0.9);
    height: 100%;
    opacity: 0;
    width: 90%;
    padding: 20px;
  }
  .port-8 {
    float: left;
    width: 100%;
    position: relative;
    overflow: hidden;
    text-align: center;
    border: 4px solid transparent;
    overflow: hidden;
  }
  .port-8 .text-desc{
    opacity: 0;
    transition: 0.5s;
    color: #000;
    padding: 45px 20px 20px;
  }
  .port-8.effect-1 img{
    transition: 0.5s;
  }
  .port-8.effect-1:hover img{
    transform: scale(1.1);
  }
  .port-8.effect-1 .text-desc{
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    transform: scale(0);
    backface-visibility: hidden;
  }
  .port-8.effect-1:hover .text-desc{
    opacity: 1;
    transform: scale(1);
    border-radius: 20%;
  }
  .port-8.effect-2 img{
    transition: 0.5s;
  }
  .port-8.effect-2:hover img{
    transform: scale(1.1);
  }
  .port-8.effect-2 .text-desc{
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    transform: scale(0);
    backface-visibility: hidden;
  }
  .port-8.effect-2:hover .text-desc{
    opacity: 1;
    transform: scale(1);
    border-radius: 50% 0 50% 0;
  }
  .port-8.effect-2 img{
    transition: 0.5s;
  }
  .port-8.effect-2:hover img{
    transform: scale(1.1);
  }
  .port-8.effect-2 .text-desc{
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    transform: scale(0);
    backface-visibility: hidden;
  }
  .port-8.effect-2:hover .text-desc{
    opacity: 1;
    transform: scale(1);
    border-radius: 50% 0 50% 0;
  }
  .port-8.effect-3 img{
    transition: 0.5s;
  }
  .port-8.effect-3:hover img{
    transform: scale(1.1);
  }
  .port-8.effect-3 .text-desc{
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    transform: scale(0);
    backface-visibility: hidden;
    background: none;
    padding: 40px 70px 20px;
  }
  .port-8.effect-3 .text-desc:before, .port-8.effect-3 .text-desc:after{
    background-color: rgba(255,255,255,0.9);
    border-radius: 50% 50% 0 0;
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    transform: rotate(-45deg);
    transform-origin: 0 100% 0;
    width: 50%;
    z-index: -1;
  }
  .port-8.effect-3 .text-desc:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100% 0;
  }
  .port-8.effect-3:hover .text-desc{
    opacity: 1;
    transform: scale(1);
  }
  @media only screen and (max-width: 1230px){
    .titname{
      font-size: 15px;
      margin:0 0 10px;
    }
    .text-desc p{
      font-size: 8px;
    }
  }
</style>
