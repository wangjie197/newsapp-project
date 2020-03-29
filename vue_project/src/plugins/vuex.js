import vue from 'vue'
import Vuex from 'vuex'
vue.use(Vuex)

// import actions from '../store/actions.js'
import state from '../store/state.js'
import mutations from '../store/mutations.js'
// import getters from '../store/getters.js'

import banner from '../store/module/banner.js'
import home from '../store/module/home.js'
import follow from '../store/module/follow.js'
import column from '../store/module/column.js'
import user from '../store/module/user.js'
import detail from '../store/module/detail.js'
let store=new Vuex.Store({
	state,mutations,
	modules:{
		banner,home,column,follow,user,detail
	}
})

export default store