export default {
  addCart(context,payLoad){
      let oldProduct = null;
      for (let item of context.state.cartList) {
        if (item.iid === payLoad.iid) {
          oldProduct = item
        }
      }
      // const olProduct = content.state.cartList.find(item => item.iid === info.iid)
      if (oldProduct){
       context.commit('addCounter',oldProduct)
      }else {
        payLoad.count = 1;
        context.commit('addToCart',payLoad)
      }
    }
}
