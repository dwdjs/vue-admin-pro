<template>
  <div @click.stop="handleSelectWidget" class="widget-field">
    <element :is="widgets[schema.type]" />
    <el-button @click.stop="handleWidgetClone">复制</el-button>
    <el-button @click.stop="handleWidgetDelete">删除</el-button>
  </div>
</template>

<script>
export default {
  props: {
    widgets: {
      type: Object,
      default: () => {},
    },
    schema: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    handleSelectWidget() {
      console.log('select')
    },
    handleWidgetClone() {
      console.log('clone')
    },
    handleWidgetDelete() {
      console.log('delete')
    },
  },
}
</script>
