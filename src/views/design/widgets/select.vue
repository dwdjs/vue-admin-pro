<template>
  <div class="fr-field">
    <el-select v-model="item.value" :placeholder="item.placeholder" class="d-input" />
    <el-select
      v-model="item.value"
      :placeholder="item.placeholder"
      @change="handleChange"
      class="d-select"
    >
      <el-option
        v-for="(v, key) in item.options"
        :key="key"
        :value="v"
        :label="item.showLabel ? item.label : v"
      />
    </el-select>
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

  methods: {
    handleChange() {},
  },
}
</script>
