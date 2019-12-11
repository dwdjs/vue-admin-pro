<template>
  <div
    :class="{'max-box':max,'min-box':!max}"
    :style="getHeight"
    class="jsoneditor-container"
  >
    <div v-if="showMode" class="mode">
      <el-radio-group v-model="options.mode" @change="changeMode" size="mini">
        <template v-for="item in modes">
          <el-radio-button :label="item" :key="item" />
        </template>
      </el-radio-group>
    </div>
    <div ref="jsoneditor" class="jsoneditor-box" />
    <button
      @click="max = !max"
      v-if="options.mode == 'code' && plus"
      type="button"
      class="max-btn"
      size="mini"
    />
  </div>
</template>

<script>
// http://jsoneditoronline.org/
// https://github.com/josdejong/jsoneditor
// https://github.com/yansenlei/VJsoneditor
import JSONEditor from 'jsoneditor/dist/jsoneditor.min.js'
import 'jsoneditor/dist/jsoneditor.min.css'

export default {
  name: 'VueJsonEditor',
  data() {
    return {
      // allowed modes: ['code', 'form', 'text', 'tree', 'view', 'preview']
      modes: ['code', 'tree'],
      editor: null,
      style: {},
      max: false,
      internalChange: false,
    }
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          mode: 'code',
        }
      },
    },
    showMode: Boolean,
    value: [Object, Array, Number, String, Boolean],
    height: {
      type: String,
    },
    plus: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    changeMode(mode) {
      this.editor.setMode(mode)
    },
    onChange() {
      let error = null
      let json = {}
      try {
        json = this.editor.get()
      } catch (err) {
        error = err
      }
      if (error) {
        this.$emit('error', error)
      } else {
        if (this.editor) {
          this.internalChange = true
          this.$emit('input', json)
          this.$nextTick(() => {
            this.internalChange = false
          })
        }
      }
    },
    initView() {
      if (!this.editor) {
        const container = this.$refs.jsoneditor
        const options = {
          onChange: this.onChange,
          navigationBar: false,
          statusBar: true,
          ...this.options,
        }
        this.editor = new JSONEditor(container, options)
      }
      this.editor.set(this.value || {})
      this.editor.setSchema(this.options.schema || {}, this.options.schemaRefs || {})
    },
    destroyView() {
      if (this.editor) {
        this.editor.destroy()
        this.editor = null
      }
    },
  },
  watch: {
    value(value) {
      if (this.editor && value && !this.internalChange) {
        this.editor.set(value)
      }
    },
    max(value) {
      this.$nextTick(() => {
        this.initView()
      })
    },
    ['options.schema'](val, oldVal) {
      console.log(121212)
      this.$nextTick(() => {
        this.initView()
      })
    },
  },
  mounted() {
    this.initView()
  },
  beforeDestroy() {
    this.destroyView()
  },
  computed: {
    getHeight() {
      if (this.height && !this.max) {
        return {
          height: this.height,
        }
      }
      return {}
    },
  },
}
</script>

<style lang="stylus" scoped>
.jsoneditor-container {
  position: relative;

  .mode {
    position: absolute;
    top: 3px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
}

.jsoneditor-container.max-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
}

.jsoneditor-container.min-box {
  position: relative;
  min-width: 300px;
  width: 100%;
}

.jsoneditor-box {
  height: 100%;
}

// .jsoneditor-container:hover .max-btn {
//   display: block;
// }

.max-btn {
  display: none;
  position: absolute;
  top: 7px;
  right: 110px;
  color: #fff;
  width: 24px;
  height: 24px;
  /* background: rgba(0, 0, 0, 0) url(./assets/plus.svg) no-repeat; */
  background-position: 3px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 3px;

  &:hover {
    border: 1px solid #d7e6fe;
  }
}
</style>
