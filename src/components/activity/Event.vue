<template>
<div class="container">
  <app-event-head></app-event-head>
  <app-event-product></app-event-product>
  <app-event-load></app-event-load>
  <app-event-details></app-event-details>
</div>
</template>

<script>
  import EventHead from './EventHead'
  import EventProduct from './EventProduct'
  import EventDetails from './EventDetails'
  import EventLoad from './EventLoad'
  export default {
        name: "Event",
      components:{
        'app-event-head':EventHead,
        'app-event-product':EventProduct,
        'app-event-details':EventDetails,
        'app-event-load':EventLoad,
      },
    }
</script>

<style scoped>
  .container{
    background-image: url("../../../static/images/beijing.png");
  }
</style>
