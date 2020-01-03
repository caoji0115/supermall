<template>
    <div id="home">
      <navbar class="home-nav"><div slot="center">购物街</div></navbar>

    </div>
</template>

<script>
  import navbar from 'components/common/navbar/NavBar'
  import {getHomeMultidata} from "network/home";

  export default {
    name: "home",
    components: {
      navbar
    },
    data(){
      return{
        //result:null,
        banners:[]
      }
    },
    created() {
          getHomeMultidata().then(res =>{
            //console.log(res);
            //this.result = res;
            this.result = res.data.banner.list;
          })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: #fedbff;
    color: #fff;
  }
</style>
