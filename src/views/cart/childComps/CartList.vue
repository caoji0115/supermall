<template>
    <div class="content">
      <cart-list-item v-for="(item,index) in cartList" :key="index" :item-info="item"/>

      <ul>
        <li>{adf1}</li>
        <li>{adf2}</li>
        <li>{adf3}</li>
        <li>{adf4}</li>
        <li>{adf5}</li>
        <li>{adf6}</li>
        <li>{adf7}</li>
        <li>{adf8}</li>
        <li>{adf9}</li>
        <li>{adf10}</li>
        <li>{adf11}</li>
        <li>{adf12}</li>
        <li>{adf13}</li>
        <li>{adf14}</li>
        <li>{adf15}</li>
        <li>{adf16}</li>
        <li>{adf17}</li>
        <li>{adf18}</li>
        <li>{adf19}</li>
        <li>{adf20}</li>
        <li>{adf21}</li>
        <li>{adf22}</li>
        <li>{adf23}</li>
        <li>{adf24}</li>
        <li>{adf25}</li>
        <li>{adf26}</li>
        <li>{adf27}</li>
        <li>{adf28}</li>
        <li>{adf29}</li>
        <li>{adf30}</li>
        <li>{adf31}</li>
        <li>{adf32}</li>
        <li>{adf33}</li>
        <li>{adf34}</li>
        <li>{adf35}</li>
        <li>{adf36}</li>
        <li>{adf37}</li>
        <li>{adf38}</li>
        <li>{adf39}</li>
        <li>{adf40}</li>
        <li>{adf41}</li>
        <li>{adf42}</li>
        <li>{adf43}</li>
        <li>{adf44}</li>
        <li>{adf45}</li>
        <li>{adf46}</li>
        <li>{adf47}</li>
        <li>{adf48}</li>
        <li>{adf49}</li>
        <li>{adf50}</li>
        <li>{adf51}</li>
        <li>{adf52}</li>
        <li>{adf53}</li>
        <li>{adf54}</li>
        <li>{adf55}</li>
        <li>{adf56}</li>
        <li>{adf57}</li>
        <li>{adf58}</li>
        <li>{adf59}</li>
        <li>{adf60}</li>
        <li>{adf61}</li>
        <li>{adf62}</li>
        <li>{adf63}</li>
        <li>{adf64}</li>
        <li>{adf65}</li>
        <li>{adf66}</li>
        <li>{adf67}</li>
        <li>{adf68}</li>
        <li>{adf69}</li>
        <li>{adf70}</li>
        <li>{adf71}</li>
        <li>{adf72}</li>
        <li>{adf73}</li>
        <li>{adf74}</li>
        <li>{adf75}</li>
        <li>{adf76}</li>
        <li>{adf77}</li>
        <li>{adf78}</li>
        <li>{adf79}</li>
        <li>{adf80}</li>
        <li>{adf81}</li>
        <li>{adf82}</li>
        <li>{adf83}</li>
        <li>{adf84}</li>
        <li>{adf85}</li>
        <li>{adf86}</li>
        <li>{adf87}</li>
        <li>{adf88}</li>
        <li>{adf89}</li>
        <li>{adf90}</li>
        <li>{adf91}</li>
        <li>{adf92}</li>
        <li>{adf93}</li>
        <li>{adf94}</li>
        <li>{adf95}</li>
        <li>{adf96}</li>
        <li>{adf97}</li>
        <li>{adf98}</li>
        <li>{adf99}</li>
        <li>{adf100}</li>
      </ul>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  import CartListItem from './CartListItem'

    export default {
        name: "CartList",
      components:{
        CartListItem
      },
      computed:{
        ...mapGetters(['cartList']),
      }
    }
</script>

<style scoped>

</style>
