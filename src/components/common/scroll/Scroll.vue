<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'

  export default {
    name: "Scroll",
    props:{
      num:0
    },
    data(){
      return {
        scroll:null
      }
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper,{
        probeType:this.num
      });
      this.scroll.on('scroll',position =>{
        this.$emit('backclick',position)
      })
    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
      }
    }
  }
</script>

<style scoped>

</style>
