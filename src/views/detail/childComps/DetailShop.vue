<template>
  <div class="shop" v-if="Object.keys(shop).length !==0">
    <div class="shop-logo">
<!--      <a :href="shop.shopUrl">-->
        <img :src="shop.shopLogo" alt="">
        <span>{{shop.name}}</span>
<!--      </a>-->

    <div class="total">
      <div class="c-sell">
        <div class="sells">总销量</div>
        <div >{{shop.cSells | countFilter}}</div>
      </div>
      <div class="c-goods">
        <div class="cGoods">全部商品</div>
        <div>{{shop.cGoods}}</div>
      </div>
    </div>
    </div>
    <div class="button">
      <div v-for="item in shop.score">
        <span class="name">{{item.name}}</span>
        <span class="score" :class="{betterscore:item.isBetter}">{{item.score}}</span>
        <span class="better" :class="{'better-more':item.isBetter}">{{item.isBetter? '高' :'低'}}</span>
    </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "DetailShop",
    props:{
      shop:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      countFilter(value){
        if(value<1000) return value;
        return (value/10000).toFixed(1)+'万'
      }
    }
  }
</script>

<style scoped>

.shop-logo{
  margin-top: 10px;
}
  .shop-logo img{
    width: 80px;
    height: 80px;
    margin-right: 5px;
  }
  .shop-logo span{
    position: relative;
    top: -40px;
    font-size: 20px;
    color: #1c1a14;
  }
  .total{
    float: right;
    margin-top: 10px;
    text-align: center;
    font-size: 20px;
    color: #1c1a14;
    display: flex;
  }
  .c-sell{
   margin-right: 5px;
  }
  .sells{
    border: #1c1a14 solid 2px;
    border-radius: 8px;
  }
  .cGoods{
    border: #1c1a14 solid 2px;
    border-radius: 8px;
  }
  .button{
    /*margin: 10px 0;*/
    width: 100%;
    display: flex;
    font-size: 15px;
    padding-bottom: 5px;
    border-bottom: 2px silver solid;
    Justify-content: space-between;

  }
  .name{
    margin-right: 5px;
  }
  .score{
    margin-right: 5px;
  }
  .better{
    color: #1c1a14;
  }
  .betterscore{
    color: #fa1941;
  }
  .better-more{
    color: #fa1941;
  }

</style>
