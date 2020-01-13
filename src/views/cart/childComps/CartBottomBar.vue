<template>
  <div class="bottom-bar">
    <div class="bottom-content">
      <check-button class="select-all" :isChecked=" isSelectAll" @click.native="checkclick"/>
      <span>全选</span>
    </div>
    <div class="right">
      <span>合计：</span>
      <div class="total-price">￥{{totalprice}}</div>
      <div class="total-product">结算({{totalcount}})</div>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkbutton/CheckButton'
  export default {
    name: "CartBottomBar",
    components:{
      CheckButton
    },
    computed:{
      totalprice(){
        return this.$store.getters.cartList.filter(item =>{
          return item.checked
        }).reduce((previousValue,item) => {
          return previousValue + item.count*item.price
        },0).toFixed(2)
      },
      totalcount(){
        return this.$store.getters.cartCount
      },
      isSelectAll(){
        if (this.$store.getters.cartList.length ===0) return false;
       // return !(this.$store.getters.cartList.filter(item => !item.checked).length)
       // return !(this.$store.getters.cartList.find(item => !item.checked))
        
        for (let item of this.$store.getters.cartList) {
          if (!item.checked) {
            return  false
          }
        }
         return true
      }
    },
    methods:{
      checkclick(){
        //console.log('qe');
        if (this.isSelectAll) {
          this.$store.getters.cartList.forEach(item => item.checked = false)
        }else {
          this.$store.getters.cartList.forEach(item => item.checked = true)
        }
      }
    }
  }
</script>

<style scoped>
.bottom-bar{
  position: relative;
  display: flex;
  text-align: center;
  background-color: #ffffff;
  height: 44px;
  bottom: 90px;
  justify-content: space-between;
}
  .bottom-content{
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
.select-all{
  width: 22px;
  height: 22px;
  margin-right: 5px;
}
.right{
  width: 70%;
  display: flex;
  line-height: 40px;
  justify-content: flex-end;
}
.right span{
  color: #1c1a14;font-size: large;

}
.total-price{
  color: #fa1941;
  font-size: smaller;
  line-height: 60px;
  margin-right: 15px;
}
.total-product{
  background-color: #eb4868;
  width: 100px;
  border-radius: 40px;
  text-align: center;
  color: #ffffff;
  font-size: larger;
}
</style>
