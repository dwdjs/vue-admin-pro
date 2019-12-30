
import { widgets, mapping } from './index'

const WidgetDefault = {
  props: {
    vname: String,
  },
  render(h) {
    return (
      <div style="display: none;">此组件不存在 {this.vname}</div>
    )
  },
}

export default {
  name: 'AutoRender',
  components: {
    WidgetDefault,
    ...widgets,
  },
  props: {
    vname: String,
    schema: {
      type: Object,
      required: true,
    },
    formData: Object,
  },

  computed: {
    getWidget() {
      const { schema: { widget } } = this
      if (['input', 'select'].includes(widget)) {
        return `d-${widget}`
      } else {
        return 'd-input'
      }
      // const widget = widgets[type]
      // if (widget && ['input', 'select'].includes(type)) {
      //   return widget
      // } else {
      //   return widgets['input']
      // }
    },
  },

  render(h) {
    const {
      vname,
      schema,
      formData = {},
    } = this.$props

    const node = h(this.getWidget, { props: { schema } })

    return (
      <div class="auto-field">
        <div>{schema.title}</div>
        <div class="field-item">{node}</div>
      </div>
    )
  },
}
