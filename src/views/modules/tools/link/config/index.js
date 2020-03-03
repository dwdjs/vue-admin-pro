import { hsq } from './hsq'
import { iqg } from './iqg'
import { msf } from './msf'
import { fyb } from './fyb'

// 各种配置数据
const defaultPage = {
  label: '自定义(无数据默认跳首页)',
  value: '',
}

const commonTopPages = [
  {
    label: '首页 index',
    value: 'index',
  },
  {
    label: '新专题 topic',
    value: 'topic',
    type: 'https',
  },
]

const commonBottomPages = [
  {
    label: '个人中心 profile',
    value: 'profile',
  },
  {
    label: '订单列表 order-list',
    value: 'order-list',
  },
  {
    label: '订单详情 order-detail',
    value: 'order-detail',
  },
  {
    label: '客服页 service',
    value: 'service',
  },
]

const pages = {
  h5: [
    defaultPage,
    ...commonTopPages,
    // costom pages
    {
      label: '详情 detail',
      value: 'detail',
    },
    ...commonBottomPages,
  ],
  mini: [
    defaultPage,
    ...commonTopPages,
    {
      label: '购物车 shopping-cart',
      value: 'shopping-cart',
    },
    {
      label: '详情 detail',
      value: 'detail',
    },
    {
      label: '普通品详情 detail2',
      value: 'detail2',
    },
    {
      label: '通用 https 链接',
      value: 'webview',
      type: 'https',
      disabled: true,
    },
    {
      label: '五福专题 zt',
      value: 'zt',
      disabled: true,
    },
    ...commonBottomPages,
  ],
  hsq: [
    defaultPage,
    ...hsq,
  ],
  iqg: [
    ...iqg,
  ],
  msf: [
    ...msf,
  ],
  fyb: [
    ...fyb,
  ],
}

const otherMiniApp = [
  {
    label: '自定义小程序',
    terminal: 'other-mini',
    value: '',
    type: 'mini',
    children: [defaultPage],
  },
]
const aliappList = [
  ...otherMiniApp,
  {
    label: 'hsq-拼团小程序',
    terminal: 'hsq-couple',
    value: '2017112000051610',
    biz: 'hsq',
    type: 'mini',
    children: [...pages.hsq],
  },
  {
    label: 'msf-觅食蜂小程序',
    terminal: 'aliapp',
    value: '2021001108636832',
    biz: 'msf',
    type: 'mini',
    children: [...pages.msf],
  },
  {
    label: 'hsq-积分小程序',
    terminal: 'hsq-point',
    value: '2018051160096372',
    biz: 'hsq',
    type: 'mini',
    children: [...pages.mini],
  },
  {
    label: 'hsq-芝麻信用小程序',
    terminal: 'hsq-xy',
    value: '2018121062522053',
    biz: 'hsq',
    type: 'mini',
    disabled: true,
    children: [...pages.mini],
  },
  {
    label: 'iqg-一元餐小程序',
    terminal: 'iqg-yyc',
    value: '2018052860277142',
    biz: 'iqg',
    type: 'mini',
    disabled: true,
    children: [...pages.mini],
  },
]
const wxappList = [
  ...otherMiniApp,
  {
    label: 'hsq-拼团小程序',
    terminal: 'hsq-wxapp',
    value: 'wxa090d3923fde0d4b',
    biz: 'hsq',
    type: 'mini',
    children: [...pages.mini],
  },
  {
    label: 'fyb-返一半小程序',
    terminal: 'fyb-wxapp',
    value: 'wxf5af2f07377df2b1',
    biz: 'hsq',
    type: 'mini',
    children: [...pages.mini],
  },
  {
    label: 'iqg-砍价小程序',
    terminal: 'iqg-wxapp',
    value: 'wxa36b4671d95ba753',
    biz: 'iqg',
    type: 'mini',
    children: [
      ...pages.mini,
      {
        label: '一元券 ticket',
        value: 'ticket',
      },
      {
        label: '活动分类列表 activity-category',
        value: 'activity-category',
      },
    ],
  },
  {
    label: 'msf-微信小程序',
    terminal: 'msf-wxapp',
    value: 'wxd01101d64405ab11',
    biz: 'msf',
    type: 'mini',
    children: [
      {
        label: '通用 https 链接',
        value: 'web-view',
        type: 'https',
      },
    ],
  },
]

export default {
  short: {},
  h5: {
    // iqg
    // hsq
    // msf
    // fyb
    toList: [
      {
        label: 'h5-好食期',
        terminal: 'h5-hsq',
        value: 'https://m.haoshiqi.net',
        biz: 'h5-hsq',
        type: 'https',
        // disabled: true,
        children: [
          ...pages.hsq,
        ],
      },
      {
        label: 'h5-爱抢购',
        terminal: 'h5-iqg',
        value: 'https://m.iqianggou.com',
        biz: 'h5-iqg',
        type: 'https',
        disabled: true,
        children: [...pages.h5],
      },
      {
        label: 'h5-觅食蜂',
        terminal: 'h5-msf',
        value: 'https://m.mishifeng.net',
        biz: 'h5-msf',
        type: 'https',
        children: [
          ...commonTopPages,
          ...pages.msf,
        ],
      },
      {
        label: 'h5-爱抢购商户',
        terminal: 'h5-iqgsh',
        value: 'https://stats-m.iqianggou.com',
        biz: 'h5-iqgsh',
        type: 'https',
        disabled: true,
        children: [...pages.h5],
      },
      {
        label: 'h5-返一半',
        terminal: 'h5-fyb',
        value: 'h5-fyb',
        biz: 'h5-fyb',
        type: 'https',
        disabled: true,
        children: [...pages.h5],
      },
    ],
  },
  aliapp: {
    fromList: [
      {
        label: '支付宝-生活号',
        terminal: 'alipays',
        value: 'alipays',
        type: 'alipays',
      },
      {
        label: '支付宝-推广助手投放',
        terminal: 'ssp',
        value: 'ssp',
        type: 'ssp',
      },
      {
        label: '支付宝-模板消息',
        terminal: 'tplmsg',
        value: 'tplmsg',
        type: 'tplmsg',
      },
      {
        label: '支付宝-短信',
        terminal: 'sms',
        value: 'sms',
        type: 'sms',
      },
      ...aliappList,
    ],
    toList: [...aliappList],
  },
  wxapp: {
    fromList: [
      {
        label: '微信-模板消息',
        terminal: 'tplmsg',
        value: 'tplmsg',
        type: 'tplmsg',
      },
      {
        label: '微信-微信推文',
        terminal: 'tweet',
        value: 'tweet',
        type: 'tweet',
      },
      {
        label: '微信-广告投放',
        terminal: 'ad',
        value: 'ad',
        type: 'ad',
      },
      ...wxappList,
    ],
    toList: [...wxappList],
  },
}
