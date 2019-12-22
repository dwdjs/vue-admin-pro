export default {
  propsSchema: {
    type: 'object',
    properties: {
      base: {
        title: '通用字段',
        type: 'object',
        properties: {
          text: {
            title: '单行文本',
            icon: '',
          },
          textarea: {
            title: '多行文本',
            icon: '',
          },
          number: {
            title: '数字',
            icon: '',
          },
          inputNumber: {
            title: '计数器',
            icon: '',
          },
          uploadImage: {
            title: '上传图片',
            icon: '',
          },
          uploadFile: {
            title: '上传文件',
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
          // imageRadio: {
          //   title: '图片单选',
          //   icon: '',
          // },
          // imageCheckbox: {
          //   title: '图片多选',
          //   icon: '',
          // },
          timePicker: {
            title: '时间',
            icon: '',
          },
          datePicker: {
            title: '日期',
            icon: '',
          },
          dateTimePicker: {
            title: '日期&时间',
            icon: '',
          },
          switch: {
            title: '开关',
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
          rate: {
            title: '评分',
            icon: '',
          },
          slider: {
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
            title: '姓名',
            icon: '',
          },
          password: {
            title: '密码',
            icon: '',
          },
          mobile: {
            title: '手机',
            icon: '',
          },
          email: {
            title: '邮箱',
            icon: '',
          },
          phone: {
            title: '电话',
            icon: '',
          },
          address: {
            title: '地址',
            icon: '',
          },
          link: {
            title: '网址',
            icon: '',
          },
          desc: {
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
          pageBreak: {
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
