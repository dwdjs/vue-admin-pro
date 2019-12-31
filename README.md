# vue-admin-pro

vue-admin-pro 开箱即用

参考开源demo示例, 汇集业务场景, 提炼交互体验, 集成动态生成

1. 基于 [kit-admin](https://github.com/jskit/kit-admin/)(此项目本身也是基于下面项目开发) 做初始化
2. 合并最新版 [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) 设计
3. 抽离 demo 到 labs, 此处只保留 admin-pro 场景应用

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

非常规场景, 入口收纳到示例中展示

### 通用功能 common

- 控制台/概况页(定制展示或常用操作)
- 工具助手 tools
  - [x] 引导页
  - [x] Icon
  - [x] 链接生成工具
- 错误页 401 404 500 log
- 示例 demo
  - [ ] 外链打开, 支持 iframe

### 核心功能 base

- 系统管理
  - [x] 管理员列表
  - [x] 角色管理
  - [x] 菜单管理
  - [x] SQL 监控
  - [x] 定时任务
  - [x] 数据字典
  - [x] 系统日志
- 组织架构
  - 部门管理
  - 员工管理
  - 岗位管理
  - 证书管理
- 文件管理
  - 图床配置
  - 文件上传
- 项目管理
  - 项目列表
  - 进度详情
  - 任务管理
  - 工单?
- 用户中心
  - 会员配置
  - 用户列表
  - 收货地址
  - 用户收藏
  - 历史足迹
  - 搜索历史
  - 用户签到记录
  - 用户购物车
  - 用户反馈
- 商城配置
  - 搜索关键字
  - 商品分类
  - 商品详情参数
  - 品牌制造商(待审核)
  - 商品问答
  - 快递公司配置
  - 店铺管理
- 商品管理
  - 商品列表
  - 商品分类
  - 商品评价
  - 秒杀配置
- 订单管理
  - 所有订单
- 营销中心
- 系统运维
  - 开发配置
  - 安全维护

### 业务模块 biz

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
  - http://demo.ruoyi.vip/
- https://gitee.com/ZhongBangKeJi/CRMEB
- https://gitee.com/naan1993/guns/tree/master
  - http://demo.stylefeng.cn 👍
- https://github.com/zhangdaiscott/jeecg-boot
  - http://boot.jeecg.com/ 👍
