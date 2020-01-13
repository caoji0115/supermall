import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);

const state ={
  cartList:[]
};

export default new Vuex.Store({
  state,
  //   {
  //   cartList:[]
  // },
  mutations,
    //结合actions
    // addCart(state,payLoad){
    //   let oldProduct = null;
    //   for (let item of state.cartList) {
    //     if (item.iid ===payLoad.iid) {
    //       oldProduct = item
    //     }
    //   }
    //  // const olProduct = state.cartList.find(item => item.iid === info.iid)
    //   if (oldProduct){
    //     oldProduct.count+=1
    //   }else {
    //     payLoad.count =1;
    //     state.cartList.push(payLoad)
    //   }
    // }

    //抽离
    // addCounter(state,payLoad){
    //   payLoad.count++
    // },
    // addToCart(state,payLoad){
    //   state.cartList.push(payLoad)
    // }
  //},
  actions,
    // addCart(context,payLoad){
    //   let oldProduct = null;
    //   for (let item of context.state.cartList) {
    //     if (item.iid ===payLoad.iid) {
    //       oldProduct = item
    //     }
    //   }
    //   // const olProduct = state.cartList.find(item => item.iid === info.iid)
    //   if (oldProduct){
    //    context.commit('addCounter',oldProduct)
    //   }else {
    //     payLoad.count =1;
    //     context.commit('addToCart',payLoad)
    //   }
    // }
  getters,
  modules: {
  }
})
