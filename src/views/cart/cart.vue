<template>
    <div class="cart">
      <nav-bar class="nav">
        <div slot="center">购物车({{cartCount}})</div>
      </nav-bar>
      <scroll class="cart-scroll">
        <cart-list/>
      </scroll>
    </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import scroll from 'components/common/scroll/Scroll'

  import CartList from './childComps/CartList'

  import {mapGetters} from 'vuex'

    export default {
      name: "cart",
      components: {
        NavBar,
        scroll,
        CartList
      },
      computed: {
        // 3  计算cartList .length
        ...mapGetters(['cartCount']),
        // ...mapGetters({
        //   length:'cartCount',
        //   list:'cartList'
        // }), //对象方式可以起别名
        // cartCount(){
        //  1 return this.$store.state.cartList.length
        //  2return this.$store.getters.cartCount
      //}
    }
    }
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
.nav{
  background-color: #cc1342;
  color: #e5ecec;
}
  .cart-scroll{
    height: calc(100% - 44px);
    background-color: #ffffff;
    overflow: hidden;
  }
</style>
