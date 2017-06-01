import Vue from 'vue';
Vue.mixin({
	methods:{
		goto:function(value){
			this.$router.push(value);
		}
	}
});
