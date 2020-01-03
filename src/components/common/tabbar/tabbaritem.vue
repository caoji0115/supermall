<template>
    <div class="tab-bar-item" @click="itemclick">
      <div v-if="!isActive"><slot name="item-img"></slot></div>
      <div v-else><slot name="item-img-active"></slot></div>
      <div :style="isActiveColor"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "tabbaritem",
      props:{
        path:String,
        activeColor:{
          type:String,
          default:'red'
        }
      },
      data(){
          return { }
      },
      computed:{
          isActive(){
             return this.$route.path.indexOf(this.path) !== -1
          },
          isActiveColor(){
           return this.isActive ? {color:this.activeColor} :{ }
          }
      },
      methods:{
          itemclick(){
            return this.$router.push(this.path)
          }
      }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
  }
</style>
