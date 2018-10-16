export default function() {
  return {
    props: {
      label: {
        type: String,
        default: '',
      },
      size: {
        type: String,
        default: '',
      },
      tip: {
        type: String,
        default: '',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      clearable: {
        type: Boolean,
        default: true,
      },
      type: {
        type: String,
        default: '',
      },
      dic: {
        type: Array,
        default: () => [],
      },
      placeholder: {
        type: String,
        default: '',
      },
      min: {
        type: Number,
      },
      max: {
        type: Number,
      },
      border: {
        type: Boolean,
        default: false,
      },
      props: {
        type: Object,
        default() {
          return {
            id: 'id',
            label: 'label',
            value: 'value',
            children: 'children',
          };
        },
      },
    },
    data() {
      return {
        text: undefined,
      };
    },
    watch: {
      value() {
        this.text = this.value;
      },
    },
    computed: {
      valueKey() {
        return this.props.value || 'value';
      },
      labelKey() {
        return this.props.label || 'label';
      },
      childrenKey() {
        return this.props.children || 'children';
      },
      idKey() {
        return this.props.id || 'id';
      },
    },
    created() {
      this.text = this.value;
    },
  };
}
