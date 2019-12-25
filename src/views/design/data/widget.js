export const widgetSchema = {
  propsSchema: {
    type: 'object',
    properties: {
      base: {
        type: 'object',
        title: '通用字段',
        properties: {
          text: {
            type: 'input',
            title: '单行文本',
            icon: '',
          },
          textarea: {
            type: '',
            title: '多行文本',
            icon: '',
          },
          number: {
            type: '',
            title: '数字',
            icon: '',
          },
          inputNumber: {
            type: '',
            title: '计数器',
            icon: '',
          },
          uploadImage: {
            type: '',
            title: '上传图片',
            icon: '',
          },
          uploadFile: {
            type: '',
            title: '上传文件',
            icon: '',
          },
          radio: {
            type: '',
            title: '单项选择',
            icon: '',
          },
          checkbox: {
            type: '',
            title: '多项选择',
            icon: '',
          },
          // imageRadio: {
          //   title: '图片单选',
          //   icon: '',
          // },
          // imageCheckbox: {
          //   title: '图片多选',
          //   icon: '',
          // },
          timePicker: {
            type: '',
            title: '时间',
            icon: '',
          },
          datePicker: {
            type: '',
            title: '日期',
            icon: '',
          },
          dateTimePicker: {
            type: '',
            title: '日期&时间',
            icon: '',
          },
          switch: {
            type: '',
            title: '开关',
            icon: '',
          },
          select: {
            type: 'select',
            title: '下拉选择器',
            icon: '',
          },
          cascader: {
            type: '',
            title: '级联选择器',
            icon: '',
          },
          treePicker: {
            type: '',
            title: '树形选择器',
            icon: '',
          },
          colorPicker: {
            type: '',
            title: '颜色选择器',
            icon: '',
          },
          richtext: {
            type: '',
            title: '富文本',
            icon: '',
          },
          editor: {
            type: '',
            title: '编辑器',
            icon: '',
          },
          rate: {
            type: '',
            title: '评分',
            icon: '',
          },
          slider: {
            type: '',
            title: '滑块',
            icon: '',
          },
          // get: {
          //   title: '地理位置',
          //   icon: '',
          // },
        },
      },
      contact: {
        title: '联系信息字段',
        type: 'object',
        properties: {
          username: {
            type: '',
            title: '姓名',
            icon: '',
          },
          password: {
            type: '',
            title: '密码',
            icon: '',
          },
          mobile: {
            type: '',
            title: '手机',
            icon: '',
          },
          email: {
            type: '',
            title: '邮箱',
            icon: '',
          },
          phone: {
            type: '',
            title: '电话',
            icon: '',
          },
          address: {
            type: '',
            title: '地址',
            icon: '',
          },
          link: {
            type: '',
            title: '网址',
            icon: '',
          },
          desc: {
            type: '',
            title: '描述',
            icon: '',
          },
        },
      },
      layout: {
        title: '布局字段',
        type: 'object',
        properties: {
          layout: {
            type: '',
            title: '栅格布局',
            icon: '',
          },
          container: {
            type: '',
            title: '容器',
            icon: '',
          },
          tabs: {
            type: '',
            title: 'Tabs 标签',
            icon: '',
          },
          divider: {
            type: '',
            title: '分割线',
            icon: '',
          },
          pageBreak: {
            type: '',
            title: '分页',
            icon: '',
          },
          // timeline: {
          //   title: '时间线',
          //   icon: '',
          // },
          // steps: {
          //   title: '步骤条',
          //   icon: '',
          // },
        },
      },
    },
  },
}
