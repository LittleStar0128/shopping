import axios from 'axios'
// 创建 axios 实例 将来对创建出来的实例，进行自定义配置
// 好处： 不会污染原始的 axios 实例
const request = axios.create({
  baseURL: 'http://cba.itlike.com/public/index.php?s=/api/',
  timeout: 3000 // 请求超时时间
})

// 自定义配置 - 请求 / 响应  拦截器
// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
// 导出配置好的实例

export default request
