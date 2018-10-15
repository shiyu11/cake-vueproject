<template>
  <div>
    <h2>蛋糕{{pid}}详情</h2>
    <el-row :gutter="20">
      <el-col :span="12">
        <img src="../../assets/x1.jpg" alt="" class="p-img">
      </el-col>
      <el-col :span="10" :offset="1">
        <div>
          <span class="p-title">尼诺</span><br>
          <my-productsize></my-productsize>

          <div class="describe">
            <p>Framboise aigre, Lychee sucrée, s’éclatait étincelles de l’amour sur la langue, Comme l’humeur de la
              jeune
              fille qui se détours innombrable.</p>
            <p>
              树莓的酸，荔枝的甜，在舌尖上碰撞出恋爱的火花，犹如少女心境的千回百转，沁人心脾。</p>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row class="moredes">
      <el-col :span="6">
        <hr>
      </el-col>
      <el-col :span="2">
        <img src="../../assets/middleicon.png" alt="">
      </el-col>
        <el-col :span="10" class="moretext">
        <p>J’aimerais t’offrir un rêve d’amour, une jeune fille marche dans un cheminée , traverse un village
          fleurissant,
          tu me regardes avec tes yeux souriants, s’ennuie jamais .
          我想送给你们一个关于爱情的梦境，梦境里是少女行走在小镇花径的身影，回眸笑眼弯弯，一生不厌。</p>
      </el-col>
      <el-col :span="6">
        <hr>
      </el-col>
    </el-row>
    <el-row class="moredes">
    <img src="../../assets/d1.jpg" alt="">
    </el-row>
  </div>
</template>

<script>
  import ProductSize from './ProductSize'

  export default {
    name: "ProductSize",
    data() {
      return {
        pid: this.$route.params.pid
      }
    },
    components: {
      'my-productsize': ProductSize
    }
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

</style>

<style scoped>
  .p-img {
    width: 100%
  }

</style>
