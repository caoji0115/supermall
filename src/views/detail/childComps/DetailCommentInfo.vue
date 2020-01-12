<template>
  <div class="detail-comment" v-if="Object.keys(detailComment).length !==0">
    <div class="top">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <div class="user">
      <img :src="detailComment.user.avatar" alt="">
      <span>{{detailComment.user.uname}}</span>
    </div>
    <div class="content">
      <span>{{detailComment.content}}</span>
      <div class="imgs">
        <img :src="detailComment.images" alt="">
      </div>
      <div class="other">
        <span>{{detailComment.created | showData}}</span>
        <span>{{detailComment.style}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils'
  export default {
    name: "DetailCommentInfo",
    props:{
      detailComment:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      showData(value){
        //将时间戳转为Date()对象
        const date = new Date(value * 1000);
        //将date进行格式化
        return formatDate(date,'yyyy-MM-dd hh:mm:ss')
      }
    },

  }
</script>

<style scoped>
  .detail-comment{
    margin: 10px 0;
    padding-bottom: 10px;
    border-bottom: #cccccc solid 3px;
  }
.top{
  position: relative;
  color: #1c1a14;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  margin: 5px;
  border-bottom: #cccccc solid 2px;
  padding: 5px 0;
}
  .user{
    margin: 5px 0;
  }
  .user img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .user span{
    position: relative;
    top: -20px;
    color: #1c1a14;
    font-size: 20px;
  }
  .imgs img{
    width: 20%;
    height: 20%;
  }
  .content span{
    text-align: center;
    line-height: initial;
    height: 5px;
  }
  .other{
    margin: 3px 0;
  }
  .other span{
    margin-right: 5px;
  }
</style>
