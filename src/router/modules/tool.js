// 工具箱
// 链接生成

import { lazyLoad } from '../utils'
import Layout from '@/layout'

export default [
  {
    path: '/tools',
    component: Layout,
    redirect: 'noRedirect',
    name: 'tools',
    meta: {
      title: '工具助手',
      icon: 'icon',
    },
    children: [
      {
        path: 'link',
        component: lazyLoad('modules/tools/link'),
        name: 'link',
        meta: {
          title: '链接生成工具',
          icon: 'gc1',
        },
      },
      // {
      //   path: 'link-old',
      //   component: lazyLoad('modules/tools/link-old'),
      //   name: 'link-old',
      //   meta: {
      //     title: '链接生成 old',
      //     icon: 'gc1',
      //   },
      // },
      {
        path: 'cdn',
        component: lazyLoad('modules/tools/cdn'),
        name: 'cdn',
        meta: {
          title: '图片CDN',
          icon: 'gc1',
        },
      },
    ],
  },
]
