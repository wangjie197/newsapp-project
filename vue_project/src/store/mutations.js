import {
	UPDATE_NAV,UPDATE_FOOT,UPDATE_LOADING
} from './types.js'
let mutations={
	[UPDATE_NAV]:(state,payload)=>state.bNav=payload,
	[UPDATE_FOOT]:(state,payload)=>state.bFoot=payload,
	[UPDATE_LOADING]:(state,payload)=>state.bloading=payload
}
export default mutations