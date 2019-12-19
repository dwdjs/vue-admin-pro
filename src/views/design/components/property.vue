<template>
  <el-container class="design-property">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="p-tabs" stretch>
      <el-tab-pane class="p-item" label="属性" name="first">属性</el-tab-pane>
      <el-tab-pane class="p-item" label="脚本" name="second">脚本</el-tab-pane>
    </el-tabs>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'second',
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
  },
}
</script>

<style lang="stylus" scoped>
.p-tabs {
  width: 100%;
}
</style>
