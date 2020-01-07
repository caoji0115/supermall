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
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        dafault: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      });
      this.scroll.on('scroll', position => {
        this.$emit('backclick', position)
      });
      this.scroll.on('pullingUp', () => {
        this.$emit('pullupload');
        //this.scroll.finishPullUp();
        //this.scroll.refresh();
      })
    },
    methods: {
      scrollTo(x, y, time = 300) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      finishPullUp(){
         this.scroll.finishPullUp();
      }
    }
  }
</script>

<style scoped>

</style>
