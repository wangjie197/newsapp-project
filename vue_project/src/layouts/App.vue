<template>
  <div id="app">
	<loading v-if="$store.state.bloading"/>
	<Header v-if="$store.state.bNav"/>
	<transition>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</transition>
	<Footer v-show="$store.state.bFoot"/>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Loading from '../components/loading.vue'
export default {
  name: 'App',
  components: {
    Header,Footer,Loading
  },
  watch:{
  	$route:{
      handler(nextValue,PrevValue){
		  // console.log("路由变化了",nextValue,PrevValue)
		  let path=nextValue.path;
		  
		  if(/home|follow|column/.test(path)){
			  // this.$root.bNav=this.$root.bFoot=true
			  this.$store.commit('UPDATE_NAV',true)
			  this.$store.commit('UPDATE_FOOT',true)
		  }
		  
		  if(/detail|login|reg/.test(path)){
			  // this.$root.bNav=this.$root.bFoot=false,
			  this.$store.commit('UPDATE_NAV',false)
			  this.$store.commit('UPDATE_FOOT',false)
		  }
		  if(path.includes('/user')){
			  // this.$root.bNav=false;
			  // this.$root.bFoot=true
			  this.$store.commit('UPDATE_NAV',false)
			  this.$store.commit('UPDATE_FOOT',true)
		  }
	  },
      immediate:true
    }
  }
}
</script>

<style>

</style>
