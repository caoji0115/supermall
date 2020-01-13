<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
    export default {
        name: "CheckButton",
      props:{
        isChecked:{
          type:Boolean,
          default:false
        }
      }
    }
</script>

<style scoped>
.check-button{
  border-radius: 50%;
  border: #e5ecec solid 2px;
}
.check{
  border-radius: 50%;
  background-color: #eb4868;
  border-color: #eb4868 ;
}
</style>
