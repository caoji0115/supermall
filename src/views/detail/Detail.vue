<template>
  <div id="detail">
    <detail-navbar></detail-navbar>
    <detail-swiper :topimgs="topImages"/>
    <detail-base :goods="goods"></detail-base>
    <detail-shop :shop="shop"></detail-shop>
  </div>
</template>

<script>

  import DetailNavbar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBase from './childComps/Detailbase'
  import DetailShop from './childComps/DetailShop'

  import {getGoodsDetail,Goods,Shop} from 'network/detail'

  export default {
    name: "Detail",
    components:{
      DetailNavbar,
      DetailSwiper,
      DetailBase,
      DetailShop
    },
    data(){
      return{
        iid:null,
        topImages:[],
        goods:{},
        shop:{}
      }
    },
    created() {
      this.iid = this.$route.params.iid;
      getGoodsDetail(this.iid).then(res => {
        console.log(res);
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
        this.shop = new Shop(data.shopInfo);
      });

    }
  }
</script>

<style scoped>
  #detail {
    /*margin-top: 44px;*/
    position: relative;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
  .left{
    border-color: aqua;
  }
  .center{
    text-align: center;
    font-size: 12px;

  }

</style>
