import axios from 'axios';
import { getStore, setStore } from './storage'
import Vue from 'vue'
import router from '../router/index'
import { Toast } from 'mint-ui'
Vue.component(Toast.name, Toast)
export const base = '/api'

const get = (path, query) => {
    return this.$axios(`${base}${path}`, query)
}

const post = (path, body) => {
    const reqBody = {}
  
    if (body instanceof Array) {
      // 如果是数组的话，统一从服务端用名为list的字符串来接收
      reqBody.list = JSON.stringify(body)
    } else {
      for (const key in body) {
        reqBody[key] = typeof body[key] === 'string' ? body[key].trim() : body[key]
      }
    }
  
    return this.$axios(`${base}${path}`, reqBody, 'post')
}

axios.interceptors.request.use(config => {
  return config
}, err => {
  Toast('请求超时');
  return Promise.reject(err)
})

// http response 拦截器
axios.interceptors.response.use(response => {
  const data = response.data

  // 根据返回的code值来做不同的处理(和后端约定)
  switch (data.code) {
    case -1:
      Toast(data.message); break
    default:
      return data
  }

  return data
}, (error) => {
  if(error && error.response) {
    switch (error.response.status) {
      case 400: error.message = '请求错误' ; break;
      case 401: error.message = '未授权，请重新登录'; Toast(error.message); router.push('/login'); break;
      case 403: error.message = '拒绝访问'; break;
      case 404: error.message = '请求出错'; break;
      case 408: error.message = '请求超时'; break;
      case 500: error.message = '服务器错误'; break;
      case 501: error.message = '服务未实现'; break;
      case 502: error.message = '网络错误'; break;
      case 503: error.message = '服务不可用'; break;
      case 504: error.message = '网络超时'; break;
      case 505: error.message = 'HTTP版本不受支持'; break;
      default: error.message = '连接出错!';
    }
  } else {
    error.message = '服务器内部错误xxx';
  }
  Toast(error.message)
  return Promise.reject(error)
})

export const getRequest = (url, params) => {
  const accessToken = getStore('accessToken')
  return axios({
    method: 'get',
    url: `${base}${url}`,
    params: params,
    headers: {
      'Authorization': accessToken
    }
  })
}

export const postRequest = (url, params) => {
  const accessToken = getStore('accessToken')
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': accessToken
    }
  })
}

export const putRequest = (url, params) => {
  const accessToken = getStore('accessToken')
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (const it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/json',
      'Authorization': accessToken
    }
  })
}

export const deleteRequest = (url, params) => {
  const accessToken = getStore('accessToken')
  return axios({
    method: 'delete',
    url: `${base}${url}`,
    params: params,
    headers: {
      'Authorization': accessToken
    }
  })
}

export const importRequest = (url, params) => {
  const accessToken = getStore('accessToken')
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Authorization': accessToken
    }
  })
}

export const uploadFileRequest = (url, params) => {
  const accessToken = getStore('accessToken')
  return axios({
    method: 'post',
    url: `${base}${url}`,
    params: params,
    headers: {
      'Authorization': accessToken
    }    
  })
}

export const common = {
  cityList: query => postRequest('/city/list', query),
  companyList: query => postRequest('/company/list', query)
}

export const user = {
  register: query => postRequest('/user/register', query),
  login: query => postRequest('/user/login', query)
}
