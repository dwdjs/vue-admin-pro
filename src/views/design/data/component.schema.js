// 组件库, 如 form-render by element-ui
export const widgets = {

}

// 映射关系
export const mapping = {

}

// 配置项: 组件 区块 模板
// 可选配置, 默认值列表
export const options = {
  // 通用字段
  // string
  input: {
    title: '单行文本',
    description: '',
    type: 'string',
    widget: 'input',
    default: '',
    options: {
      style: {
        width: '50%',
      },
      // type: '',
      placeholder: '只读',
      clearable: false,
      disabled: false,
      // showPassword: false,
    },
  },
  // string:textarea
  textarea: {
    title: '',
    options: {
      showWordLimit: false,
    },
  },
  // [number, integer]
  number: {},
  // [number, integer]
  inputNumber: {},
  // string
  uploadImage: {},
  // string
  uploadFile: {},
  // string
  radio: {},
  // string
  checkbox: {},
  imageRadio: {},
  imageCheckbox: {},
  // [string, array]
  time: {},
  // [string, array]
  date: {},
  dateTime: {},
  // boolean
  switch: {},
  // [string, array]
  select: {},
  cascader: {},
  tree: {},
  color: {},
  richtext: {},
  editor: {},
  rate: {},
  slider: {},
  // 联系人字段
  username: {},
  password: {},
  mobile: {},
  email: {},
  phone: {},
  address: {},
  link: {},
  desc: {},
  // 布局组件
  layout: {},
  container: {},
  tabs: {},
  divider: {},
  pageBreak: {},
}

// 配置数据
export const schema = {

}
