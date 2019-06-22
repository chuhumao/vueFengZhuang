// import { BASEURL, fetch, post, patch, put, postConfig } from './http.js'
// export const BASICURL = BASEURL;
import fetch from './http'

// 登录
export const userLogin = (data) => fetch({url: 'payment/agent/login', method: 'POST', data})
// 登录：验证码
export const captcha = (data) => fetch({url: 'payment/agent/captcha', method: 'GET', data})
// 代理商管理：基本信息
export const userMessage = (data) => fetch({url: 'payment/agent/select-agent', method: 'POST', data})
// 代理商管理：商户列表
export const commercialTenantList = (data) => fetch({url: 'payment/agent/client-list', method: 'POST', data})
// 代理商管理：商户添加
export const agrentAdd = (data) => fetch({url: 'payment/agent/create-client', method: 'POST', data})
// 代理商管理：密码修改
export const agrentEditPassworde = (data) => fetch({url: 'payment/agent/edit-password', method: 'POST', data})
// 代理商管理：支付密码修改
export const agrentEditPayPassworde = (data) => fetch({url: 'payment/agent/edit-pay-password', method: 'POST', data})
// 代理商管理：网银订单明细
export const bankOrderList = (data) => fetch({url: 'payment/agent/ebank-order', method: 'POST', data})
// 代理商管理：网银订单明细
export const agrentOrderList = (data) => fetch({url: 'payment/agent/remit-order', method: 'POST', data})

// 用户信息
export const infoUserContent = (data) => fetch({url: 'payment/agent/home-info', method: 'GET', data})
