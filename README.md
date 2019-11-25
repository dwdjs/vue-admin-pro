# vue-admin-pro

vue-admin-pro 开箱即用

参考开源demo示例, 汇集业务场景, 提炼交互体验, 集成动态生成

1. 基于 [kit-admin](https://github.com/jskit/kit-admin/) 做初始化
2. 合并最新的 [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) 设计

## 业务场景

收集后台业务场景

布局排版

- 顶部导航
  - 登录状态/搜索/logo
  - 面包屑
- 左侧菜单
  - 分区
  - 菜单列表
- 主编辑区

核心功能

- 系统管理
  - 管理员列表
  - 角色管理
  - 菜单管理
  - SQL 监控
  - 定时任务
  - 数据字典
  - 系统日志
- 文件上传
- 工具助手
- 组织架构
  - 部门管理
  - 员工管理
  - 岗位管理
  - 证书管理
- 错误页 401 404 500

业务功能

- 商品
- 订单
- 会员
- 分销
- 营销
- 财务
- 数据
- 小程序
- 公众号
- 内容管理
- 设置/系统管理
- 运维
  - 开发配置
  - 安全维护

## Project setup

```bash
npm i -g @vue/cli
yarn install
```

## Usage

```bash
# Compiles and hot-reloads for development
npm run serve

# Compiles and minifies for production
npm run dll # only run once
npm run build

npm run lint
npm run test
```

## Deploy

```bash
yarn deploy

deploy branch gh-pages
```

**commit message:**

- feat: 新增功能
- fix: 修复bug
- docs: 修改文档
- refactor: 代码重构，未新增任何功能和修复任何bug
- build: 改变构建流程，新增依赖库、工具等（例如webpack修改）
- style: 仅仅修改了空格、缩进等，不改变代码逻辑
- perf: 改善性能和体现的修改
- chore: 非src和test的修改
- test: 测试用例的修改
- ci: 自动化流程配置修改
- revert: 回滚到上一个版本

参考开源示例:

- https://github.com/PanJiaChen/vue-element-admin
  - https://panjiachen.github.io/vue-element-admin 👍
- https://admin.iviewui.com/
- https://www.renren.io/
  - https://demo.renren.io/security-enterprise/
- https://www.fastadmin.net/
  - https://demo.fastadmin.net/admin 👍
- https://github.com/d2-projects/d2-admin
- D2Admin
  - https://fairyever.com/d2-admin/preview/
- https://avuejs.com/
  - https://cli1.avuejs.com/#/login
  - https://avue.2bugs.cn/
  - https://crud.avuejs.com/
  - https://form.avuejs.com/
- https://bladex.vip/ 👍
  - https://saber.bladex.vip/#/login
  - https://archer.bladex.vip/#/wel/index
- https://gitee.com/y_project/RuoYi
  - http://demo.ruoyi.vip/login
- https://gitee.com/ZhongBangKeJi/CRMEB
