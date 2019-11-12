import { stringify, parse } from './qs'
// 输入都为 mini，输出为各种转换规则之下的链接
// 如：输出 sms-mini，传入必要参数，经过 N 次转换得出结果
// miniapp.input(mini).mini(rule).alipays(rule).sms(rule);
// 小程序链接相关

export const miniRules = {
  base: {
    // 默认小程序输出链接格式
    mini: data => `${data.pathname}${stringify(data.pageQuery)}`,
    https: data => {
      // 需要增强parse，以正确的解析 url 路径
      // 适配不规范场景：hash 字段位置书写不规范、微信内分享后的 url 不规范(两个?)
      const params = {
        ...parse(data.webviewUrl),
        ...data.bizParams,
      }
      return `${data.webviewUrl}${stringify(params)}`
    },
    // 小程序间跳转
    miniapp: data => {
      const params = {
        appid: data.appId,
        ...data.pageQuery,
        ...data.bizParams,
      }
      return `miniapp://${data.pathname}${stringify(params)}`
    },
    // 模板消息 --> 小程序
    tplmsg: data => {
      const params = {
        ...data.pageQuery,
        ...data.bizParams,
      }
      return `${data.pathname}${stringify(params)}`
    },
  },
  aliapp: {
    // 生活号菜单 --> 小程序
    life: data => {
      const params = {
        ...data.pageQuery,
        ...data.bizParams,
      }
      return `${data.pathname}${stringify(params)}`
    },
    // 短信 --> 支付宝小程序（mini -> alipays -> h5）
    sms: data =>
      `https://ds.alipay.com/?from=mobilecodec&scheme=${encodeURIComponent(
        data.alipaysUrl
      )}`,
    // h5/生活号 --> 支付宝小程序（mini -> alipays）
    alipays: data => {
      const params = {
        appId: data.appId,
        page: data.miniUrl,
        query: stringify(data.bizParams, ''),
      }
      return `alipays://platformapi/startApp${stringify(params)}`
    },
    // alipays://platformapi/startapp?appId={appId}&page=a/b/c
    // 后面的 page 可以 encode 也可以不用
    // 这里 startapp 的 a 必须要小写(支付宝大小写都支持)
    ssp: data => {
      const params = {
        appId: data.appId,
        page: data.miniUrl,
        query: stringify(data.bizParams, ''),
      }
      return `alipays://platformapi/startapp${stringify(params)}`
    },
  },
  wxapp: {
    // 微信公众号菜单 --> 小程序
    mp: data => {
      const params = {
        ...data.pageQuery,
        ...data.bizParams,
      }
      return `${data.pathname}${stringify(params)}`
    },
    // 微信推文 --> 小程序
    tweet: data => {
      let { pathname } = data
      pathname = pathname ? `${pathname}.html` : ''
      const params = {
        ...data.pageQuery,
        ...data.bizParams,
      }
      return `${pathname}${stringify(params)}`
    },
    // 广告投放 --> 小程序
    ad: data => {
      let { pathname } = data
      pathname = pathname ? `/${pathname}` : ''
      const params = {
        ...data.pageQuery,
        ...data.bizParams,
      }
      return `${pathname}${stringify(params)}`
    },
  },
}

export class MiniLink {
  constructor(rules = {}) {
    // 配置各种规则
    this.rules = {
      ...miniRules.base,
      ...rules,
    }

    this.init(this.rules)
    // console.log(this.rules);
  }

  input(data = {}) {
    // data.fn = {
    //   stringify,
    //   parse,
    // };
    const { pageQuery = {}, bizParams = {} } = { ...data }
    if (data.linkType !== 'https') {
      if (data.webviewUrl) {
        data.pageQuery = {
          ...pageQuery,
          url: data.webviewUrl,
        }
      }
    }
    data.bizParams = bizParams
    this.data = {
      ...data,
    }
    return this
  }

  next(type, rule = this.rules[type]) {
    if (!type || !rule) {
      throw Error(`function next error: you should input ${type} & ${rule}`)
    }
    // console.log('应用规则:', type);
    if (type !== 'https') {
      if (type !== 'mini' && !this.data.miniUrl) {
        this.mini()
      }
      if (type === 'sms' && !this.data.alipaysUrl) {
        this.alipays()
      }
    }
    this.toString = () => {
      return rule(this.data)
    }
    this.data[`${type}Url`] = this.toString()
    return this
  }

  init(rules) {
    Object.keys(rules).forEach(key => {
      this[key] = function (rule) {
        return this.next(key, rule)
      }
    })
  }
}
