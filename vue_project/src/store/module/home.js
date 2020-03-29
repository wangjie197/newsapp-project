import {get} from '../service.js'
import * as types from '../types.js'

const state={
	home:[],
}

const actions={
	[types.HOME]:({commit,state},payload)=>{
		get({apiname:'home',}).then(
			result=>commit('HOME',result)
		)
	},
}

const mutations={
	[types.HOME]:(state,payload)=>state.home=payload,
}

export default{
	namespaced:true,   //命名空间的模块 内部直接调用  外部需要命名空间（见组件）
	state,actions,mutations
}