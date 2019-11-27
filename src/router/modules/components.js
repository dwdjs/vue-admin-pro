// 组件 demo

import { lazyLoad } from '../utils'
import Layout from '@/layout'
import routerNode from '@/views/components/index'

export default [
  {
    path: '/components',
    component: Layout,
    redirect: 'noRedirect',
    name: 'component',
    meta: {
      title: '组件demo',
      icon: 'component',
    },
    children: [
      {
        path: 'guide',
        component: lazyLoad('components/guide/index'),
        name: 'Guide',
        meta: { title: '引导页', icon: 'guide' },
      },
      {
        path: 'icon',
        component: lazyLoad('components/icon/index'),
        name: 'Icon',
        meta: { title: '图标', icon: 'icon' },
      },
      {
        path: 'editor',
        redirect: '/components/editor/json',
        component: routerNode, // Parent router-view
        name: 'editor',
        meta: {
          title: '编辑器',
        },
        children: [
          {
            path: 'json',
            component: lazyLoad('components/editor/json'),
            name: 'JSON',
            meta: { title: 'json' },
          },
          {
            path: 'markdown',
            component: lazyLoad('components/editor/markdown'),
            name: 'Markdown',
            meta: { title: 'markdown' },
          },
          // {
          //   path: 'tinymce',
          //   component: lazyLoad('components/editor/tinymce'),
          //   name: 'Tinymce',
          //   meta: { title: '富文本编辑器' },
          // },
        ],
      },
      {
        path: 'interactive',
        redirect: '/components/interactive/back-to-top',
        component: routerNode, // Parent router-view
        name: 'interactive',
        meta: {
          title: '交互操作',
        },
        children: [
          {
            path: 'back-to-top',
            component: lazyLoad('components/interactive/back-to-top'),
            name: 'BackToTopDemo',
            meta: { title: 'backToTop' },
          },
          {
            path: 'split-pane',
            component: lazyLoad('components/interactive/split-pane'),
            name: 'SplitPane',
            meta: { title: 'split-pane' },
          },
          // {
          //   path: 'sticky',
          //   component: lazyLoad('components/sticky/index'),
          //   name: 'StickyDemo',
          //   meta: { title: 'sticky' },
          // },
          // {
          //   path: 'count-to',
          //   component: lazyLoad('components/count-to/index'),
          //   name: 'CountToDemo',
          //   meta: { title: 'countTo' },
          // },
        ],
      },
      {
        path: 'avatar-upload',
        component: lazyLoad('components/avatar-upload/index'),
        name: 'AvatarUploadDemo',
        meta: { title: 'avatarUpload' },
      },
      // {
      //   path: 'dropzone',
      //   component: lazyLoad('components/dropzone/index'),
      //   name: 'DropzoneDemo',
      //   meta: { title: 'dropzone' },
      // },

      // {
      //   path: 'mixin',
      //   component: lazyLoad('components/mixin/index'),
      //   name: 'ComponentMixinDemo',
      //   meta: { title: 'componentMixin' },
      // },

      {
        path: 'drag',
        redirect: 'noRedirect',
        name: 'drag',
        component: routerNode,
        meta: {
          title: '拖拽',
        },
        children: [
          {
            path: 'dialog',
            component: lazyLoad('components/drag/dialog'),
            name: 'DragDialogDemo',
            meta: { title: 'dragDialog' },
          },
          {
            path: 'select',
            component: lazyLoad('components/drag/select'),
            name: 'DragSelectDemo',
            meta: { title: 'dragSelect' },
          },
          {
            path: 'list',
            component: lazyLoad('components/drag/list'),
            name: 'DndListDemo',
            meta: { title: 'dndList' },
          },
          {
            path: 'kanban',
            component: lazyLoad('components/drag/kanban'),
            name: 'DragKanbanDemo',
            meta: { title: 'dragKanban' },
          },
        ],
      },
    ],
  },
]
