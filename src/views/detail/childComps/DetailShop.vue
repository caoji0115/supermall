<template>
  <div class="shop" v-if="Object.keys(shop).length !==0">
    <div class="shop-logo">
      <a :href="shop.shopUrl">
        <img :src="shop.shopLogo" alt="">
        <span>{{shop.name}}</span>
      </a>
    </div>
    <div class="total">
      <div class="c-sell">
        <div>{{shop.cSells}}</div>
        <span>总销量</span>
      </div>
      <div class="c-goods">
        <div>{{shop.cGoods}}</div>
        <span>全部商品</span>
      </div>
    </div>
    <div class="button">
      <div v-for="item in shop.score">
        <span class="name">{{item.name}}</span>
        <span class="score">{{item.score}}</span>
        <span class="better">{{item.isBetter? '高' :'低'}}</span>
    </div>
    </div>
    <ul>
      <li>{里边1}</li>
      <li>{里边2}</li>
      <li>{里边3}</li>
      <li>{里边4}</li>
      <li>{里边5}</li>
      <li>{里边6}</li>
      <li>{里边7}</li>
      <li>{里边8}</li>
      <li>{里边9}</li>
      <li>{里边10}</li>
      <li>{里边11}</li>
      <li>{里边12}</li>
      <li>{里边13}</li>
      <li>{里边14}</li>
      <li>{里边15}</li>
      <li>{里边16}</li>
      <li>{里边17}</li>
      <li>{里边18}</li>
      <li>{里边19}</li>
      <li>{里边20}</li>
      <li>{里边21}</li>
      <li>{里边22}</li>
      <li>{里边23}</li>
      <li>{里边24}</li>
      <li>{里边25}</li>
      <li>{里边26}</li>
      <li>{里边27}</li>
      <li>{里边28}</li>
      <li>{里边29}</li>
      <li>{里边30}</li>
      <li>{里边31}</li>
      <li>{里边32}</li>
      <li>{里边33}</li>
      <li>{里边34}</li>
      <li>{里边35}</li>
      <li>{里边36}</li>
      <li>{里边37}</li>
      <li>{里边38}</li>
      <li>{里边39}</li>
      <li>{里边40}</li>
      <li>{里边41}</li>
      <li>{里边42}</li>
      <li>{里边43}</li>
      <li>{里边44}</li>
      <li>{里边45}</li>
      <li>{里边46}</li>
      <li>{里边47}</li>
      <li>{里边48}</li>
      <li>{里边49}</li>
      <li>{里边50}</li>
      <li>{里边51}</li>
      <li>{里边52}</li>
      <li>{里边53}</li>
      <li>{里边54}</li>
      <li>{里边55}</li>
      <li>{里边56}</li>
      <li>{里边57}</li>
      <li>{里边58}</li>
      <li>{里边59}</li>
      <li>{里边60}</li>
      <li>{里边61}</li>
      <li>{里边62}</li>
      <li>{里边63}</li>
      <li>{里边64}</li>
      <li>{里边65}</li>
      <li>{里边66}</li>
      <li>{里边67}</li>
      <li>{里边68}</li>
      <li>{里边69}</li>
      <li>{里边70}</li>
      <li>{里边71}</li>
      <li>{里边72}</li>
      <li>{里边73}</li>
      <li>{里边74}</li>
      <li>{里边75}</li>
      <li>{里边76}</li>
      <li>{里边77}</li>
      <li>{里边78}</li>
      <li>{里边79}</li>
      <li>{里边80}</li>
      <li>{里边81}</li>
      <li>{里边82}</li>
      <li>{里边83}</li>
      <li>{里边84}</li>
      <li>{里边85}</li>
      <li>{里边86}</li>
      <li>{里边87}</li>
      <li>{里边88}</li>
      <li>{里边89}</li>
      <li>{里边90}</li>
      <li>{里边91}</li>
      <li>{里边92}</li>
      <li>{里边93}</li>
      <li>{里边94}</li>
      <li>{里边95}</li>
      <li>{里边96}</li>
      <li>{里边97}</li>
      <li>{里边98}</li>
      <li>{里边99}</li>
      <li>{里边100}</li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: "DetailShop",
    props:{
      shop:{
        type:Object,
        default(){
          return {}
        }
      }

    }
  }
</script>

<style scoped>

</style>
