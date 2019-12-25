<template>
  <div class="fr-field">
    <el-input v-model="item.value" :placeholder="item.placeholder" class="d-input" />
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
