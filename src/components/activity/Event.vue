<template>
<div class="container">
  <app-event-header></app-event-header>
  <app-event-product></app-event-product>
  <app-event-load></app-event-load>
  <app-event-details></app-event-details>
</div>
</template>

<script>
  import EventHeader from './EventHeader'
  import EventProduct from './EventProduct'
  import EventDetails from './EventDetails'
  import EventLoad from './EventLoad'

    export default {
        name: "Event",
      components:{
        'app-event-header':EventHeader,
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
