<template>
  <div class="design-canvas full-100">
    <draggable
      v-model="schema"
      @add="handleWidgetAdd"
      :group="{ name: 'widget', put: true }"
      :swapThreshold="0.7"
      :animation="100"
      tag="div"
      ghost-class="ghost"
      class="canvas-panel full-100"
    >
      <div class="empty-field full-100">
        <div class="empty-field-hint">请从左侧拖拽或点击添加字段</div>
        <div class="add-new-field-ontheleft" />
      </div>
    </draggable>
    <div class="ask-to-pay">
      <div class="power-logo">@dwdjs 提供技术支持</div>
      <div class="remove-ad">去logo</div>
    </div>
    <div class="ask-to-pay">
      <div class="power-logo">@dwdjs 表单底部广告</div>
      <div class="remove-ad">去广告</div>
    </div>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'

export default {
  components: {
    Draggable,
  },
  props: {
    schema: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {

    }
  },

  methods: {
    handleWidgetAdd(e) {
      console.log('add', e)
    },
  },
}
</script>

<style lang="stylus" scoped>
.design-canvas {}

.empty-field {
  border: 1px dashed #d0d0d0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ask-to-pay {
  display: none;
}
</style>
