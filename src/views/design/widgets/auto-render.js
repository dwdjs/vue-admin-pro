
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

// 如果是容器, 则变量属性
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

  },

  methods: {
    getWidget(schema) {
      const { widget } = schema
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

    let node = null

    if (['object', 'array'].includes(schema.type)) {
      const temp = schema.properties
      const nodes = Object.keys(temp).map(key => {
        return (
          <auto-render schema={temp[key]} />
        )
      })

      return (
        <div class="container map-field">
          {nodes}
        </div>
      )
    } else {
      node = h(this.getWidget(schema), { props: { schema } })
    }

    return (
      <div class="auto-field">
        <div>{schema.title}</div>
        <div class="field-item">{node}</div>
      </div>
    )
  },
}
