<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" class="tab-control-item"
         :class="{active:currentIndex===index}" @click="tabclick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      tabclick(index) {
        this.currentIndex = index;
        this.$emit('itemclick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fbf9f9;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: #cc1342;
  }

  .active span {
    border-bottom: 3px solid #2813cc;
  }
</style>
