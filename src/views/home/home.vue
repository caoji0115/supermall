<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>

    <scroll class="content" ref="top" :num="3" @backclick="click">
      <home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行','新品','精选']" class="tab-control"
                   @itemClick="itemclick"/>
      <goods-list :goods="showgoods"/>
    </scroll>
    <back-top @click.native="backclick" v-show="isShow"/>

  </div>
</template>

<script>

  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import navbar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'

  import scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backtop/BackTop'

  import {getHomeMultidata, getHomeGoods} from "network/home";

  export default {
    name: "home",
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      navbar,
      TabControl,
      GoodsList,
      scroll,
      BackTop
    },
    data() {
      return {
        //result:null,
        type: 'pop',
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        isShow:false
      }
    },
    created() {
      this.getHomeMultidata();
      // getHomeMultidata().then(res =>{
      //   //console.log(res);
      //   //this.result = res;
      //   this.banners = res.data.banner.list;
      //   this.recommends = res.data.recommend.list;
      // })
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods:{
      // 以下监听事件相关方法
      itemclick(index){
        if (index === 0){
          this.type = 'pop'
        } else if (index === 1) {
          this.type = 'new'
        } else {
          this.type = 'sell'
        }
        console.log(index);
      },
      backclick(){
        this.$refs.top.scrollTo(0,0,500)
      },
      click(position){
        console.log(position);
        this.isShow = (-position.y) >1000
      },

      // 以下网络请求相关方法
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.page = this.goods[type].page += 1;
        })
      }
    },
    computed: {
      showgoods() {
        return this.goods[this.type].list
      }
    },

  }
</script>

<style scoped>
  #home {
    margin-top: 44px;
    position: relative;
    height: 100vh;
  }

  .home-nav {
    background-color: #fedbff;
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .content {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }

</style>
