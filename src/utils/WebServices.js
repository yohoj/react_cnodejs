import axios from 'axios'

/**
 * 封装axios，实现发送/响应接口的拦截，来实现统一提示等效果
 */

const error = () => {
  console.error('数据加载失败！', 1)
}

const service = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 5000 // 请求超时时间限制
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  err => {
    error()
    Promise.reject(err)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  err => {
    error()
    return Promise.reject(err)
  }
)

// 获取首页帖子列表数据
export const getTopics = data => {
  return service({
    url: '/topics',
    method: 'get',
    params: data
  })
}

// 获取帖子详情数据
export const getTopicById = id => {
  return service({
    url: `/topic/${id}`,
    method: 'get'
  })
}

// 获取用户详情数据
export const getUserByName = loginname => {
  return service({
    url: `/user/${loginname}`,
    method: 'get'
  })
}

