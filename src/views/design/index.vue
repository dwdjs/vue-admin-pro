<template>
  <el-container class="design-layout h100">
    <el-header class="design-header flex-middle" height="60px">设计器</el-header>
    <el-main class="design-main">
      <el-container class="design-container h100">
        <el-aside class="design-activity flex-items-v" width="50px" direction="vertical">
          <div class="activity-item widget">组件库</div>
          <div class="activity-item tree">组件树</div>
          <div class="activity-item schema">Schema</div>
        </el-aside>
        <el-aside class="design-left" width="250px">
          <element :is="`d-${activity}`" :schema="widgetSchema" />
        </el-aside>
        <el-container class="design-center">
          <el-header class="center-bar" height="40px" direction="vertical">
            <el-button @click="handleReset" type="text" class="btn">重置</el-button>
            <el-button @click="handlePreview" type="text" class="btn">预览</el-button>
            <el-button @click="handleSave" type="text" class="btn">保存</el-button>
          </el-header>
          <el-main class="canvas-container">
            画布
          </el-main>
        </el-container>
        <el-aside class="design-right" width="290px">
          <el-container class="h100">
            <el-header class="p-tabs" height="40px">
              <div :class="{active: tabRightPanel=='property'}" @click="tabRightPanel='property'" class="p-tab">属性</div>
              <div :class="{active: tabRightPanel=='layout'}" @click="tabRightPanel='layout'" class="p-tab">布局</div>
              <div :class="{active: tabRightPanel=='script'}" @click="tabRightPanel='script'" class="p-tab">脚本</div>
              <div :class="{active: tabRightPanel=='data'}" @click="tabRightPanel='data'" class="p-tab">数据</div>
            </el-header>
            <el-main class="p-tabs-items">
              <d-property
                :property="property"
              />
            </el-main>
          </el-container>
        </el-aside>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
// 活动栏
// 侧边栏
// 编辑栏
// 面板栏
// 状态栏
import schema from './schema'
import DWidget from './components/widget'
import DProperty from './components/property'

// function humanSchema(schema) {
//   return Object.entries(schema).map((a, b) => {
//     return
//   })
// }

/* eslint vue/no-unused-components: 0 */
export default {
  components: {
    DWidget,
    DProperty,
  },
  data() {
    return {
      widgetSchema: schema.propsSchema,
      page: [],
      activity: 'widget',
      property: {},
      script: {},
      layout: {},
      data: {},
      // tabAside: 'widget',
      tabRightPanel: 'property',
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
  background-color: #2176f5;
  color: #fff;
}

.design-main {
  padding: 0;
  height: calc(100% - 60px);
}

.design-activity {
  margin: 0;
  padding: 0;
  border-radius: 0;
  overflow: hidden;
  background: #3482f7;
  border-right: 1px solid #999;
}

.activity-item {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  color: #fff;
  // background: ;
  border-bottom: 1px solid #aaa;
}

.design-left,
.design-right {
  margin: 0;
  padding: 0;
  background: none;
}

.design-left {
  padding: 8px 0 12px 12px;
  box-shadow: 2px 2px 4px 0 rgba(34,34,34,0.1);
}

.design-right {
  box-shadow: -1px 0 0 #ccc;
  font-size: 14px;
}

.center-bar {
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #ccc;

  .btn {
    padding: 0 8px;
  }
}

.p-tabs {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  height: 40px;

  cursor: pointer;
}

.p-tab {
  border-bottom: 2px solid #E4E7ED;
  width: 50%;
  text-align: center;

  &.active {
    border-color: #409EFF;
    color: #409EFF;
  }
}

.p-tabs-items {
  padding: 8px 0 12px 12px;
}

// .p-tabs[fixed] {
//   background: #fff;
//   >>> .el-tabs__nav-wrap {
//     width: 250px;
//   }
// }

// .p-item {
//   padding: 0 8px;
// }
</style>
