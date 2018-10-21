<template>
<div class="container">
  <app-event-header></app-event-header>
  <app-event-products></app-event-products>
   <app-event-part></app-event-part>
  <app-event-detail></app-event-detail>
</div>
</template>

<script>
  import EventPart from './EventPart'
  import EventHeader from './EventHeader'
  import EventDetail from './EventDetail'
  import EventProducts from './EventProducts'
    export default {
        name: "Event",
      components:{
        'app-event-part':EventPart,
        'app-event-header':EventHeader,
        'app-event-detail':EventDetail,
        'app-event-products':EventProducts
      },
    }
</script>

<style scoped>
  .container{
    background-image: url("../../../static/images/beijing.png");
  }
</style>
