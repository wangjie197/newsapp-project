<template>
  <div class="Home">
	<swiper
	:data="$store.state.banner.banner"
	apiName='banner'
	/>
	<div class="home-m-l-r">
		<Cell
		v-for="(item,index) of $store.state.home.home"
		:key='item._id'
		:data='item'
		:index='index'
		api-name='home'
		/>
	</div>
  </div>
</template>

<script>
import swiper from '../components/swiper.vue';
import Cell from '../components/Cell.vue';
export default {
  name: 'Home',
  props: {},
  components:{
	  swiper,Cell
  },
    activated(){

		this.$store.dispatch(`home/${this.$types.HOME}`)
		this.$store.dispatch(`banner/${this.$types.BANNER}`)
	},
	
	
    updated(){},
    methods:{}
}
</script>

<style scoped>
.home-m-l-r{
	margin: 0 0.4rem;
}
</style>
