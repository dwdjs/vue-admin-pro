// 文件管理

import { lazyLoad } from '../utils'
import Layout from '@/layout'

export default [
  {
    path: '/oss',
    component: Layout,
    redirect: 'noRedirect',
    name: 'oss',
    meta: {
      title: '文件上传',
      icon: 'disk',
    },
    children: [
      {
        path: 'upload',
        component: lazyLoad('modules/oss/oss'),
        name: 'upload',
        meta: {
          title: '上传文件',
          icon: 'upload',
        },
      },
      {
        path: 'upload',
        component: lazyLoad('modules/oss/oss'),
        name: 'upload',
        meta: {
          title: '图床设置',
          icon: 'upload',
        },
      },
    ],
  },
]
