// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
FastClick.attach(document.body)
Vue.config.productionTip = false
import App from './App'

//vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import { routes } from './router/index'
const router = new VueRouter({
	routes
});

//字体
import './static/css/font.css';

//httpService
import httpService from './service/httpService';
window.httpService = httpService;

//sessionHelper
import sessionHelper from './service/sessionHelper';
//扩展
import './extend/mixin'

//base css
import './static/css/base.css';

//vuex
import store from './vuex'

//mint-ui
import { IndexList, IndexSection, Cell } from 'mint-ui';
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
Vue.component(Cell.name, Cell);
//vux
import { ConfirmPlugin } from 'vux'
Vue.use(ConfirmPlugin)
/* eslint-disable no-new */
window.ROOT_APP = new Vue({
	router,
	store,
	methods: {
		login: function(value) {
			sessionHelper.setToken(value);
			this.$store.dispatch('loginStatus', true);
			this.goto('/chat');
		},
		logout: function() {
			localStorage.clear();
			this.$store.dispatch('loginStatus', false);
			this.goto('/');
		},
		back: function() {
			if(this.$route.path == '/chat' || this.$route.path == '/contact' || this.$route.path == '/explore' || this.$route.path == '/me' || this.$route.path == '/') {
				return false
			} else {
				this.$router.go('-1');
				return true;
			}
		}
	},
	created: function() {
		if(sessionHelper.isOnline()) {
			this.$store.dispatch('loginStatus', true);
			this.goto('/chat');
		}
	},
	render: h => h(App)
}).$mount('#app-box');
//H5+
// 监听plusready事件  
document.addEventListener("plusready", function() {
	// 扩展API加载完毕，现在可以正常调用扩展API
	plus.key.addEventListener("backbutton", function() {
		if(!ROOT_APP.back()) {
			plus.runtime.quit();
		}
	});
}, false);