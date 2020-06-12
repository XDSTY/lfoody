import qs from 'qs'

export const baseUrl = ''

const get = (path, query) => {
    return this.$axios(`${baseUrl}${path}`, query)
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
  
    return this.$axios(`${baseUrl}${path}`, reqBody, 'post')
}
