<template>
  <div id="app">
    <router-view></router-view>
    <loading v-model="show" :text="text"></loading>
  </div>
</template>

<script>
	import { Loading } from 'vux'
export default {
  name: 'app',
  data(){
  	return{
  		text:'loading'
  	}
  },
  components:{
  	Loading
  },
  computed:{
  	show:function(){
  		return this.$store.state.status.callBackStatus;
  	}
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
</style>
