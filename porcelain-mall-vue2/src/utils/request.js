import axios from 'axios'
// import router from '@/router/routers'
import { Notification, MessageBox } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import Config from '@/settings'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_API : '/', // api 的 base_url
  timeout: Config.timeout, // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  (config) => {
    if (getToken()) {
      //每个请求带token
      config.headers['Authorization'] = getToken()
    }
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  (error) => {
    console.error(' ( ﹁ ﹁ ) ~→请求发生错误,位置:request.js', error)
    Notification.error({
      title: '向服务器请求资源错误o(￣ヘ￣o＃)',
      message: error,
    })
    Promise.reject(error)
  }
)
// response 拦截器
service.interceptors.response.use(
  (response) => {
    const code = response.status
    if (code < 200 || code > 300) {
      console.error('请求返回错误，服务器爸爸坏掉了Σ( ° △ °|||)︴')
      Notification.error({
        title: response.message,
      })
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  (error) => {
    let code = 0
    try {
      code = error.response.data.status
    } catch (err) {
      //网络请求超时
      if (error.toString().indexOf('Error: timeout') !== -1) {
        Notification.error({
          title: '网络请求超时啦，重新试试看 (๑•̀ㅂ•́)و✧',
          duration: 5000, //5秒等待
        })
        return Promise.reject(error)
      }
    }
    if (code) {
      if (code === 401) {
        MessageBox.confirm('登录状态已过期，您继续留在此页面或重新登录都行 o(*^＠^*)o', '系统温馨提示', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          store.dispatch('LogOut').then(() => {
            location.reload() //刷新文档
          })
        })
      } else if (code === 403) {
        //跳转403页面
        // router.push({ path: '/401' })
      } else {
        const errorMsg = error.response.data.message
        if (errorMsg !== undefined) {
          Notification.error({
            title: 'o(≧口≦)o' + errorMsg,
            duration: 5000,
          })
        }
      }
      return Promise.reject(error)
    }
  }
)

export default service
