import App from './App'

// #ifndef VUE3
import Vue from 'vue'
// 引入全局TuniaoUI
import TuniaoUI from 'tuniao-ui'
Vue.use(TuniaoUI)
// 引入store
import store from './store'
// 引入TuniaoUI提供的vuex简写方法
let vuexStore = require('@/store/$tn.mixin.js')
Vue.mixin(vuexStore)

import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
// 引入全局组件
import JobItem from './components/job-item.vue'
import CustomInput from './components/custom-input.vue'
Vue.component('job-item',JobItem)
Vue.component('custom-input',CustomInput)

const app = new Vue({
  store,
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif