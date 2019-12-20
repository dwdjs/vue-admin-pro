<template>
  <el-container class="design-layout h100">
    <el-header class="design-header flex-middle">设计器</el-header>
    <el-main class="design-main">
      <el-container class="design-container h100">
        <el-aside class="design-left" style="width: 250px;">
          <el-tabs
            v-model="tabAside"
            @tab-click="handleClick"
            class="p-tabs"
            stretch
            fixed
          >
            <el-tab-pane class="p-item" label="组件" name="widget">
              <d-widget
                :widget="widget"
              />
            </el-tab-pane>
            <el-tab-pane class="p-item" label="页面" name="page">
              页面
            </el-tab-pane>
          </el-tabs>
        </el-aside>
        <el-main class="design-center">main</el-main>
        <el-aside class="design-right" style="width: 300px;">
          <el-tabs
            v-model="tabProperty"
            @tab-click="handleClick"
            class="p-tabs"
            stretch
            fixed
          >
            <el-tab-pane class="p-item" label="属性" name="property">
              <d-property
                :schema="schema"
              />
            </el-tab-pane>
            <el-tab-pane class="p-item" label="脚本" name="script">
              脚本
            </el-tab-pane>
          </el-tabs>
        </el-aside>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
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
      tabAside: 'widget',
      tabProperty: 'script',
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

// $designAsideWidth = 250px;

.design-header {
  background-color: #1278f6;
  color: #fff;
}

.design-main {
  padding: 0;
  height: calc(100% - 60px);
}

.design-left,
.design-right {
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  background: none;
}

.design-left {
  box-shadow: 1px 0 0 #ccc;
}

.design-right {
  box-shadow: -1px 0 0 #ccc;
}

.p-tabs[fixed] {
  background: #fff;
  >>> .el-tabs__nav-wrap {
    width: 250px;
  }
}

.p-item {
  padding: 0 8px;
}
</style>
