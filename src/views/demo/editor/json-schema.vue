<template>
  <div class="app-container">
    <div class="header-container">
      <el-button @click="handleJsToJson" class="filter-item" type="primary">格式化 JSON</el-button>
      <el-button @click="handleJsonToSchema" class="filter-item" type="primary">生成 schema</el-button>
      <el-button @click="handleSchemaVerify" class="filter-item" type="primary">使用 schema 校验</el-button>
    </div>
    <div class="editor-container json2schema">
      <json-editor ref="jsonEditor" v-model="json" class="demo" />
      <json-editor ref="jsonSchemaEditor" v-model="jsonSchema" class="demo" />
    </div>
  </div>
</template>

<script>
import JsonEditor from '@/components/JsonEditor'
import { isEmptyObject } from '@dwdjs/utils'
import Convert from '@mind029/json2schema'

const json2Schema = new Convert()

const jsonData = '{"firstName":"John","gender":null,"age":"28","availableToHire":true,"job":{"company":"freelance","role":"developer","salary":100}}'

export default {
  name: 'JsonEditorDemo',
  components: {
    JsonEditor,
  },
  data() {
    return {
      json: JSON.parse(jsonData),
      jsonSchema: {},
    }
  },
  methods: {
    handleJsToJson() {
      const tempFn = new Function('return ' + this.json)
      this.json = JSON.parse(JSON.stringify(tempFn()))
      console.log(this.json)
    },
    handleJsonToSchema() {
      const temp = typeof this.json === 'string' ? JSON.parse(this.json) : this.json
      this.jsonSchema = json2Schema.format(temp)
      // if (isEmptyObject(this.jsonSchema)) {
      // }
    },
    handleSchemaVerify() {
      //
    },
  },
}
</script>

<style lang="stylus" scoped>
.filter-item {
  margin-bottom: 20px;
}

.json2schema {
  display: flex;
  flex: 1;

  .demo {
    width: 50%;
  }
}

</style>
