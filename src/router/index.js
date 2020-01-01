import Vue from 'vue'
import Router from 'vue-router'
import env from '@/config/env'
import { isURL } from '@/utils/validate'
import {
  // storage,
  session,
} from '@dwdjs/utils'

Vue.use(Router)

import { lazyLoad } from './utils'
import Layout from '@/layout'

// modules
import demoRouter from './modules/demo'
import sysRouter from './modules/sys'
import ossRouter from './modules/oss'
import orgRouter from './modules/org'
import projectRouter from './modules/project'
import designRouter from './modules/design'
import errorRouter from './modules/error'
import toolRouter from './modules/tool'

const layouts = {
  layout: Layout,
  // sys: Layout,
  // org: Layout,
  // project: Layout,
  page: null,
}
function getLayout(key = '') {
  return layouts[key] || null
}

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  // {
  //   path: '/redirect',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: '/redirect/:path*',
  //       component: lazyLoad('demo/redirect/index'),
  //     },
  //   ],
  // },
  {
    path: '/login',
    component: lazyLoad('login/index'),
    hidden: true,
  },
  {
    path: '/auth-redirect',
    component: lazyLoad('login/auth-redirect'),
    hidden: true,
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: lazyLoad('dashboard/index'),
        name: 'Dashboard',
        meta: { title: '工作台', icon: 'dashboard', affix: true },
      },
    ],
  },
  {
    path: '/playground',
    component: lazyLoad('design/form'),
    name: 'playground',
    meta: {
      title: '试验场',
    },
  },
  ...demoRouter,
  ...designRouter,
  ...errorRouter,
]

// 通过路径配置过滤来动态加载路由
// 动态路由在 store 中接口控制
export const asyncRoutes = [
  ...sysRouter,
  ...ossRouter,
  ...orgRouter,
  ...projectRouter,
  ...toolRouter,
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
]

const createRouter = () => new Router({
  mode: env.routerMode,
  base: env.routerBase,
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

/**
 * 添加动态(菜单)路由
 * 路由的树结构和菜单的树结构要分离，然后进行映射动态添加
 * @param {*} menuList 菜单列表
 */
// 生成菜单来展示菜单数据
// 菜单有三级没关系，通过path对应到路由，路由目前两级，只跟布局模板有关系
export function fnDynamicMenuRoutes(menuList = [], prePath = '/') {
  const routes = []
  for (let i = 0; i < menuList.length; i++) {
    const item = menuList[i]
    const hasChildren = item.children && item.children.length
    item.link = item.link.replace(/^\//, '')

    const route = {
      path: item.link,
      component: null,
      redirect: hasChildren ? 'noRedirect' : undefined,
      name: item.link.replace('/', '-'),
      meta: {
        isDynamic: true,
        menuId: item.id,
        title: item.name,
        icon: item.icon,
        iframeUrl: '',
        // isTab: true,
      },
    }
    if (hasChildren) {
      route.children = fnDynamicMenuRoutes(item.children, item.link)
      // routes = routes.concat(item.children);
      // 非空白
    }
    if (item.link && /\S/.test(item.link)) {
      // } else {
      // url 以 http[s]:// 开头, 通过iframe展示
      if (isURL(item.link)) {
        route['path'] = `i-${item.menuId}`
        route['name'] = `i-${item.menuId}`
        route['meta']['iframeUrl'] = item.link
      } else {
        try {
          const componentPath = item.link.replace(/^\//, '')
          route['component'] =
            prePath === '/'
              ? getLayout(componentPath)
              : lazyLoad(`modules/${componentPath}`) || null
        } catch (e) {
          // nothing...
        }
      }
      routes.push(route)
    }
  }
  // if (routes.length >= 1) {
  //   fnDynamicMenuRoutes(routes, routes)
  // }
  if (prePath === '/') {
    // routes.push({
    //   path: '*',
    //   redirect: '/404',
    //   hidden: true,
    // });
    session.set('dynamicRoutes', routes, 86400)
  }
  return routes
}
