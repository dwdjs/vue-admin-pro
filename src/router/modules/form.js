// 表单生成器

import { lazyLoad } from '../utils'
import Layout from '@/layout'

export default [
  {
    path: '/form',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Form',
    meta: {
      title: '表单设计',
      icon: 'form',
    },
    children: [
      {
        path: 'index',
        component: lazyLoad('form/index'),
        name: 'form',
        meta: { title: '表单生成器' },
      },
      // {
      //     path: 'generator',
      //     name: '表单生成器',
      //     component: lazyLoad('form/generator'),
      // },
    ],
  },
]
