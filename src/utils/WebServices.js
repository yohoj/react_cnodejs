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
export const getUserByName = userName => {
  return service({
    url: `/user/${userName}`,
    method: 'get'
  })
}
/**
 *  新建主题 
 * {accesstoken, title, tab, content}
 * */
export const postTopics = (data) => {
    return service({
        url: `/topics`,
        method: 'post',
        params: data
      })
}
/**
 * 编辑主题 
 * {accesstoken, topic_id, title, tab, content}
 * */
export const updateTopics = (data)=> {
    return service({
        url:`/topics/update`,
        method: 'post',
        params: data,
    });
    
}
/**
 *  收藏主题 
 * {accesstoken, topic_id}
 * */
export const collectTopics = (data) => {
    return service({
        url:`/topic_collect/collect`,
        method: 'post',
        params: data,
    });
}
/** 
 * 取消收藏主题 
 * { accesstoken, topic_id }
 * */
export const deCollectTopics = (data) => {
    return service({
        url:`/topic_collect/de_collect`,
        method: 'post',
        params: data,
    });
}

