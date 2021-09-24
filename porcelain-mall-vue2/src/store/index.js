import Vue from 'vue'
import Vuex from 'vuex'
import getters from  './getters'

//全局注册Vuex
Vue.use(Vuex)

/**
 * webpack上下文环境导入子模块js文件
 */
const modulesFiles=require.context('./modules',true,/\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
console.log('==========获取状态模块============>',modules)
/**
 * 创建Store
 */
const store= new Vuex.Store({
  state: {
    modules,
    getters
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
export default store
