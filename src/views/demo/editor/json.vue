<template>
  <div class="app-container">
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

const jsonData = '{"firstName":"John","gender":null,"age":"28","availableToHire":true,"job":{"company":"freelance","role":"developer","salary":100}}'

export default {
  name: 'JsonEditorDemo',
  components: { JsonEditor },
  data() {
    return {
      json: JSON.parse(jsonData),
    }
  },
  created() {
    // this.$api.getJson(
    //   {},
    //   res => {
    //     this.json = res.result
    //   }
    // )
  },
  methods: {
    handleSave() {
      const { marked = [] } = this.$refs.jsonEditor.jsonEditor.state.lint || {}
      if (marked.length) {
        this.$message.error('JSON 格式有误, 请先处理')
        return
      }
      // this.$api.saveJson(
      //   {
      //     config: this.json,
      //   },
      //   res => {
      //     this.json = res.data
      //   }
      // )
    },
  },
}
</script>

<style scoped>
.header-container {
  margin-bottom: 20px;
}

.editor-container {
  position: relative;
  height: 100%;
}
</style>

