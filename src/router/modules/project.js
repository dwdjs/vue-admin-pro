// 项目管理

import { lazyLoad } from '../utils'
import Layout from '@/layout/Layout'


export default [
  {
    path: '/project',
    component: Layout,
    redirect: 'noredirect',
    name: 'project',
    meta: {
      title: 'project',
      icon: 'project',
    },
    children: [
      {
        path: 'proj',
        component: lazyLoad('modules/project/proj'),
        name: 'proj',
        meta: {
          title: '项目管理',
          icon: 'gc1',
        },
      },
      {
        path: 'detail',
        component: lazyLoad('modules/project/detail'),
        name: 'proj_detail',
        meta: {
          title: '详情',
          icon: 'gc1',
        },
      },
      // {
      //   path: 'tracking',
      //   component: lazyLoad('modules/project/tracking'),
      //   name: 'tracking',
      //   meta: {
      //     title: '项目跟踪',
      //     icon: 'gc1',
      //   },
      // },
      {
        path: 'task',
        component: lazyLoad('modules/project/task'),
        name: 'task',
        meta: {
          title: '任务管理',
          icon: 'tasks',
        },
      },
    ],
  },
]
