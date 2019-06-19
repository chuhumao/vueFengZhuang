/*import axios from 'axios'
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
}*/

import axios from 'axios'
import qs from 'qs'
// import {DEV_HOST} from './config'
import router from '@/router'

const DEV_HOST = 'http://39.108.123.109:12000/'

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
  data: {}
})

// POST传参序列化
instance.interceptors.request.use((config) => {
  // let user = JSON.parse(sessionStorage.getItem('operate_user_info'))
  /*if (user) {
    config.headers.Authentication = user.token
  }*/
  //console.log(config)
  if (config.method === 'post') {
    config.data = qs.parse(config.data)
  } else {
    config.url = `${config.url}?${qs.parse(config.data)}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 返回状态判断
instance.interceptors.response.use((res) => {
  if (res.data.flag === 1000) {
    console.log('参数错误')
  }
  if (res.data.flag === 1100) {
    console.log('数据类型错误')
  }
  if (res.data.flag === 1200) {
    console.log('逻辑错误')
  }
  if (res.data.flag === 1300) {
    console.log('数据库操作错误')
  }
  if (res.data.flag === 1400) {
    console.log('请求方式错误')
  }
  if (res.data.flag === 1500) {
    console.log('失败认证')
  }
  if (res.data.flag === 1600) {
    console.log('操作失败')
  }
  if (res.data.flag === 2000) {
    sessionStorage.removeItem('operate_user_info')
    console.log('登录信息失效')
  }
  if (res.data.flag == 6666) {
    router.push({path: '/login'})
    alert('登录已失效，请重新登录！')
  }
  return res
}, (error) => {
  return Promise.reject(error)
})

export default function fetch(options) {
  return new Promise((resolve, reject) => {
    instance(options).then(response => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

