<template>
  <el-container class="design-layout h100">
    <el-header class="design-header flex-middle">设计器</el-header>
    <el-main class="design-main">
      <el-container class="design-container h100">
        <el-aside class="design-left">
          <d-widget
            :widget="widget"
          />
        </el-aside>
        <el-main class="design-center">main</el-main>
        <el-aside class="design-right">
          <d-property
            :schema="schema"
          />
        </el-aside>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
// 设计器
// 各区域:
//   header
//   侧边栏 -> 组件列表 页面管理
//   主编辑区 -> 导入JSON 生成JSON 生成代码 预览 重置 保存 + 区
//   属性编辑区 -> 属性 脚本
import schema from './schema'
import DWidget from './components/widget'
import DProperty from './components/property'

// function humanSchema(schema) {
//   return Object.entries(schema).map((a, b) => {
//     return
//   })
// }

export default {
  components: {
    DWidget,
    DProperty,
  },
  data() {
    return {
      widget: schema.propsSchema,
      schema: {},
    }
  },
}
</script>

<style lang="stylus" scoped>
.design-header {
  background-color: #1278f6;
  color: #fff;
}

.design-main {
  padding: 0;
  height: calc(100% - 60px);
}

.design-left {
  margin: 0;
  width: 250px;
  padding: 8px 0 8px 10px;
}

.design-right {
  margin: 0;
  padding: 0;
  width: 300px;
  border-left: 1px solid #ccc;
  background: none;
}
</style>
