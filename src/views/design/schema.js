export default {
  propsSchema: {
    type: 'object',
    properties: {
      base: {
        title: '基础功能',
        type: 'object',
        properties: {
          input: {
            title: '单行文本',
            icon: '',
          },
          textarea: {
            title: '多行文本',
            icon: '',
          },
          password: {
            title: '密码',
            icon: '',
          },
          number: {
            title: '计数器',
            icon: '',
          },
          switch: {
            title: '开关',
            icon: '',
          },
          uploadImg: {
            title: '上传图片',
            icon: '',
          },
          uploadFile: {
            title: '上传图片',
            icon: '',
          },
          radio: {
            title: '单项选择',
            icon: '',
          },
          checkbox: {
            title: '多项选择',
            icon: '',
          },
          timePicker: {
            title: '时间选择器',
            icon: '',
          },
          datePicker: {
            title: '日期选择器',
            icon: '',
          },
          dateTimePicker: {
            title: '日期时间选择器',
            icon: '',
          },
          select: {
            title: '下拉选择器',
            icon: '',
          },
          cascader: {
            title: '级联选择器',
            icon: '',
          },
          treePicker: {
            title: '树形选择器',
            icon: '',
          },
          colorPicker: {
            title: '颜色选择器',
            icon: '',
          },
          richtext: {
            title: '富文本',
            icon: '',
          },
          editor: {
            title: '编辑器',
            icon: '',
          },
          timeline: {
            title: '时间线',
            icon: '',
          },
          rate: {
            title: '评分',
            icon: '',
          },
          slider: {
            title: '滑块',
            icon: '',
          },
        },
      },
      layout: {
        title: '布局字段',
        type: 'object',
        properties: {
          layout: {
            title: '栅格布局',
            icon: '',
          },
          tabs: {
            title: 'Tabs 标签',
            icon: '',
          },
          divider: {
            title: '分割线',
            icon: '',
          },
          steps: {
            title: '步骤条',
            icon: '',
          },
          page: {
            title: '分页器',
            icon: '',
          },
        },
      },
    },
  },
}
