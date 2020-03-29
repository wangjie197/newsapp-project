<template>
  <div class="uc-input">
	<input :type="type" :value="value" @input="$emit('input',$event.target.value)" @keyup.ctrl.13="$emit('login')" />
	<span>{{debal}}</span>
  </div>
</template>

<script>
export default {
  name: 'uc-input',
  props: {
    debal:{
		type:String,
		default:'标题'
	},
	type:{
		type:String,
		default:'text'
	},
	value:{
		type:String,
		default:''
	},
	
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
.uc-input{}
.uc-input{border-bottom:1px solid #e5e7e8;height:0.95rem; position:relative;}
.uc-input input{ padding-left:1.24rem;width:4.54rem;height:100%; font-size:0.4rem;}
.uc-input span{width:1.23rem;height:0.49rem; position:absolute;top:0.26rem;left:0; border-right:1px solid #676868; color:#676868; font-size:0.25rem; line-height:0.49rem; text-align:center;}
</style>
