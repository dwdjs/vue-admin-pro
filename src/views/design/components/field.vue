<template>
  <div @click.stop="handleSelectWidget" :class="{active: item.key === selectWidget.key}" class="widget-field">
    <auto-render :vname="item.widget" :schema="item" />
    <div class="actions">
      <el-tooltip effect="dark" content="复制" placement="bottom">
        <a @click.stop="handleWidgetClone" class="d-action-copy"><icon-svg icon-class="copy" /></a>
      </el-tooltip>
      <el-tooltip effect="dark" content="删除" placement="bottom">
        <a @click.stop="handleWidgetDelete" class="d-action-trash"><icon-svg icon-class="trash" /></a>
      </el-tooltip>
    </div>
    <div class="position-actions">
      <el-tooltip effect="dark" content="向上移动" placement="right">
        <a class="d-position"><icon-svg icon-class="up-bold" /></a>
      </el-tooltip>
      <el-tooltip effect="dark" content="向下移动" placement="right">
        <a class="d-position"><icon-svg icon-class="down-bold" /></a>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { widgets } from '../widgets'
import AutoRender from '../widgets/auto-render'
// <component :is="getWidget" :item="item" />
// <auto-render :vname="item.widget" :schema="item" />

export default {
  components: {
    // ...widgets,
    AutoRender,
  },
  props: {
    widgets: {
      type: Object,
      required: true,
    },
    schema: {
      type: Array,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapState({
      selectWidget: state => state.design.selectWidget,
    }),
  },

  methods: {
    handleSelectWidget(e) {
      console.log('select')
      this.$store.dispatch('design/setSelectWidget', this.item)
      this.$store.dispatch('design/setConfigTab', 'property')
    },
    handleWidgetClone() {
      console.log('clone')
    },
    handleWidgetDelete() {
      console.log('delete')
    },
  },
}
</script>

<style lang="stylus">
.widget-field {
  position: relative;
  margin-bottom: -1px;
  padding: 5px 30px;
  min-height: 80px;
  cursor: pointer;
  border: 1px dashed transparent;
  // border-color:

  &:hover {
    background: #e0f2ff;
  }

  &::after {
    fullAbsolute()
  }

  &.ghost,
  &.active {
    z-index: 1;
    border-color: #4db8ff;
  }

  &.active {
    background: #e0f2ff;

    .actions,
    .position-actions {
      display: flex;
    }

    &::after {
      cursor: move;
    }
  }

  &.ghost {
    overflow: hidden;
  //   margin: 1px;
  //   padding: 0;
  //   min-height: auto;
  //   height: 3px;
  //   overflow: hidden;
  //   border: none;
  //   border-radius: 3px;
  //   opacity: 0.5;

    &::after {
      z-index: 2;
      background: #fff;
    }
  }
}
</style>
<style lang="stylus" scoped>
.actions {
  display: none;
  position: absolute;
  z-index: 2;
  right: 30px;
  bottom: 0;
  transform: translateY(50%);
}

.d-action-copy,
.d-action-trash {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  width: 24px;
  height: 24px;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0,0,0,0.2);
}

.d-action-copy {
  color: #71b300;

  &:hover {
    color: #fff;
    background-color: #71b300;
  }
}
.d-action-trash {
  color: #ff3824;

  &:hover {
    color: #fff;
    background-color: #ff3824;
  }
}

.position-actions {
  display: none;
  position: absolute;
  z-index: 2;
  right: 8px;
  top: 50%;
  // display: flex;
  flex-direction: column;
  transform: translateY(-50%);
}

.d-position {
  width: 16px;
  height: 24px;
  line-height: 24px;
  border-radius: 2px;
  box-shadow: 0 0 2px rgba(0,0,0,0.2);
  color: #c3c9d0;
  background-color: #fff;
  font-size: 14px;
  text-align: center;

  &+& {
    margin-top: 8px;
  }

  &:hover {
    color: #5584ff;
  }
}
</style>
