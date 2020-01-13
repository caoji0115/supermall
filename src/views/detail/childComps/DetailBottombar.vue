<template>
    <div class="bottom-bar">
      <div class="left">
        <div>
          <i class="icon service"></i>
          <span  class="text">客服</span>
        </div>
        <div>
          <i class="icon shop"></i>
          <span  class="text"> 店铺</span>
        </div>
        <div>
          <i class="icon select"></i>
          <span  class="text">收藏</span>
        </div>
      </div>
      <div class="right">
        <div class="cart" @click="addToCart">加入购物车</div>
        <div class="buy">购买</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DetailBottombar",
      methods:{
        addToCart(){
          this.$emit('addCart')
        }
      }
    }
</script>

<style scoped>
.bottom-bar{
  position: relative;
  /*bottom: 49px;*/
  height: 49px;
  background-color: #ffffff;
  display: flex;
  text-align: center;
}
  .left{
    flex: 1;
    display: flex;
  }
  .left>div{
    flex: 1;
  }
.left .icon{
  display: block;
  width: 22px;
  height: 22px;
  margin: 4px auto 1px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.left .text{
  font-size: 15px;

}
.left .service{
  background-position:0 -54px;
}
  .right{
    display: flex;
    width: 70%;
    right: 0;
    font-size: 20px;
    line-height: 40px;
  }
  .cart{
    background-color: #fef679;
    border-radius: 40px 0 0 40px;
    width: 50%;
}
  .buy{
    background-color: #ff3566;
    border-radius: 0 40px 40px 0;
    width: 50%;
  }
</style>
