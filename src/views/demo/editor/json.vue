<template>
  <div class="components-container">
    <aside>Json-Editor is base on <a rel="noopener noreferrer" href="https://github.com/codemirror/CodeMirror" target="_blank">CodeMirrorr</a>. Lint
      base on <a
        rel="noopener noreferrer"
        href="https://github.com/codemirror/CodeMirror/blob/master/addon/lint/json-lint.js"
        target="_blank"
      >json-lint</a>.</aside>
    <div class="header-container">
      <el-button @click="handleSave" class="filter-item" type="primary">保存</el-button>
    </div>
    <div class="editor-container">
      <json-editor ref="jsonEditor" v-model="json" />
    </div>
  </div>
</template>

<script>
import JsonEditor from '@/components/JsonEditor'

const jsonData = '[{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"CORN"}],"name":""},{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"XAGUSD"},{"market_type":"forexdata","symbol":"AUTD"},{"market_type":"forexdata","symbol":"AGTD"}],"name":"贵金属"},{"items":[{"market_type":"forexdata","symbol":"CORN"},{"market_type":"forexdata","symbol":"WHEAT"},{"market_type":"forexdata","symbol":"SOYBEAN"},{"market_type":"forexdata","symbol":"SUGAR"}],"name":"农产品"},{"items":[{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"USOIL"},{"market_type":"forexdata","symbol":"NGAS"}],"name":"能源化工"}]'

export default {
  name: 'JsonEditorDemo',
  components: { JsonEditor },
  data() {
    return {
      json: JSON.parse(jsonData),
    }
  },
  methods: {
    handleSave() {
    },
  },
}
</script>

<style scoped>
.editor-container {
  position: relative;
  height: 100%;
}
</style>

