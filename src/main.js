import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/vant-ui'
import '@/styles/common.less'
// import { Toast } from 'vant'
// Toast('123')
// import Vant from 'vant'
// import 'vant/lib/index.css'
// // 把vant中所有的组件都导入了
// // 插件安装初始化
// Vue.use(Vant)
// Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
