<template>
  <div>
    <h2>蛋糕{{mypid}}详情</h2>
    <el-row :gutter="20">
      <el-col :span="12">
        <img :src="product[mypid-1].xpic" alt="" class="p-img">
      </el-col>
      <el-col :span="10" :offset="1">
        <div>
          <span class="p-title">{{product[mypid-1].pname}}</span><br>
          <my-productsize :father="product[mypid-1]"></my-productsize>
          <div class="describe">
            <p>Framboise aigre, Lychee sucrée,s’éclatait étincelles de l’amour sur la langue, Comme l’humeur de la
              jeune
              fille qui se détours innombrable.</p>
            <p>
              树莓的酸，荔枝的甜，在舌尖上碰撞出恋爱的火花，犹如少女心境的千回百转，沁人心脾。</p>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="moredes">
      <el-col :span="5">
        <hr/>
      </el-col>
      <el-col :span="2">
        <img src="../../assets/middleicon.png" alt="" class="image">
      </el-col>
        <el-col :span="12" class="moretext hidden-sm-and-down">
        <p>J’aimerais t’offrir un rêve d’amour, une jeune fille marche dans un cheminée , traverse un village
          fleurissant,
          tu me regardes avec tes yeux souriants, s’ennuie jamais .
          我想送给你们一个关于爱情的梦境，梦境里是少女行走在小镇花径的身影，回眸笑眼弯弯，一生不厌。</p>
      </el-col>
      <el-col :span="5">
        <hr/>
      </el-col>
    </el-row>
    <el-row class="moredes">
    <img :src="product[mypid-1].dpic" alt="" class="p-img">
    </el-row>
  </div>
</template>

