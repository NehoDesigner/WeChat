export default {
	isOnline:function(){
		if(localStorage.getItem('token')){
			return true;
		}else{
			return false;
		}
	},
	setToken:function(value){
		localStorage.setItem('token',value);
	}
}
