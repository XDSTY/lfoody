import qs from 'qs'
import { getStore, setStore } from './storage'


export const base = ''

this.$axios.defaults.timeout=15000

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
  
    // return this.$axios(`${baseUrl}${path}`, reqBody, 'post')
    return this.$axios
}

this.$axios.interceptors.request.use(config => {
  return config
}, err => {
  Message.error('请求超时')
  return Promise.reject(err)
})

// http response 拦截器
this.$axios.interceptors.response.use(response => {
  const data = response.data

  // 根据返回的code值来做不同的处理(和后端约定)
  switch (data.code) {
    case 401:
      // 未登录 清除已登录状态
      Cookies.set('userInfo', '')
      setStore('accessToken', '')
      if (router.history.current.name !== 'login') {
        if (data.msg !== null) {
          Message.error(data.msg)
        } else {
          Message.error('未知错误，请重新登录')
        }
        router.push('/login')
      }
      break
    case 403:
      // 没有权限
      if (data.msg !== null) {
        Message.error(data.msg)
      } else {
        Message.error('未知错误')
      }
      break
    case 500:
      // 错误
      if (data.msg !== null) {
        Message.error(data.msg)
      } else {
        Message.error('未知错误')
      }
      break
    default:
      return data
  }

  return data
}, (err) => {
  // 返回状态码不为200时候的错误处理
  Message.error(err.toString())
  return Promise.resolve(err)
})

export const getRequest = (url, params) => {
  const accessToken = getStore('accessToken')
  return this.$axios({
    method: 'get',
    url: `${base}${url}`,
    params: params,
    headers: {
      'accessToken': accessToken
    }
  })
}

export const postRequest = (url, params) => {
  const accessToken = getStore('accessToken')
  return this.$axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'application/json',
      'accessToken': accessToken
    }
  })
}

export const putRequest = (url, params) => {
  const accessToken = getStore('accessToken')
  return this.$axios({
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
      'accessToken': accessToken
    }
  })
}

export const deleteRequest = (url, params) => {
  const accessToken = getStore('accessToken')
  return this.$axios({
    method: 'delete',
    url: `${base}${url}`,
    params: params,
    headers: {
      'accessToken': accessToken
    }
  })
}

export const importRequest = (url, params) => {
  const accessToken = getStore('accessToken')
  return this.$axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'accessToken': accessToken
    }
  })
}

export const uploadFileRequest = (url, params) => {
  const accessToken = getStore('accessToken')
  return this.$axios({
    method: 'post',
    url: `${base}${url}`,
    params: params,
    headers: {
      'accessToken': accessToken
    }
  })
}

export const common = {
  cityList: query => post('/city/list', query),
  companyList: query => post('/company/list', query)
}
