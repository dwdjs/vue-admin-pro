<template>
  <div class="form-panel">
    <template v-for="item in list">
      <div :key="item.id">{{ item.type + item.title }}</div>
      <!-- <component :is="item.type" :key="item.id" /> -->
    </template>
  </div>
</template>

<script>
export default {
  name: 'FormRender',
  props: {
    propsSchema: {
      type: Object,
      required: true,
    },
  },

  computed: {
    list() {
      const { propsSchema } = this.$props
      console.log(propsSchema)

      const { properties } = propsSchema
      return Object.keys(properties).map(name => ({
        name,
        schema: properties[name],
      }))
    },
  },
}
</script>

<style lang="stylus" scoped>

</style>
