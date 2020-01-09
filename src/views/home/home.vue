<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <tab-control :titles="['流行','新品','精选']" class="tab-control1" ref="tabcontrol1"
                 @itemclick="itemsclick" v-show="isshowtabcontrol"/>

    <scroll class="content" ref="scroll"
            :probeType="3" @backclick="contentscrol"
            :pull-up-load="true" @pullupload="loadMore">
      <home-swiper :banners="banners" @swiperimgload="swiperimgload"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行','新品','精选']"  ref="tabcontrol2"
                   @itemclick="itemsclick"/>
      <goods-list :goods="showgoods"/>
    </scroll>
    <back-top @click.native="backclick" v-show="isShowtop"/>

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
        isShowtop: false,
        tabOffsetTop:0,
        isshowtabcontrol:false,
        saveY:0
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

      // this.$bus.$on('itemimgload',() =>{
      //   this.$refs.scroll.refresh()
      // created 获取元素时可能会为空 -> $ref.scroll 包括document的方法
      // })
    },
    mounted() {
      const refresh = this.debounce(this.$refs.scroll.refresh,10);

      this.$bus.$on('itemimgload', () => {
        //this.$refs.scroll.refresh()
        refresh()
      })
    },
    methods: {
      // 以下监听事件相关方法
      debounce(func,delay){
        let timer = null;
        return function (...args) {
          if (timer) clearTimeout(timer);
          timer = setTimeout(()=>{
            func.apply(this,args)
          },delay)
        }
      },

      itemsclick(index) {
        if (index === 0) {
          this.type = 'pop'
        } else if (index === 1) {
          this.type = 'new'
        } else {
          this.type = 'sell'
        }
        console.log(index);
        this.$refs.tabcontrol1.currentIndex = index;
        this.$refs.tabcontrol2.currentIndex = index;
      },
      backclick() {
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      contentscrol(position) {
        //console.log(position);
        this.isShowtop = (-position.y) > 1000;

        this.isshowtabcontrol = (-position.y) > this.tabOffsetTop
       // console.log(this.tabOffsetTop);
        //console.log(this.isshowtabcontrol);
      },
      loadMore() {
        console.log('---');
        this.getHomeGoods(this.type)
      },
      swiperimgload(){
        this.tabOffsetTop = this.$refs.tabcontrol2.$el.offsetTop;
        //console.log(this.$refs.tabcontrol.$el.offsetTop);
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
          this.$refs.scroll.finishPullUp();
        });
      }
    },
    computed: {
      showgoods() {
        return this.goods[this.type].list
      }
    },
    //
    activated(){
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      this.saveY = this.$refs.scroll.scroll.y
      //console.log(this.$refs.scroll.scroll);
    }
  }
</script>

<style scoped>
  #home {
    /*margin-top: 44px;*/
    position: relative;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  .home-nav {
    background-color: #fedbff;
    color: #fff;
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }
.tab-control1{
  position: absolute;
  z-index: 9;
  width: 100%;
  margin: 0;
  padding: 0;
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
