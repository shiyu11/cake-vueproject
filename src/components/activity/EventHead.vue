<template>
   <div>
    <div class="bei"> </div>
      <div class="closed-signboard">
        <div class="sign">WELCOME</div>
        <div class="strings"></div>
        <div class="pin pin1"></div>
        <div class="pin pin2"></div>
        <div class="pin pin3"></div>
      </div>

  </div>
</template>

<script>
    export default {
        name: "EventHead"
    }
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Lato:400,400i,700");
  .closed-signboard {
    width: 425px;
    height: 300px;
    margin: 0px auto;
    position: relative;
    transform: scale(1) rotatez(7deg) translate(-17px, 1px);
    animation: 1s init, 0.7s aa 1s, 3s ab 1.7s infinite;
  }

  @keyframes aa {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1) rotatez(7deg) translate(-17px, 1px);
    }
  }

  @keyframes ab {
    0% {
      transform: rotatez(7deg) translate(-17px, 1px);
    }
    50% {
      transform: rotatez(-7deg) translate(17px, 1px);
    }
    100% {
      transform: rotatez(7deg) translate(-17px, 1px);
    }
  }

  .sign {
    color: white;
    font-family: "Lato", sans-serif;
    font-size: 80px;
    font-weight: bold;
    text-align: center;
    background: #e00909;
    width: 100%;
    height: 200px;
    line-height: 200px;
    position: absolute;
    bottom: 0;
    border-radius: 15px / 20px;
    text-shadow: 0 2px #700a03;
  }

  .strings {
    width: 166px;
    height: 150px;
    border: solid 5px #ad5700;
    border-bottom: none;
    border-right: none;
    position: absolute;
    top: 38px;
    left: 130px;
    transform: rotatez(45deg);
  }

  .pin {
    width: 30px;
    height: 25px;
    position: absolute;
    border-radius: 25px;
  }

  .pin.pin1 {
    background: #9f9f9f;
    top: 0;
    left: 190px;
  }

  .pin.pin2, .pin.pin3 {
    background: #9c0a00;
  }

  .pin.pin2 {
    top: 110px;
    left: 85px;
  }

  .pin.pin3 {
    top: 110px;
    right: 80px;
  }

  @keyframes init {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
  .bei{
    position: absolute;
    top:30px;
    /*left:400px;*/
    width: 80%;
    height: 500px;
    background: url("../../assets/home/pink.jpg");
    background-repeat: no-repeat;
  }

</style>
