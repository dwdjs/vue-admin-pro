<template>
  <div class="app-container">
    form 表单生成器
    <vue-form />
  </div>
</template>

<script>
import VueForm from './form'
import SCHEMA from './data/1'

export default {
  name: 'PageForm',
  components: {
    VueForm,
  },
}
</script>

<style>

</style>
