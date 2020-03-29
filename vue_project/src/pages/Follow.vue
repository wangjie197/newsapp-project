<template>
  <div class="Follow">
		<Cell
		v-for="(item,index) of $store.state.follow.follow"
		:key='item._id'
		:data='item'
		:index='index'
		api-name='follow'
		/>
  </div>
</template>

<script>
	import Cell from '../components/Cell.vue'
	import {mapActions} from 'vuex'
	import {FOLLOW} from '../store/types.js'
export default {
  name: 'Follow',
  props: {
    
  },
  data(){
	  return {
		 follow:[]
	  }
  },
  components:{
	  Cell
  },
    activated(){
		// axios({
		// 	url:'/api/goods/follow',
		// 	params:{_page:1,_limit:5},
		// }).then(
		// res=>{
		// 	this.follow=res.data.data
		// }
		// )
		this[this.$types.FOLLOW]()
	},
    updated(){},
    methods:mapActions('follow',[FOLLOW])
}
</script>

<style scoped>
.Follow{
	margin-top: 0.4rem;
	margin-left: 0.4rem;
	margin-right: 0.4rem;
}
</style>
