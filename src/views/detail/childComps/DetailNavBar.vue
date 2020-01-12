<template>
  <div>
    <navbar >
      <div slot="left" class="back" @click="backclick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="nav-title">
        <div class="titles" v-for="(item,index) in titles"
        :class="{active:currentIndex ===index}" @click="titleclick(index)">{{item}}</div>
      </div>
    </navbar>
  </div>

</template>

<script>
  import navbar from 'components/common/navbar/NavBar'
  export default {
    name: "DetailNavBar",
    components:{
      navbar
    },
    data(){
      return{
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods:{
      titleclick(index){
        this.currentIndex = index;
        this.$emit('titleclick',index)
      },
      backclick(){
        //this.$router.go(-1);
        this.$router.back();
        //console.log('---');
      }
    }
  }
</script>

<style scoped>
  .nav-title{
  display: flex;
}
  .titles{
    flex: 1;
  }
  .active{
    color: #cc1342;
  }
  .back{
    margin-top: 5px;
  }
</style>
