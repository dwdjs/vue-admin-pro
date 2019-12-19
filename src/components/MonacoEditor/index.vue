<template>
  <div :style="styles" class="monaco_editor_container" />
</template>

<script>
// https://microsoft.github.io/monaco-editor
// https://github.com/FE-Mars/monaco-editor-vue

import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
// import { debounce } from 'lodash'

function noop() { }

export { monaco }

export default {
  name: 'MonacoEditor',
  props: {
    diffEditor: { type: Boolean, default: false },      // 是否使用diff模式
    width: {type: [String, Number], default: '100%'},
    height: {type: [String, Number], default: '100%'},
    original: String,       // 只有在diff模式下有效
    value: String,
    language: {type: String, default: 'javascript'},
    theme: {type: String, default: 'vs'},
    options: {type: Object, default() {return {}}},
    editorMounted: {type: Function, default: noop},
    editorBeforeMount: {type: Function, default: noop},
  },

  watch: {
    options: {
      deep: true,
      handler(options) {
        this.editor && this.editor.updateOptions(options)
      },
    },

    value() {
      this.editor && this.value !== this._getValue() && this._setValue(this.value)
    },

    language() {
      if(!this.editor) return
      if(this.diffEditor){      // diff模式下更新language
        const { original, modified } = this.editor.getModel()
        monaco.editor.setModelLanguage(original, this.language)
        monaco.editor.setModelLanguage(modified, this.language)
      }else
        monaco.editor.setModelLanguage(this.editor.getModel(), this.language)
    },

    theme() {
      this.editor && monaco.editor.setTheme(this.theme)
    },

    style() {
      this.editor && this.$nextTick(() => {
        this.editor.layout()
      })
    },
  },

  computed: {
    styles() {
      return {
        width: !/^\d+$/.test(this.width) ? this.width : `${this.width}px`,
        height: !/^\d+$/.test(this.height) ? this.height : `${this.height}px`,
      }
    },
  },

  created() {
    // this.debounceResize = debounce(this.autoLayout, 100)
  },

  mounted () {
    this.initMonaco()
    // window.addEventListener('resize', this.debounceResize)
  },

  beforeDestroy() {
    this.editor && this.editor.dispose()
    // window.removeEventListener('resize', this.debounceResize)
  },

  methods: {
    // autoLayout() {
    //   if (this.editor) this.editor.layout()
    // },
    initMonaco() {
      const { value, language, theme, options } = this
      Object.assign(options, this._editorBeforeMount())      // 编辑器初始化前
      this.editor = monaco.editor[this.diffEditor ? 'createDiffEditor' : 'create'](this.$el, {
        value: value,
        language: language,
        theme: theme,
        automaticLayout: true,
        ...options,
      })
      this.diffEditor && this._setModel(this.value, this.original)
      this._editorMounted(this.editor)      // 编辑器初始化后
    },

    _getEditor() {
      if(!this.editor) return null
      return this.diffEditor ? this.editor.modifiedEditor : this.editor
    },

    _setModel(value, original) {     // diff模式下设置model
      const { language } = this
      const originalModel = monaco.editor.createModel(original, language)
      const modifiedModel = monaco.editor.createModel(value, language)
      this.editor.setModel({
        original: originalModel,
        modified: modifiedModel,
      })
    },

    _setValue(value) {
      let editor = this._getEditor()
      if(editor) return editor.setValue(value)
    },

    _getValue() {
      let editor = this._getEditor()
      if(!editor) return ''
      return editor.getValue()
    },

    _editorBeforeMount() {
      const options = this.editorBeforeMount(monaco)
      return options || {}
    },

    _editorMounted(editor) {
      this.editorMounted(editor, monaco)
      if(this.diffEditor){
        editor.onDidUpdateDiff((event) => {
          const value = this._getValue()
          this._emitChange(value, event)
        })
      }else{
        editor.onDidChangeModelContent(event => {
          const value = this._getValue()
          this._emitChange(value, event)
        })
      }
    },

    _emitChange(value, event) {
      this.$emit('change', value, event)
      this.$emit('input', value)
    },
  },
}
</script>
