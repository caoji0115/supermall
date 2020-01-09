<template>
  <div v-if="Object.keys(goods).length !==0" class="base-info">
    <div class="title-info">
      {{goods.title}}
    </div>
    <div class="price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="other-info">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="services">
      <span class="services-item" v-for="index in goods.services.length-1" :key="index">
            <img :src="goods.services[index-1].icon" alt="">
            <span>{{goods.services[index-1].name}}</span>
        </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Detailbase",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      },

    }
  }
</script>

<style scoped>
.base-info{
  margin-top: 5px;
  padding: 0 5px;
}
.title-info{
 font-size: 15px;

}
  .price{
   margin-top: 10px;
  }
  .new-price{
    font-size: 25px;
    color: red;
  }
  .old-price{
    margin-right: 8px;
    text-decoration: line-through #1c1a14;
    font-size: 13px;
  }
  .discount{
    color: #e5ecec;
    font-size: 20px;
    background-color: #cc1342;
    border-radius: 5px;
    position: relative;
    top: -5px;
  }
  .other-info{
    margin-top: 10px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 2px silver solid;
  }

  .services{
    margin-top: 10px;
    display: flex;
    font-size: 15px;
    justify-content: space-between;
    color: #1c1a14;
    padding: 10px 0;
    border-bottom: 2px silver solid;
  }

  .services-item img{
    width: 15px;
    height: 15px;
    position: relative;
    top: 2px;
  }
</style>
