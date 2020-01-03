<template>
  <tabbar>
    <tabbaritem path="/home" activeColor="blue">
      <img slot="item-img" src="~assets/img/Home.jpg" alt="">
      <img slot="item-img-active" src="~assets/img/Home-active.jpg" alt="">
      <div slot="item-text">首页</div>
    </tabbaritem>
    <tabbaritem path="/category">
      <img slot="item-img" src="~assets/img/category.jpg" alt="">
      <img slot="item-img-active" src="~assets/img/category-active.jpg" alt="">
      <div slot="item-text">分类</div>
    </tabbaritem>
    <tabbaritem path="/cart">
      <img slot="item-img" src="~assets/img/cart.jpg" alt="">
      <img slot="item-img-active" src="~assets/img/cart-active.jpg" alt="">
      <div slot="item-text">购物车</div>
    </tabbaritem>
    <tabbaritem path="/profile">
      <img slot="item-img" src="~assets/img/profile.jpg" alt="">
      <img slot="item-img-active" src="~assets/img/profile-active.jpg" alt="">
      <div slot="item-text">我的</div>
    </tabbaritem>
  </tabbar>
</template>

<script>
  import tabbar from 'components/common/tabbar/tabBar'
  import tabbaritem from 'components/common/tabbar/tabbaritem'
    export default {
        name: "MaintabBar",
      components:{
          tabbar,
        tabbaritem
      }
    }
</script>

<style scoped>

</style>
