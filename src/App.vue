<template>
  <div id="app">
    <maintabbar></maintabbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import maintabbar from 'components/content/mainTarbar/MaintabBar'

  export default {
    name: 'App',
    components:{
      maintabbar
    }
  }
</script>
<style>
  @import "assets/css/base.css";
</style>
