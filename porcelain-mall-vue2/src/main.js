import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from '@/router'
import store from '@/store'
import '@/assets/icons' 
import Element from 'element-ui'


Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  router,//注册路由
  store,//注册状态管理
  render: h => h(App)
}).$mount('#app')
