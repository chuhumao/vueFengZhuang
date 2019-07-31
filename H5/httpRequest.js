/** axios封装
  * 请求拦截、相应拦截、错误统一处理
  */
import axios from 'axios'; 
import md5 from 'js-md5'
import { Toast } from 'vant'
import { Encrypt, Decrypt } from './config'

// 环境的切换
axios.defaults.baseURL = 'https://api-test-app.tuoluoshijie.com'
//  axios.defaults.baseURL = 'http://world-dev.nat300.top';

// 请求超时时间
//  axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'

// 请求拦截器
axios.interceptors.request.use(
  config => {
    const tokenData = JSON.parse(localStorage.getItem('tokenData'));
    const timestamp = (new Date()).getTime();
    config.headers.device = tokenData.device;
    config.headers.token = tokenData.token;
    config.headers.versionSeq = tokenData.versionSeq;
    config.headers.timestamp = timestamp
    return config
  },
  error => {
    return Promise.error(error)
  })

// 响应拦截器
axios.interceptors.response.use(
  response => {
    var DecryptRet
    if (response.status === 200) {
      const dataList = response.data
      if (typeof dataList == 'object') {
          DecryptRet=dataList;
          switch (DecryptRet.code) {
              case 0:
                  break;
              //系统异常
              case 100001:
                  Toast('系统异常');
                  break;
              //系统内部访问超时
              case 100003:
                  Toast('系统内部访问超时');
                  break;
              // 会话已过期，请重新登陆
              case 100009:
                  Toast('会话已过期，请重新登陆');
                  this.$destroy('index')
                  this.$destroy('myincome')
                  const getNowApp = {
                      type: 1,
                      url: "",
                      title: "",
                      description: "",
                      imgUrl: ""
                  }
                  getToAppMethods(getNowApp)
                  break;
              //登录已失效，请重新登录
              case 1000014:
              Toast({
                  message: '登录过期，请重新登录',
                  duration: 1000,
                  forbidClick: true
                  });
                  this.$destroy('index')
                  this.$destroy('myincome')
                  const toAppdata = {
                      type: 1,
                      url: "",
                      title: "",
                      description: "",
                      imgUrl: ""
                      }
                  getToAppMethods(toAppdata)
              break;
              // 其他错误，直接抛出错误提示
              default:
                  Toast({
                      message: DecryptRet.msg,
                      duration: 1500,
                      forbidClick: true
                  });
          }
          return Promise.resolve(DecryptRet);
      }
    }
  }
)
/**
   * get方法，对应get请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
/**
   * post方法，对应post请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
