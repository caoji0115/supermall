<template>
  <div class="goods-item" @click="clickItem">
    <img :src="showimage" alt="" @load="imgload">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect" @click="clickItem">{{goodsItem.cfav}}</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "GoodsList",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed:{
      showimage(){
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods: {
      imgload() {
        this.$bus.$emit('itemimgload')
      },
      clickItem() {
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    top: 1px;
    width: 30%;
  }

  .goods-item img {
    border-radius: 5px;
    width: 100%;
  }

  .goods-info {
    text-align: center;
    font-size: 12px;
    overflow: hidden;
    left: 0;
    right: 0;
    position: absolute;
    bottom: 5px;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 3px;
    white-space: nowrap;
  }

  .goods-info .price {
    color: #ad343a;
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::after {
    content: '';
    top: -1px;
    left: -14px;
    width: 15px;
    height: 15px;
    position: absolute;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
