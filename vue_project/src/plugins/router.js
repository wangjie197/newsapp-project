import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/Home.vue'
// import Follow from '../pages/Follow.vue'

// let Follow=()=>import(/*webpackChunkName:'follow'*/ '../pages/Follow.vue');

// import Column from '../pages/Column.vue'
import Detail from '../pages/Detail.vue'
import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'
import User from '../pages/User.vue'
import NoPage from '../pages/NoPage.vue'
let routes=[
	{path:'/home',component:Home},
	{path:'/follow',component:(r) => { require(['../pages/Follow.vue'],r) }},
	
	
	{path:'/column',component:(r) => { require(['../pages/Column.vue'],r) }},
	
	
	{path:'/detail/:_id',component:Detail,name:'detail'},
	{path:'/login',component:Login},
	{path:'/reg',component:Reg},
	{path:'/user',component:User},
	{path:'/',redirect:'/home'},
	{path:'*',component:NoPage},
]
let router=new VueRouter({
	routes,
	mode:'history'
})
export default router