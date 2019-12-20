<template>
  <el-container class="design-property">
    属性编辑
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
