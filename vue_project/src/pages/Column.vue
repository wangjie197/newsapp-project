<template>
  <div class="Column">
		<Cell
		v-for="item of $store.state.column.column"
		:key='item._id'
		:data='item'
		api-name='column'
		/>
  </div>
</template>

<script>
	import Cell from '../components/Cell.vue'
export default {
  name: 'Column',
  props: {
    
  },
  data(){
	  return {
		 column:[]
	  }
  },
  components:{
	  Cell
  },
    activated(){
		// axios({
		// 	url:'/api/goods/column',
		// 	params:{_page:1,_limit:5},
		// }).then(
		// res=>this.column=res.data.data
		// )
		this.$store.dispatch(`column/${this.$types.COLUMN}`)
	},
    updated(){},
    methods:{}
}
</script>

<style scoped>
.Column{
	margin-top: 0.4rem;
	margin-left: 0.4rem;
	margin-right: 0.4rem;
}
</style>
