import {get} from '../service.js'
import * as types from '../types.js'

const state={
	banner:[],
}

const actions={
	[types.BANNER]:({commit,state},payload)=>{
		get({apiname:'banner'}).then(
			result=>commit('BANNER',result)
		)
	},
}

const mutations={
	[types.BANNER]:(state,payload)=>state.banner=payload,
}

export default{
	namespaced:true,   //命名空间的模块 内部直接调用  外部需要命名空间（见组件）
	state,actions,mutations
}