import * as types from '../types.js'
const state={
	user:{
		err:1
	}
}

const mutations={
	[types.USER]:(state,payload)=>state.user=payload
}

export default{
	namespaced:true,
	state,mutations
}