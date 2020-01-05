<template>
    <div id="home">
      <navbar class="home-nav"><div slot="center">购物街</div></navbar>
      <home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行','新品','精选']" class="tab-control"
      @itemClick="itemclick"/>
      <goods-list :goods="showgoods"/>

      <ul>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>110</li>
        <li>111</li>
        <li>112</li>
        <li>113</li>
        <li>114</li>
        <li>115</li>
        <li>116</li>
        <li>117</li>
        <li>118</li>
        <li>119</li>
        <li>120</li>
        <li>121</li>
        <li>122</li>
        <li>123</li>
        <li>124</li>
        <li>125</li>
        <li>126</li>
        <li>127</li>
        <li>128</li>
        <li>129</li>
        <li>130</li>
        <li>131</li>
        <li>132</li>
        <li>133</li>
        <li>134</li>
        <li>135</li>
        <li>136</li>
        <li>137</li>
        <li>138</li>
        <li>139</li>
        <li>140</li>
        <li>141</li>
        <li>142</li>
        <li>143</li>
        <li>144</li>
        <li>145</li>
        <li>146</li>
        <li>147</li>
        <li>148</li>
        <li>149</li>
        <li>150</li>
      </ul>
    </div>
</template>

<script>

  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import navbar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'

  import {getHomeMultidata,getHomeGoods} from "network/home";

  export default {
    name: "home",
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      navbar,
      TabControl,
      GoodsList
    },
    data(){
      return{
        //result:null,
        type:'pop',
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        }
      }
    },
    created() {
      this.getHomeMultidata();
          // getHomeMultidata().then(res =>{
          //   //console.log(res);
          //   //this.result = res;
          //   this.banners = res.data.banner.list;
          //   this.recommends = res.data.recommend.list;
          // })
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods:{
      // 以下监听事件相关方法
      itemclick(index){
        if (index === 0){
          this.type = 'pop'
        }else if(index ===1  ){
          this.type = 'new'
        }
        else {
          this.type = 'sell'
        }
        console.log(index);
      },

      // 以下网络请求相关方法
      getHomeMultidata(){
        getHomeMultidata().then(res =>{
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res =>{
          this.goods[type].list.push(...res.data.list);
           this.page = this.goods[type].page += 1;

        })
      }
    },
    computed:{
      showgoods(){
        return this.goods[this.type].list
      }
    },

  }
</script>

<style scoped>
  #home{
    margin-top: 44px;
  }
  .home-nav{
    background-color: #fedbff;
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>
