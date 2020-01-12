<template>
  <div class="recomment">
    <goods-list :goods="recomments"/>
  </div>
</template>

<script>
  import GoodsList from 'components/content/goods/GoodsList'
  import GoodsListItem from 'components/content/goods/GoodsListItem'
  export default {
    name: "DetailRecomment",
    props:{
      recomments:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      GoodsList,
      GoodsListItem
    }
  }
</script>

<style scoped>

</style>
