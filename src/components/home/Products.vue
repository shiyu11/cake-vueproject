<template>
  <div>
    <ul class="list-group">
      <li>
        <my-oneproduct></my-oneproduct>
      </li>
    </ul>
  </div>
</template>

<script>
  import OneProduct from './OneProduct'
    export default {
        name: "Products",
      components:{
          'my-oneproduct':OneProduct
      }
    }
</script>

<style scoped>

</style>
