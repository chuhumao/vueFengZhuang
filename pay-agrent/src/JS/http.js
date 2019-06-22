/* import axios from 'axios'
import qs from 'qs'
export const BASEURL = axios.defaults.baseURL = 'http://39.108.123.109:12000/' // 全局接口地址
export const fetch = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, qs.stringify(data, {
        arrayFormat: 'repeat'
      }))
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
export const patch = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(url, qs.stringify(data, {
        arrayFormat: 'repeat'
      }))
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const put = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .put(url, qs.stringify(data))
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const postConfig = (url, data = {}, config) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, config)
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
} */

import axios from 'axios'
import qs from 'qs'
// import {DEV_HOST} from './config'
import router from '@/router'

const DEV_HOST = 'http://39.108.123.109:12000/'
// const DEV_HOST = 'http://39.108.123.109:10001'
const instance = axios.create({
  // 设置默认根地址
  baseURL: DEV_HOST,
  // 设置请求超时设置
  timeout: 5000,
  // 设置请求时的header
  header: {
    // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    'Content-Type': 'application/json'
  },
  // 公用参数
  data: {
    // loginName: 'danny'
  }
})
// POST传参序列化
instance.interceptors.request.use((config) => {
  // let user = JSON.parse(sessionStorage.getItem('user_token'))
  let user = sessionStorage.getItem('user_token')
  if (user) {
    // config.headers.Authentication = user
    config.headers.common['x-auth-token'] = user
  }
  // console.log(config)
  if (config.method === 'post') {
    // config.data = qs.stringify(config.data)
    config.data = qs.parse(config.data)
  } else {
    // config.url = `${config.url}?${qs.parse(config.data)}`
    config.url = `${config.url}?${qs.stringify(config.data)}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 返回状态判断
instance.interceptors.response.use((res) => {
  // console.log(res)
  if (res.code == 504) {
    router.push({path: '/login'})
    alert('登录已失效，请重新登录！')
  }
  return res
}, (error) => {
  return Promise.reject(error)
})

export default function fetch (options) {
  return new Promise((resolve, reject) => {
    instance(options).then(response => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}
