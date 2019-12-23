<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :show-timeout="200"
        :default-active="activeMenu"
        :collapse="isCollapse"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
      >
        <sidebar-item
          v-for="route in permission_routes"
          :key="route.name"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>

// <div class="sidebar scrollbar">

import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
// import api from '@/api';

export default {
  components: {
    Logo,
    SidebarItem,
  },
  computed: {
    ...mapGetters([
      'menus',
      'permission_routes',
      'sidebar',
      'site',
    ]),
    activeMenu() {
      // $route.path
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    isCollapse() {
      return !this.sidebar.opened
    },
  },
  created() {
    console.log('sidebar', this.permission_routes)
    // api.getMenu({}, (res) => {
    //   console.log(res);
    // }, (err) => {
    // })
  },
}
</script>

<style lang="stylus" scoped>
// .sidebar {
//   height: 100%;
//   overflow-x: hidden;
//   overflow-y: scroll;
// }

// .sidebar.scrollbar {
//   // width: ($sideBarWidth + 4px);
// }

/*
background-color="#304156"
text-color="#bfcbd9"
active-text-color="#409EFF"

new
sidebar:
background-color="#001529"
text-color="hsla(0,0%,100%,.65)"
active-text-color="#1890ff"
*/
</style>
