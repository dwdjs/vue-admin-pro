// 系统管理

import { lazyLoad } from '../utils'
import Layout from '@/layout'

export default [
  {
    path: '/sys',
    component: Layout,
    redirect: 'noRedirect',
    name: 'system',
    meta: {
      title: '系统管理',
      icon: 'system1',
    },
    children: [
      {
        path: 'account',
        component: lazyLoad('modules/sys/account'),
        name: 'account',
        meta: {
          title: '管理员列表',
          icon: 'admin',
        },
      },
      {
        path: 'role',
        component: lazyLoad('modules/sys/role'),
        name: 'role',
        meta: {
          title: '角色管理',
          icon: 'role',
        },
      },
      {
        path: 'menu',
        component: lazyLoad('modules/sys/menu'),
        name: 'menu',
        meta: {
          title: '菜单管理',
          icon: 'menu',
        },
      },
      {
        path: 'sql',
        component: lazyLoad('modules/sys/sql'),
        name: 'sql',
        meta: {
          title: 'SQL监控',
          icon: 'sql',
        },
      },
      {
        path: 'job',
        component: lazyLoad('modules/sys/job'),
        name: 'job',
        meta: {
          title: '定时任务',
          icon: 'task',
        },
      },
      {
        path: 'dict',
        component: lazyLoad('modules/sys/dict'),
        name: 'dict',
        meta: {
          title: '数据字典',
          icon: 'dict',
        },
      },
      {
        path: 'log',
        component: lazyLoad('modules/sys/log'),
        name: 'log',
        meta: {
          title: '系统日志',
          icon: 'log',
        },
      },
      // {
      //   path: 'base',
      //   component: lazyLoad('demo/doing'),
      //   name: 'base',
      //   meta: {
      //     title: 'system',
      //     icon: 'setting',
      //   },
      // },
    ],
  },
]
