// import { BASEURL, fetch, post, patch, put, postConfig } from './http.js'
// export const BASICURL = BASEURL;
import fetch from './http'
// POST获取 "首页" admin/system/ 后端接口
// export const getLoginCode = data => post('payment/agent/client-list', data);
export const getLoginCode = (data) => fetch({url: 'payment/agent/client-list', method: 'POST', data})