<script>
  import ProductSize from './ProductSize'

  export default {
    name: "ProductSize",
    data() {
      return {
        mypid: this.$route.params.pid,
        product: [
          {
            "pname": "1黛西的旅行",
            "ppic": require("../../assets/p1.jpg"),
            "pprice": "255",
            "pid": 1,
            "occasion": 1,
            "taste": "慕斯",
            "dpic": require("../../assets/d1.jpg"),
            "xpic": require("../../assets/x1.jpg")
          },
          {
            "pname": "2蔓越莓红丝绒",
            "ppic": require("../../assets/p2.jpg"),
            "pprice": "285",
            "pid": 2,
            "occasion": 2,
            "taste":"慕斯",
            "dpic": require("../../assets/d2.jpg"),
            "xpic": require("../../assets/x2.jpg")
          },
          {
            "pname": "3蓝莓轻乳拿破仑",
            "ppic": require("../../assets/p3.jpg"),
            "pprice": "555",
            "pid": 3,
            "occasion": 3,
            "taste":"慕斯",
            "dpic": require("../../assets/d3.jpg"),
            "xpic": require("../../assets/x3.jpg")
          },
          {
            "pname": "4蓝莓轻乳拿破仑2",
            "ppic": require("../../assets/p4.jpg"),
            "pprice": "555",
            "pid": 4,
            "occasion": 4,
            "taste":"慕斯",
            "dpic": require("../../assets/d4.jpg"),
            "xpic": require("../../assets/x4.jpg")
          },
          {
            "pname": "5蓝莓轻乳拿破仑3",
            "ppic": require("../../assets/p5.jpg"),
            "pprice": "555",
            "pid": 5,
            "occasion": 2,
            "taste":"鲜奶",
            "dpic": require("../../assets/d5.jpg"),
            "xpic": require("../../assets/x5.jpg")
          },
          {
            "pname": "6黛西的旅行",
            "ppic": require("../../assets/p1.jpg"),
            "pprice": "255",
            "pid": 6,
            "occasion": 1,
            "taste": "鲜奶",
            "dpic": require("../../assets/d1.jpg"),
            "xpic": require("../../assets/x1.jpg")
          },
          {
            "pname": "7蔓越莓红丝绒",
            "ppic": require("../../assets/p5.jpg"),
            "pprice": "285",
            "pid": 7,
            "occasion": 1,
            "taste": "鲜奶",
            "dpic": require("../../assets/d5.jpg"),
            "xpic": require("../../assets/x5.jpg")
          },
          {
            "pname": "8蓝莓轻乳拿破仑",
            "ppic": require("../../assets/p3.jpg"),
            "pprice": "555",
            "pid": 8,
            "occasion": 3,
            "taste": "鲜奶",
            "dpic": require("../../assets/d3.jpg"),
            "xpic": require("../../assets/x3.jpg")
          },
          {
            "pname": "9蓝莓轻乳拿破仑2",
            "ppic": require("../../assets/p3.jpg"),
            "pprice": "555",
            "pid": 9,
            "occasion": 4,
            "taste": "鲜奶",
            "dpic": require("../../assets/d3.jpg"),
            "xpic": require("../../assets/x3.jpg")
          },
          {
            "pname": "10蓝莓轻乳拿破仑3",
            "ppic": require("../../assets/p5.jpg"),
            "pprice": "555",
            "pid": 10,
            "occasion": 4,
            "taste": "鲜奶",
            "dpic": require("../../assets/d5.jpg"),
            "xpic": require("../../assets/x5.jpg")
          },
          {
            "pname": "11黛西的旅行",
            "ppic": require("../../assets/p1.jpg"),
            "pprice": "255",
            "pid": 11,
            "occasion": 3,
            "taste": "鲜奶",
            "dpic": require("../../assets/d1.jpg"),
            "xpic": require("../../assets/x1.jpg")
          },
          {
            "pname": "12蔓越莓红丝绒",
            "ppic": require("../../assets/p2.jpg"),
            "pprice": "285",
            "pid": 12,
            "occasion": 1,
            "taste": "鲜奶",
            "dpic": require("../../assets/d2.jpg"),
            "xpic": require("../../assets/x2.jpg")
          },
          {
            "pname": "13蓝莓轻乳拿破仑",
            "ppic": require("../../assets/p3.jpg"),
            "pprice": "555",
            "pid": 13,
            "occasion": 2,
            "taste": "鲜奶",
            "dpic": require("../../assets/d3.jpg"),
            "xpic": require("../../assets/x3.jpg")
          },
          {
            "pname": "14蓝莓轻乳拿破仑2",
            "ppic": require("../../assets/p4.jpg"),
            "pprice": "555",
            "pid": 14,
            "occasion": 4,
            "taste": "巧克力",
            "dpic": require("../../assets/d4.jpg"),
            "xpic": require("../../assets/x4.jpg")
          },
          {
            "pname": "15蓝莓轻乳拿破仑3",
            "ppic": require("../../assets/p3.jpg"),
            "pprice": "555",
            "pid": 15,
            "occasion": 1,
            "taste":"巧克力",
            "dpic": require("../../assets/d3.jpg"),
            "xpic": require("../../assets/x3.jpg")
          },
          {
            "pname": "16黛西的旅行",
            "ppic": require("../../assets/p5.jpg"),
            "pprice": "255",
            "pid": 16,
            "occasion": 3,
            "taste":"巧克力",
            "dpic": require("../../assets/d5.jpg"),
            "xpic": require("../../assets/x5.jpg")
          },
          {
            "pname": "17蔓越莓红丝绒",
            "ppic": require("../../assets/p2.jpg"),
            "pprice": "285",
            "pid": 17,
            "occasion": 4,
            "taste":"巧克力",
            "dpic": require("../../assets/d2.jpg"),
            "xpic": require("../../assets/x2.jpg")
          },
          {
            "pname": "18蓝莓轻乳拿破仑",
            "ppic": require("../../assets/p3.jpg"),
            "pprice": "555",
            "pid": 18,
            "occasion": 2,
            "taste": "芝士",
            "dpic": require("../../assets/d3.jpg"),
            "xpic": require("../../assets/x3.jpg")
          },
          {
            "pname": "19蓝莓轻乳拿破仑2",
            "ppic": require("../../assets/p2.jpg"),
            "pprice": "555",
            "pid": 19,
            "occasion": 3,
            "taste": "芝士",
            "dpic": require("../../assets/d2.jpg"),
            "xpic": require("../../assets/x2.jpg")
          },
          {
            "pname": "20蓝莓轻乳拿破仑3",
            "ppic": require("../../assets/p3.jpg"),
            "pprice": "555",
            "pid": 20,
            "occasion": 1,
            "taste": "芝士",
            "dpic": require("../../assets/d3.jpg"),
            "xpic": require("../../assets/x3.jpg")
          },
          {
            "pname": "21蓝莓轻乳拿破仑4",
            "ppic": require("../../assets/p5.jpg"),
            "pprice": "555",
            "pid": 21,
            "occasion": 4,
            "taste": "芝士",
            "dpic": require("../../assets/d5.jpg"),
            "xpic": require("../../assets/x5.jpg")
          },
        ],
    }},
    components: {
      'my-productsize': ProductSize
    },

  }
</script>
<style>
  .p-title {
    font-size: 50px;
    color: #000;
    margin-top: 15px;
  }

  .describe {
    margin-top: 40px;
  }
  .moredes{
    margin-top: 40px;
  }
  .moretext{

    color: #DEB887;
  }
  hr{
    height:1px;
    background-color:#000
  }

</style>

<style scoped>
  .p-img {
    width: 100%
  }

</style>
