// 错误页面

import { lazyLoad } from '../utils'
import Layout from '@/layout'

export default [
  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'error-pages',
    meta: {
      title: 'error-pages',
      icon: '404',
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: '401',
        meta: { title: 'page-401', noCache: true },
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: '404',
        meta: { title: 'page-404', noCache: true },
      },
    ],
  },
]
