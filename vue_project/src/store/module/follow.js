import {get} from '../service.js'
import * as types from '../types.js'

const state={
	follow:[],
}

const actions={
	[types.FOLLOW]:({commit,state},payload)=>{
		get({apiname:'follow'}).then(
			result=>commit('FOLLOW',result)
		)
	},
}

const mutations={
	[types.FOLLOW]:(state,payload)=>state.follow=payload,
}

export default{
	namespaced:true,   //命名空间的模块 内部直接调用  外部需要命名空间（见组件）
	state,actions,mutations
}