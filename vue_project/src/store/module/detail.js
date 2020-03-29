import {get} from '../service.js'
import * as types from '../types.js'

const state={
	detail:{},
}

const actions={
	[types.DETAIL]:({commit,state},{apiname,_id})=>{
		get({apiname,_id}).then(
			result=>commit('DETAIL',result)
		)
	},
}

const mutations={
	[types.DETAIL]:(state,payload)=>state.detail=payload,
}

export default{
	namespaced:true,   //命名空间的模块 内部直接调用  外部需要命名空间（见组件）
	state,actions,mutations
}