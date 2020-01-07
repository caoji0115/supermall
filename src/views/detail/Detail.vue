<template>
  <div>{{iid}}</div>
</template>

<script>

  import getGoodsDetail from 'network/detail'

  export default {
    name: "Detail",
    data(){
      return{
        iid:null
      }
    },
    created() {
      this.iid = this.$route.params.iid;
      getGoodsDetail(this.iid).then(res=>{
        console.log(res);
      });

    }
  }
</script>

<style scoped>

</style>
