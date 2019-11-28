// 组织架构

import { lazyLoad } from '../utils'
import Layout from '@/layout'

export default [
  {
    path: '/org',
    component: Layout,
    redirect: 'noRedirect',
    name: 'org',
    meta: {
      title: '组织架构',
      icon: 'depart',
    },
    children: [
      {
        path: 'dept',
        component: lazyLoad('modules/org/dept'),
        name: 'dept',
        meta: {
          title: '部门管理',
          icon: 'org',
        },
      },
      {
        path: 'personnel',
        component: lazyLoad('modules/org/personnel'),
        name: 'personnel',
        meta: {
          title: '员工管理',
          icon: 'personnel',
        },
      },
      {
        path: 'post',
        component: lazyLoad('modules/org/post'),
        name: 'post',
        meta: {
          title: '岗位管理',
          icon: 'post',
        },
      },
      // 资源管理
      {
        path: 'res-cert',
        component: lazyLoad('modules/org/res-cert'),
        name: 'res-cert',
        meta: {
          title: '证书管理',
          icon: 'cert3',
        },
      },
    ],
  },
]
