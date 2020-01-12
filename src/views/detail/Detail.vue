<template>
  <div id="detail">
    <detail-navbar class="detail-nav" ref="nav" @titleclick="titleclick"/>
    <scroll class="content-detail" ref="scroll"
            :probeType="3" @scroll="contentscroll"
            :pullUpLoad="true">
      <detail-swiper :topimgs="topImages"/>
      <detail-base :goods="goods"></detail-base>
      <detail-shop :shop="shop"></detail-shop>
      <goods-info :detail-info="detailInfo" @imageload="imageload"/>
      <detail-params ref="params" :detailparams="detailparams"/>
      <detail-comment ref="comment" :detailComment="detailComment"/>
      <detail-recomment ref="recomment" :recomments="recommends"/>
    </scroll>

  </div>
</template>

<script>

  import DetailNavbar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBase from './childComps/Detailbase'
  import DetailShop from './childComps/DetailShop'
  import GoodsInfo from './childComps/GoodsInfo'
  import DetailParams from './childComps/DetailParams'
  import DetailComment from './childComps/DetailCommentInfo'
  import DetailRecomment from './childComps/DetailRecomment'


  import scroll from 'components/common/scroll/Scroll'

  import {getGoodsDetail, getRecommend, Goods, Shop} from 'network/detail'
  import {debounce} from "common/utils";

  export default {
    name: "Detail",
    components: {
      DetailNavbar,
      DetailSwiper,
      DetailBase,
      DetailShop,
      GoodsInfo,
      DetailParams,
      DetailComment,
      DetailRecomment,
      scroll
    },
    data() {
      return {
        iid: null,
        //currentIndex:0,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        detailparams: {},
        detailComment: {},
        recommends: [],
        themeTopYs: [],
        getThemeTopYs: null
      }
    },
    methods: {
      imageload() {
        this.$refs.scroll.refresh();
        this.getThemeTopYs()
      },
      titleclick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
      },
      contentscroll(position) {
        const positionY = -position.y;
        let length = this.themeTopYs.length;
        for (let i = 0; i < length-1; i++) {
          if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
           // this.currentIndex = i;
            this.$refs.nav.currentIndex =  i
          }
        }
      }
    },
    created() {
      //获取ID
      this.iid = this.$route.params.iid;
      //依据id获取商品信息
      getGoodsDetail(this.iid).then(res => {
        console.log(res);
        const data = res.result;
        //获取商品轮播图片
        this.topImages = data.itemInfo.topImages;
        //商品基本信息  （价格、打折、快递。。。）
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
        //商家信息
        this.shop = new Shop(data.shopInfo);
        //商品信息（图片。。。）
        this.detailInfo = data.detailInfo;
        //获取商品参数
        this.detailparams = data.itemParams;
        //获取评论信息
        if (data.rate.cRate !== 0) {
          this.detailComment = data.rate.list[0];
        }
      });
      //获取推荐信息
      getRecommend().then(res => {
        this.recommends = res.data.list
      });
      this.getThemeTopYs = debounce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recomment.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE);
        //调整各组件距离
        this.themeTopYs = this.themeTopYs.map(num => {
          return num - 50
        });
        //console.log(this.themeTopYs);
      }, 100)
    },
    // updated() {
    //   this.$nextTick(()=>{     //此方法也可行
    //     this.themeTopYs=[];
    //     this.themeTopYs.push(0);
    //     this.themeTopYs.push(this.$refs.params.$el.offsetTop);
    //     this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
    //     this.themeTopYs.push(this.$refs.recomment.$el.offsetTop);
    //     //给一个最大值，便于滚动内容显示对应标题
    //     this.themeTopYs.push(Number.MAX_VALUE)
    //     // console.log(this.themeTopYs);
    //   })
    // }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    height: 100vh;
    background-color: #ffffff;
    margin: 0;
    padding: 0;
    z-index: 9
  }

  .detail-nav {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    background-color: #ffffff;
  }

  .content-detail {
    height: calc(100% - 44px);
    background-color: #ffffff;
    /*  position: absolute;*/
    /*  top: 44px;*/
    /*  bottom: 49px;*/
    /*  right: 0;*/
    /*  left: 0;*/
    /*}*/
  }
</style>
