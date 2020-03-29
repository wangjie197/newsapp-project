<template>
  <div class="Button">
	<input 
	type="button" 
	:value="text"
	:style="{background:bgColor}"
	class="login-btn"
	@click="$emit('click')"
	
	 />
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text:{
		type:String,
		required:true,
		default:'按钮'
	},
	bgColor:{
		type:String,
		default:'red'
	}
  },
  data(){
	  return {
		 
	  }
  },
  components:{},
    mounted(){},
    updated(){},
    methods:{}
}
</script>

<style scoped>
.Button{}
  .login-btn{width:4.65rem;height:0.65rem; background:#4c4f50; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block; margin-top:0.62rem; font-size:0.28rem;}
</style>
