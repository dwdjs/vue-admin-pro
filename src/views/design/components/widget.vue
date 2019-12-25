<template>
  <div class="design-widget">
    <template v-for="item in dragWidget">
      <div :key="item.typeKey" class="widget-group">
        <div class="widget-group-title">{{ item.title }}</div>
        <draggable
          v-bind="dragOptions"
          :list="item.children"
          :move="handleMove"
          :clone="cloneData"
          tag="div"
          class="widget-list flex-items"
        >
          <template v-for="it in item.children">
            <div :key="it.typeKey" class="widget-item">{{ it.title }}</div>
          </template>
        </draggable>
      </div>
    </template>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import { deepClone } from '@/utils'
import { schemaToList } from '../utils'
// import { widgets } from '../widgets'

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
      isDragging: false,
    }
  },

  computed: {
    dragWidget() {
      console.log(schemaToList(this.schema, 2))
      return schemaToList(this.schema, 2)
    },
    dragOptions() {
      return {
        // animation: 0,
        // disabled: !this.editable,
        group: {
          name: 'widget',
          pull: 'clone',
          put: false,
        },
        sort: false,
        ghostClass: 'ghost',
      }
    },
  },

  // render(h) {
  //   const { widget } = this.$props

  //   const nodes = Object.entries(widget.properties).map(([k, v]) => {
  //     const subNodes = Object.entries(v.properties).map(([a, b]) => {
  //       return (
  //         <div class="widget-item" key={a}>{b.title}</div>
  //       )
  //     })
  //     return (
  //       <div class="widget-group" key={k}>
  //         <div class="widget-group-title">{v.title}</div>
  //         <div class="widget-list flex-items">
  //           {subNodes}
  //         </div>
  //       </div>
  //     )
  //   })

  //   return (
  //     <div class="fr-widget">
  //       {nodes}
  //     </div>
  //   )
  // },

  methods: {
    cloneData(obj) {
      // const newObj = deepClone(obj)
      return obj // newObj
    },
    // handleMove({relatedContext, draggedContext}) {
    //   const relatedElement = relatedContext.element
    //   const draggedElement = draggedContext.element
    //   return (
    //     (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    //   )
    // },
    handlePreview() {},
    handleSave() {},
    handleLoadData() {},
  },
}
</script>

<style lang="stylus" scoped>
.design-widget {
  .widget-item {
    width: 46%;
    margin: 0 8px 8px 0;
    padding: 0 8px;
  }
}

.widget-group {
  font-size: 14px;
}

.widget-list {
  font-size: 12px;
}

.widget-item {
  display: flex;
  border: 1px solid #e4e7ed;
  cursor: move;
  user-select: none;

  &:hover {
    color: red;
    background: rgba(255, 255, 255, 1);
    border: 1px dashed red;
  }

  // &.ghost {
  //   opacity: 0.3;
  // }
}
</style>
