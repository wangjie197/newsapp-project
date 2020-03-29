import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false
import './assets/css/base.css'
import './assets/js/font.js'

//引入动画
import 'animate.css'

//引入路由配置
import router from './plugins/router.js'

//引入axios路由的配置
import './plugins/axios'

//引入配置文件
import server from './config/server.js'
Vue.prototype.$baseUrl=server.baseUrl    //服务器基础的配置得捆绑

//引入状态管理
import store from './plugins/vuex.js'

//引入  提交类型模块  绑定到vue实例上
import * as types from './store/types.js'
Vue.prototype.$types=types

//获取本地 同步vuex
let local=window.localStorage.getItem('user')

if(local){
	store.commit('user/USER',JSON.parse(local))
}
let vm=new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
export default vm
