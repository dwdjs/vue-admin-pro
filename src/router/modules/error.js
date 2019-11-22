// 错误页面

import { lazyLoad } from '../utils'
import Layout from '@/layout/Layout'

export default [
  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'error-pages',
    meta: {
      title: 'errorPages',
      icon: '404',
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'page-401',
        meta: { title: 'page-401', noCache: true },
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'page-404',
        meta: { title: 'page-404', noCache: true },
      },
    ],
  },
]
