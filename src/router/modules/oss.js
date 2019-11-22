// 文件管理

import { lazyLoad } from '../utils'
import Layout from '@/layout'

export default [
  {
    path: '/oss',
    component: Layout,
    redirect: 'noredirect',
    name: 'oss',
    meta: {
      title: '文件管理',
      icon: 'storage',
    },
    children: [
      {
        path: 'upload',
        component: lazyLoad('modules/oss/oss'),
        name: 'upload',
        meta: {
          title: '文件上传',
          icon: 'upload',
        },
      },
    ],
  },
]
