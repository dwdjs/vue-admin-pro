<template>
  <div class="app-container">
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
// http://jsoneditoronline.org/
// https://github.com/josdejong/jsoneditor
// https://github.com/yansenlei/VJsoneditor
import VueJsonEditor from '@/components/JsonEditor2'

// json 作为数据对象来使用时, 不应该随意改变排序(或者 js 不应该信任 json 的排序)
export default {
  name: 'JsonEditor',
  components: {
    VueJsonEditor,
  },
  data() {
    return {
      options: {
        mode: 'tree', // code view tree
        statusBar: true,
        navigationBar: true,
      },
      json: {
        'array': [1, 2, 3],
        'boolean': true,
        'color': '#82b92c',
        'null': null,
        'number': 123,
        'object': {'a': 'b', 'c': 'd'},
        'string': 'Hello World',
      },
    }
  },
  methods: {
    onError() {
      console.log('error')
    },
  },
}
</script>

<style lang="stylus" scoped>
>>> .jsoneditor-poweredBy {
  display: none;
}
</style>
