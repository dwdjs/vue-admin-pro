<template>
  <div class="app-container">
    <v-jsoneditor
      v-model="json"
      :options="options"
      :plus="false"
      @error="onError"
      height="400px"
    />
  </div>
</template>

<script>
import VJsoneditor from 'v-jsoneditor'

export default {
  name: 'JsonEditor2',
  components: {
    VJsoneditor,
  },
  data() {
    return {
      json: {
        'hello': 'vue',
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
