import {get} from '../service.js'
import * as types from '../types.js'

const state={
	column:[],
}

const actions={
	[types.COLUMN]:({commit,state},payload)=>{
		get({apiname:'column'}).then(
			result=>commit('COLUMN',result)
		)
	},
}

const mutations={
	[types.COLUMN]:(state,payload)=>state.column=payload,
}

export default{
	namespaced:true,   //命名空间的模块 内部直接调用  外部需要命名空间（见组件）
	state,actions,mutations
}