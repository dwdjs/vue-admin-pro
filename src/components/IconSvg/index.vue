
<script>
// doc: https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage
import { isExternal } from '@/utils/validate'

export default {
  name: 'IconSvg',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
  },
  computed: {
    isExternal() {
      return isExternal(this.iconClass)
    },
    iconName() {
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      return [
        'icon-svg',
        // `icon-svg__${this.name}`,
        this.className, // && /\S/.test(this.className) ? `${this.className}` : '',
      ]
    },
    styleExternalIcon() {
      return {
        mask: `url(${this.iconClass}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.iconClass}) no-repeat 50% 50%`,
      }
    },
  },

  render(h) {
    let iconNode
    const { styleExternalIcon, svgClass, iconName, width, height } = this

    // https://github.com/vuejs/babel-plugin-transform-vue-jsx
    if (this.isExternal) {
      iconNode = (<div
        style={styleExternalIcon}
        on={this.$listeners}
        class="svg-external-icon svg-icon"
      />)
    } else {
      iconNode = (
        <svg
          class={svgClass}
          // title={iconType}
          width={width}
          height={height}
          ariaHidden="true"
          on={this.$listeners}
        >
          <use xlinkHref={iconName} />
        </svg>
      )
    }

    return iconNode
  },
}
</script>

<style scoped>
.icon-svg {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
