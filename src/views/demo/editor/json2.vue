<template>
  <div class="app-container">
    <div class="header-container">
      <el-button @click="handleSave" class="filter-item" type="primary">保存</el-button>
      <el-button @click="saveDocument" class="filter-item">另存为JSON</el-button>
      <el-upload
        ref="document"
        :on-preview="handlePreview"
        :on-change="handleChange"
        :file-list="fileList"
        :auto-upload="false"
        accept="application/json"
        list-type=""
        action="###"
        class="upload-btn ib filter-item"
      >
        <el-button>加载JSON</el-button>
      </el-upload>
      <el-select v-model="schemaIndex" @change="changeSchema" placeholder="Schema 校验">
        <el-option-group
          v-for="group in schemaArr"
          :key="group.label"
          :label="group.label"
        >
          <el-option
            v-for="item in group.list"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-option-group>
      </el-select>
      <!-- <el-button @click="schemaValidate" class="filter-item">Schema 校验</el-button> -->
    </div>
    <vue-json-editor
      v-model="json"
      :options="options"
      :plus="false"
      @error="onError"
      height="500px"
    />
  </div>
</template>

<script>

import VueJsonEditor from '@/components/JsonEditor2'
import { saveAs } from 'file-saver'

// 支持支持 保存, 另存JSON, 加载 JSON, schema 校验, 模板, 自动补全

const json = {
  firstName: 'John',
  // lastName: 'Doe',
  gender: null,
  age: '28',
  availableToHire: true,
  job: {
    company: 'freelance',
    role: 'developer',
    salary: 100,
  },
}

const schema = {
  'title': 'Employee',
  'description': 'Object containing employee details',
  'type': 'object',
  'properties': {
    'firstName': {
      'title': 'First Name',
      'description': 'The given name.',
      'examples': [
        'John',
      ],
      'type': 'string',
    },
    'lastName': {
      'title': 'Last Name',
      'description': 'The family name.',
      'examples': [
        'Smith',
      ],
      'type': 'string',
    },
    'gender': {
      'title': 'Gender',
      'enum': ['male', 'female'],
    },
    'availableToHire': {
      'type': 'boolean',
      'default': false,
    },
    'age': {
      'description': 'Age in years',
      'type': 'integer',
      'minimum': 0,
      'examples': [28, 32],
    },
    'job': {
      '$ref': 'job',
    },
  },
  'required': ['firstName', 'lastName'],
}

const job = {
  'title': 'Job description',
  'type': 'object',
  'required': ['address'],
  'properties': {
    'company': {
      'type': 'string',
      'examples': [
        'ACME',
        'Dexter Industries',
      ],
    },
    'role': {
      'description': 'Job title.',
      'type': 'string',
      'examples': [
        'Human Resources Coordinator',
        'Software Developer',
      ],
      'default': 'Software Developer',
    },
    'address': {
      'type': 'string',
    },
    'salary': {
      'type': 'number',
      'minimum': 120,
      'examples': [100, 110, 120],
    },
  },
}

const schemas = [
  {
    schema: {},
    schemaRefs: {},
  },
  {
    schema,
    schemaRefs: { job },
  },
]

// json 作为数据对象来使用时, 不应该随意改变排序(或者 js 不应该信任 json 的排序)
export default {
  name: 'JsonEditor',
  components: {
    VueJsonEditor,
  },
  data() {
    return {
      fileList: [],
      schemaIndex: null,
      schemaArr: [{
        label: '规则组 1',
        list: [{
          label: '不使用',
          value: 0,
        }, {
          label: '规则 1',
          value: 1,
        }],
      }],
      options: {
        mode: 'code', // code tree
        statusBar: true,
        navigationBar: true,
        schema: {},
        schemaRefs: {},
      },
      json: {},
    }
  },
  created() {
    this.json = json
  },
  methods: {
    onError() {
      console.log('error')
    },
    handleSave() {
    },
    loadDocument(files) {
      // Load a JSON document
      this.jsReadFiles(files, result => {
        this.json = JSON.parse(result)
      })
    },
    jsReadFiles(files, cb) {
      if (files.length) {
        const file = files[0].raw
        const reader = new FileReader() // new一个FileReader实例
        if (/(text|json)+/.test(file.type)) { // 判断文件类型，是不是text类型
          reader.onload = function () {
            cb(this.result)
          }
          reader.readAsText(file)
        } else if(/image+/.test(file.type)) {//判断文件是不是imgage类型
          reader.onload = function () {
            cb(this.result)
          }
          reader.readAsDataURL(file)
        }
      }
    },
    // Save a JSON document
    saveDocument() {
      // Save as
      // Save Dialog
      // let fname = window.prompt('Save as...')
      this.getFileName(fname => {
        const text = JSON.stringify(this.json, null, 2)

        const blob = new Blob([text], {type: 'application/json;charset=utf-8'})
        saveAs(blob, fname)
      })
    },

    getFileName(cb) {
      this.$prompt('请输入文件名', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value: fname }) => {
        // Check json extension in file name
        if (fname.indexOf('.') === -1) {
          fname = fname + '.json'
        } else {
          if (fname.split('.').pop().toLowerCase() === 'json') {
            // Nothing to do
          } else {
            fname = fname.split('.')[0] + '.json'
          }
        }
        cb(fname)
      })
    },
    handleChange(files, fileList) {
      this.fileList = fileList.slice()
      this.loadDocument(this.fileList)

      // clear
      // this.$refs.document.clearFiles()
      this.fileList = []
    },
    changeSchema() {
      this.json = json

      const current = schemas[this.schemaIndex]
      this.options.schema = current.schema || {}
      this.options.schemaRefs = current.schemaRefs || {}
    },
    // changeOptions() {

    //   this.options.schema = schema
    //   this.options.schemaRefs = { job }

    //   // this.json = json
    // },
  },
}
</script>

<style lang="stylus" scoped>
>>> .jsoneditor-poweredBy {
  display: none;
}

.header-container {
  margin-bottom: 20px;
}

.upload-btn {
  margin: 0 10px;

  >>> .el-upload-list {
    display: none;
  }
}
</style>
