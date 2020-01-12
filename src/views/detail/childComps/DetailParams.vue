<template>
  <div class="para-info" v-if="Object.keys(detailparams).length !==0">
    <table>
      <tr><td style="font-size: 20px;color: #1c1a14;text-wrap: none">{{detailparams.rule.key}}</td></tr>
      <tr v-for="(item,index) in detailparams.rule.tables[0]" :key="index">
        <td v-for="(info,i) in item " :key="i">{{info}}</td>
      </tr>
    </table>
    <div style="font-size:20px;">{{detailparams.rule.desc}}</div>
    <table>
      <tr><td style="font-size: 20px;color: #1c1a14">{{detailparams.info.key}}</td></tr>
      <tr v-for="(item,index) in detailparams.info.set" :key="index">
        <td class="info-param-key">{{item.key}}</td>
        <td class="param-value">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "DetailParams",
    props:{
      detailparams:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
.para-info{
  padding: 15px;
  font-size: 16px;
  border-bottom: 5px solid #cccccc;
}
.para-info table{
  width: 100%;
  border-collapse: collapse;
}
.para-info table tr{
  height: 40px;
}
.para-info table tr td{
border-bottom:2px rgba(110,120,119,.1) solid;
}
  .info-param-key{
    color: #1c1a14;
    width: 95px;
  }
.param-value {
  color: #eb4868
}

</style>
