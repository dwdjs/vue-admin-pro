<template>
  <div v-if="!item.hidden&&item.children" class="menu-wrapper">

    <router-link
      v-if="hasOneShowingChild(item.children) && !onlyOneChild.children&&!item.alwaysShow"
      :to="resolvePath(onlyOneChild.path)"
      :key="onlyOneChild.name"
    >
      <el-menu-item
        :class="{'submenu-title-noDropdown':!isNest}"
        :index="resolvePath(onlyOneChild.path)"
      >
        <icon-svg v-if="onlyOneChild.meta&&onlyOneChild.meta.icon" :icon-class="onlyOneChild.meta.icon" />
        <span slot="title" v-if="onlyOneChild.meta&&onlyOneChild.meta.title">{{ generateTitle(onlyOneChild.meta.title) }}</span>
      </el-menu-item>
    </router-link>

    <el-submenu v-else :index="item.name||item.path" :key="item.name">
      <template slot="title">
        <icon-svg v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon" />
        <span slot="title" v-if="item.meta&&item.meta.title">{{ generateTitle(item.meta.title) }}</span>
      </template>

      <template v-for="child in item.children">
        <sidebar-item
          v-if="child.children&&child.children.length>0"
          :is-nest="true"
          :item="child"
          :base-path="resolvePath(child.path)"
          :key="child.path"
          class="nest-menu"
        />

        <router-link v-else :to="resolvePath(child.path)" :key="child.name">
          <el-menu-item :index="resolvePath(child.path)">
            <icon-svg v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon" />
            <span slot="title" v-if="child.meta&&child.meta.title">{{ generateTitle(child.meta.title) }}</span>
          </el-menu-item>
        </router-link>
      </template>
    </el-submenu>

  </div>
  <!-- <div v-if="!item.hidden && item.children" class="menu-wrapper">
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
          <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="generateTitle(onlyOneChild.meta.title)" />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu ref="subMenu" v-else :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="generateTitle(item.meta.title)" />
      </template>
      <template v-for="child in item.children">
        <sidebar-item
          v-if="!child.hidden"
          :is-nest="true"
          :item="child"
          :base-path="resolvePath(child.path)"
          :key="child.path"
          class="nest-menu"
        />
      </template>
    </el-submenu>
  </div> -->
</template>

<script>
import path from 'path'
import { generateTitle } from '@/utils/i18n'
import { isExternal } from '@/utils/validate'
// import Item from './Item'
// import AppLink from './Link'
import FixiOSBug from './FixiOSBug'

export default {
  name: 'SidebarItem',
  components: {
    // Item,
    // AppLink,
  },
  mixins: [FixiOSBug],
  props: {
    // route object
    item: {
      type: Object,
      required: true,
    },
    isNest: {
      type: Boolean,
      default: false,
    },
    basePath: {
      type: String,
      default: '',
    },
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    // this.onlyOneChild = null
    return {
      onlyOneChild: null,
    }
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    },

    generateTitle,
  },
}
</script>
