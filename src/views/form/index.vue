<template>
  <div class="app-container">
    <h2>form 表单生成器</h2>
    <form-render
      :propsSchema="propsSchema"
      :formData="formData"
    />
  </div>
</template>

<script>
import FormRender from '@/components/FormRender/form-render'
import SCHEMA from './json/simplest.json'

export default {
  name: 'PageForm',
  components: {
    FormRender,
  },
  data() {
    return {
      propsSchema: SCHEMA.propsSchema,
      formData: SCHEMA.formData || {},
    }
  },
}
</script>

<style>

</style>

